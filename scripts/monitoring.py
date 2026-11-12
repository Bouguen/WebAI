#!/usr/bin/env python3
"""Stage RSS/Atom metadata candidates for human review. Never publish."""
from __future__ import annotations
import argparse, hashlib, html, json, re
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit, parse_qsl, urlencode
from urllib.request import Request, build_opener, HTTPRedirectHandler
from urllib.error import HTTPError, URLError
from xml.etree import ElementTree as ET

MAX_BYTES = 1500000
ALLOWLIST = {"www.w3.org"}
TRACKING = {"fbclid", "gclid", "mc_cid", "mc_eid"}

def now_iso():
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")

def normalize_url(raw):
    try:
        p = urlsplit(str(raw).strip())
        if p.scheme not in ("http", "https") or not p.hostname or p.username or p.password:
            return ""
        query = [(k, v) for k, v in parse_qsl(p.query, keep_blank_values=True)
                 if k.lower() not in TRACKING and not k.lower().startswith("utm_")]
        port = "" if p.port in (None, 80, 443) else ":" + str(p.port)
        return urlunsplit((p.scheme, p.hostname.lower() + port, p.path.rstrip("/") or "/", urlencode(sorted(query)), ""))
    except ValueError:
        return ""

def clean(value):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value or ""))).strip()[:280]

def local_name(tag):
    return tag.rsplit("}", 1)[-1].lower()

def child_value(node, names):
    for child in node:
        if local_name(child.tag) in names and child.text and child.text.strip():
            return child.text.strip()
    return ""

def parse_feed(xml_bytes, source_id):
    if len(xml_bytes) > MAX_BYTES:
        raise ValueError("Feed too large")
    if b"<!DOCTYPE" in xml_bytes.upper() or b"<!ENTITY" in xml_bytes.upper():
        raise ValueError("DTD/entities not allowed")
    root = ET.fromstring(xml_bytes)
    result = []
    for node in root.iter():
        if local_name(node.tag) not in ("item", "entry"):
            continue
        title = clean(child_value(node, {"title"}))
        link = child_value(node, {"link", "guid", "id"})
        for child in node:
            if local_name(child.tag) == "link" and child.attrib.get("href"):
                if child.attrib.get("rel", "alternate") == "alternate":
                    link = child.attrib["href"]
                    break
        link = normalize_url(link)
        if not title or not link:
            continue
        key = "url:" + link
        result.append({
            "id": "candidate-" + hashlib.sha256(key.encode()).hexdigest()[:16],
            "type": "news_candidate", "source_id": source_id,
            "title": title, "canonical_url": link,
            "excerpt": clean(child_value(node, {"description", "summary", "subtitle"})),
            "source_published_raw": clean(child_value(node, {"pubdate", "published", "updated", "date"})) or None,
            "collected_at": now_iso(), "review_status": "a_verifier",
            "rights_status": "a_verifier", "publishable": False
        })
    return result

def check_source(source):
    p = urlsplit(source.get("url", ""))
    if (not source.get("id") or p.scheme != "https" or p.hostname not in ALLOWLIST
        or p.hostname != source.get("hostname") or p.username or p.password or p.port):
        raise ValueError("Feed URL not allowed (requires exact HTTPS host)")
    return source["url"]

class SafeRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        origin, dest = urlsplit(req.full_url), urlsplit(newurl)
        if dest.scheme != "https" or dest.hostname != origin.hostname:
            raise ValueError("Unexpected redirect")
        return super().redirect_request(req, fp, code, msg, headers, newurl)

def download(source):
    req = Request(check_source(source), headers={
        "User-Agent": "WebAI-Research-Metadata/0.2 (staging only)",
        "Accept": "application/rss+xml,application/atom+xml,application/xml"
    })
    with build_opener(SafeRedirect()).open(req, timeout=12) as response:
        blob = response.read(MAX_BYTES + 1)
        if len(blob) > MAX_BYTES:
            raise ValueError("Feed too large")
        return blob

def is_publishable(rec):
    approval = rec.get("editorial_approval") or {}
    if rec.get("type") in ("source", "news_candidate") or not isinstance(approval, dict):
        return False
    return bool(
        rec.get("review_status") == "valide" and rec.get("rights_status") == "ok"
        and rec.get("verified_at") and rec.get("reviewed_by")
        and (rec.get("source_refs") or rec.get("sources"))
        and approval.get("decision") == "approved" and approval.get("approved_at")
        and approval.get("approved_by")
    )

def collect(sources_path, output, fixture_dir=None):
    config = json.loads(Path(sources_path).read_text(encoding="utf-8"))
    sources = [x for x in config["sources"] if x.get("enabled", False)]
    if not sources:
        raise ValueError("No enabled feed sources")
    found, errors, per_source = {}, [], []
    for source in sources:
        try:
            check_source(source)
            content = (Path(fixture_dir) / (source["id"] + ".xml")).read_bytes() if fixture_dir else download(source)
            parsed = parse_feed(content, source["id"])
            added = 0
            for item in parsed:
                if item["canonical_url"] not in found:
                    found[item["canonical_url"]] = item
                    added += 1
            per_source.append({"id": source["id"], "found": len(parsed), "new_in_run": added})
        except (OSError, ValueError, ET.ParseError, HTTPError, URLError) as exc:
            errors.append({"id": source.get("id"), "error": type(exc).__name__, "message": str(exc)[:150]})
    items = sorted(found.values(), key=lambda i: (i["source_id"], i["title"]))
    report = {
        "generated_at": now_iso(), "mode": "offline" if fixture_dir else "live",
        "sources_requested": len(sources), "sources_ok": len(sources) - len(errors),
        "candidates": len(items), "errors": errors, "sources": per_source,
        "publication": "disabled", "human_review_required": True,
        "deduplication_scope": "single_run"
    }
    out = Path(output)
    out.mkdir(parents=True, exist_ok=True)
    (out / "candidates.json").write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (out / "report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return report

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sources", default="config/monitor-feeds.json")
    ap.add_argument("--out", default="outputs/monitoring")
    ap.add_argument("--fixtures")
    args = ap.parse_args()
    try:
        report = collect(args.sources, args.out, args.fixtures)
        print(json.dumps(report, ensure_ascii=False, indent=2))
        return 1 if report["sources_ok"] == 0 else 0
    except (OSError, ValueError, KeyError, json.JSONDecodeError) as exc:
        print("Monitoring error:", exc)
        return 2

if __name__ == "__main__":
    raise SystemExit(main())
