import json
import tempfile
import unittest
from pathlib import Path
from scripts.monitoring import normalize_url, parse_feed, check_source, is_publishable, collect

class MonitoringTests(unittest.TestCase):
    def test_normalizes_url(self):
        self.assertEqual(normalize_url("https://www.w3.org/a/?utm_source=mail&x=1"),"https://www.w3.org/a?x=1")
    def test_refuses_unsafe_hosts(self):
        with self.assertRaises(ValueError):
            check_source({"id":"bad","url":"http://localhost/feed","hostname":"localhost"})
        with self.assertRaises(ValueError):
            check_source({"id":"bad","url":"https://example.net/feed","hostname":"example.net"})
    def test_rss(self):
        body=b"<rss><channel><item><title>W3C update</title><link>https://www.w3.org/a</link></item></channel></rss>"
        records=parse_feed(body,"w3c-news")
        self.assertEqual(len(records),1)
        self.assertEqual(records[0]["review_status"],"a_verifier")
        self.assertFalse(records[0]["publishable"])
    def test_atom(self):
        body=b'<feed xmlns="http://www.w3.org/2005/Atom"><entry><title>Topic</title><link href="https://www.w3.org/b"/></entry></feed>'
        self.assertEqual(len(parse_feed(body,"w3c-blog")),1)
    def test_entity_forbidden(self):
        with self.assertRaises(ValueError):
            parse_feed(b'<!DOCTYPE x [<!ENTITY boom "bad">]><rss/>',"w3c")
    def test_release_requires_all_checks(self):
        article={"type":"article","review_status":"valide","rights_status":"ok",
            "verified_at":"2026-11-12","reviewed_by":"editor","source_refs":["primary"],
            "editorial_approval":{"decision":"approved","approved_at":"2026-11-12","approved_by":"editor"}}
        self.assertTrue(is_publishable(article))
        article["rights_status"]="a_verifier"
        self.assertFalse(is_publishable(article))
        article["type"]="news_candidate"
        self.assertFalse(is_publishable(article))
    def test_offline_dedup_and_no_publication(self):
        with tempfile.TemporaryDirectory() as tmp:
            d=Path(tmp);(d/"fixtures").mkdir()
            (d/"fixtures"/"w3c-news.xml").write_text('<rss><channel><item><title>One</title><link>https://www.w3.org/a?utm_source=x</link></item><item><title>Repeat</title><link>https://www.w3.org/a</link></item></channel></rss>',encoding="utf-8")
            (d/"cfg.json").write_text(json.dumps({"sources":[{"id":"w3c-news","hostname":"www.w3.org","url":"https://www.w3.org/news/feed","enabled":True}]}))
            report=collect(d/"cfg.json",d/"out",d/"fixtures")
            self.assertEqual(report["candidates"],1)
            self.assertEqual(report["publication"],"disabled")
            stored=json.loads((d/"out"/"candidates.json").read_text())
            self.assertFalse(stored[0]["publishable"])
if __name__=="__main__":
    unittest.main()
