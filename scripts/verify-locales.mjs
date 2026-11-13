/**
 * WebAI locale parity check.
 * Runs after Astro build + Pagefind, requires no external service.
 * Ensures every French route has its English counterpart and vice versa.
 * Checks HTML language, the explicit FR/EN switch and hreflang alternates.
 * This verifies structural completeness, not professional translation quality.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const failures = [];
const assert = (ok, text) => {if(!ok)failures.push(text);};
function listRoutes(lang) {
  const base=path.join(root,lang);
  if(!fs.existsSync(base)){failures.push('Missing locale directory: '+lang);return new Map();}
  const out = new Map();
  const visit=(dir)=>{
    for(const e of fs.readdirSync(dir,{withFileTypes:true})){
      const target=path.join(dir,e.name);
      if(e.isDirectory())visit(target);
      else if(e.isFile()&&e.name==='index.html'){
        const route=path.relative(base,dir).replace(/\\/g,'/');
        out.set(route,fs.readFileSync(target,'utf8'));
      }
    }
  }; visit(base);
  return out;
}
const fr=listRoutes('fr'),en=listRoutes('en');
const routes=new Set([...fr.keys(),...en.keys()]);
for(const route of routes){
  const urlPart=route?route+'/':'';
  for(const [locale,other,collection] of [['fr','en',fr],['en','fr',en]]){
    const html=collection.get(route);
    assert(Boolean(html),'Missing '+locale+' counterpart of /'+urlPart);
    if(!html)continue;
    assert(new RegExp('<html\\s[^>]*lang="'+locale+'"').test(html),'Invalid HTML lang: /'+locale+'/'+urlPart);
    for(const l of ['fr','en']){
      const anchor='/'+l+'/'+urlPart;
      assert(html.includes('href="'+anchor+'"'),'Missing '+l.toUpperCase()+' language switch on /'+locale+'/'+urlPart);
      assert(new RegExp('<link\\s[^>]*rel="alternate"[^>]*hreflang="'+l+'"').test(html),
             'Missing '+l.toUpperCase()+' alternate metadata on /'+locale+'/'+urlPart);
    }
    assert(html.includes('class="locale-switch"'),'Missing visible locale selector: /'+locale+'/'+urlPart);
    assert(html.includes('href="/'+locale+'/'),'No local navigation for /'+locale+'/'+urlPart);
    assert(html.includes('noindex,nofollow'),'Preview indexing guard missing: /'+locale+'/'+urlPart);
    for(const hit of html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)){
      const visible=hit[2].replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').trim();
      assert(!visible.endsWith('.'),'Heading ending with a full stop: /'+locale+'/'+urlPart+' — '+visible.slice(-85));
    }
  }
}
assert(fr.size>=40,'Too few French pages: '+fr.size);
assert(en.size>=40,'Too few English pages: '+en.size);
const enHome=en.get('')||'';
assert(enHome.includes('The Web generated'),'English reference homepage headline is missing');
assert(!enHome.includes('Le Web généré'),'French homepage hero leaked into EN');
assert((fr.get('')||'').includes('Le Web généré'),'French reference homepage headline is missing');
for(const route of ['concept','technologies','standards','acteurs','chronologie','faq','agents']){
 assert(fr.has(route),'Missing French reference category: '+route);
 assert(en.has(route),'Missing English reference category: '+route);
}
for(const segment of ['/concept/','/technologies/','/standards/','/acteurs/','/observatoire/']){
 assert(enHome.includes('href="/en'+segment+'"'),'Reference homepage missing link '+segment);
}
for(const slug of ['chatgpt-work','codex','claude-code','jules','langgraph','crewai','google-adk','openai-agents-sdk','n8n-ai-agent']){
 assert(fr.has('agents/'+slug),'Missing French agent profile: '+slug);
 assert(en.has('agents/'+slug),'Missing English agent profile: '+slug);
}
assert((fr.get('')||'').includes('href="/fr/agents/"'),'French homepage missing AI Agents entry');
assert(enHome.includes('href="/en/agents/"'),'English homepage missing AI Agents entry');
const frAgents=fr.get('agents')||'';
const enAgents=en.get('agents')||'';
assert(frAgents.includes('id="agent-query"')&&enAgents.includes('id="agent-query"'),'Missing bilingual directory search controls');
assert(frAgents.includes('data-agent-card')&&enAgents.includes('data-agent-card'),'Bilingual directory cards not rendered');
// Regression: the screenshot showed raw {fr?...} labels and a stray '}' in the citation textarea.
const labFr=fr.get('laboratoire')||'',labEn=en.get('laboratoire')||'';
for(const [locale,html] of [['fr',labFr],['en',labEn]]){
 assert(html.includes('id="lab-navigator"'),'Missing Studio navigation in '+locale);
 assert(html.includes('id="lab-search"'),'Missing Studio search in '+locale);
 assert(html.includes('id="labx-evidence-run"'),'Evidence form not generated in '+locale);
 assert((html.match(/class="studio-card(?:\s|")/g)||[]).length>=15,'Fewer than 15 tool cards in '+locale);
 const markup=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
 assert(!markup.includes('{fr?')&&!markup.includes("{fr ?")&&!markup.includes("{'"),'Raw Astro interpolation visible in '+locale+' laboratory');
 assert(!/<textarea[^>]*id="labx-evidence-claim"[^>]*>\s*\}<\/textarea>/i.test(markup),'Unexpected closing brace in '+locale+' citation field');
}
assert(labFr.includes('Fiche de vérification de citation'),'Missing properly translated French citation heading');
assert(labEn.includes('Citation review worksheet'),'Missing properly translated English citation heading');

if(failures.length){
  console.error('WebAI language parity failed:\n'+failures.join('\n'));
  process.exitCode=1;
}else{
  console.log('FR/EN parity passed: '+fr.size+' French and '+en.size+' English pages, working same-page language links and alternate metadata. Translation quality still needs human review.');
}
