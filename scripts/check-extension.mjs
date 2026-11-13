import {readFileSync} from 'node:fs';
import {Script} from 'node:vm';
import {atlas} from '../src/data/atlas.js';
import {dossiers} from '../src/data/dossiers.js';
import {guides} from '../src/data/guides.js';
import {sectorPlaybooks} from '../src/data/sectorPlaybooks.js';
import {learningPathDetails} from '../src/data/learningPathDetails.js';
import {scienceSources} from '../src/data/scienceSources.js';
const failed=[];
const check=(ok,msg)=>{if(!ok)failed.push(msg);};
const validHttps=value=>{try{return new URL(value).protocol==='https:';}catch{return false;}};
const translated=v=>!!(v&&typeof v.fr==='string'&&v.fr.trim()&&typeof v.en==='string'&&v.en.trim());
check(atlas.catalog.length===51,'Exactly 51 AI Tool records expected');
for(const tool of atlas.catalog){
 const p=tool.profile;
 check(!!p,'Missing detailed profile for '+tool.slug);
 if(!p)continue;
 check(translated(p.explain)&&p.explain.fr.length>=100&&p.explain.en.length>=100,'Description needs bilingual detail: '+tool.slug);
 check(translated(p.use)&&translated(p.limit)&&translated(p.context),'Missing example/limits/context for '+tool.slug);
 check(p.questions?.fr?.length===3&&p.questions?.en?.length===3,'Three review questions required: '+tool.slug);
 check(Array.isArray(p.references)&&p.references.length>=3,'Tool requires at least three supporting references: '+tool.slug);
 const urls=[tool.url,...(p.references??[]).map(ref=>ref.url)];
 check(urls.every(validHttps),'Tool references must use HTTPS: '+tool.slug);
 check(new Set(urls).size===urls.length,'Duplicate tool reference: '+tool.slug);
 for(const ref of p.references??[])check(translated(ref.label),'Source label not translated: '+tool.slug);
}
check(Object.keys(dossiers).length===36,'Every one of the 36 topics must have an extended dossier');
for(const [slug,d] of Object.entries(dossiers)){
 check(d.review_status==='a_verifier','Keep scientific review pending: '+slug);
 check(d.sections.length>=6,'Dossier must include six detailed sections: '+slug);
 check(d.steps.length>=4&&d.checks.length>=3,'Dossier must retain workflow and critical checks: '+slug);
 for(const x of d.sections)check(translated(x.title)&&translated(x.body),'Untranslated dossier content: '+slug);
}
check(guides.length===20,'20 practical guides expected');
check(sectorPlaybooks.length===10,'Ten real-world use case walkthroughs required');
for(const [i,p] of sectorPlaybooks.entries()){
 check(translated(p.scenario)&&translated(p.risks)&&translated(p.outcome),'Incomplete sector playbook '+i);
 check(p.steps.length===5&&p.steps.every(translated),'Five bilingual sector steps required: '+i);
 check(p.refs.length>=2&&p.refs.every(x=>validHttps(x.url)),'Two sector primary references required: '+i);
}
for(const lesson of atlas.lessons){
 const p=learningPathDetails[lesson.slug];
 check(!!p,'Missing path '+lesson.slug);
 if(!p)continue;
 check(translated(p.goal)&&translated(p.artifact)&&translated(p.criteria),'Incomplete path metadata '+lesson.slug);
 check(p.steps.length===5&&p.steps.every(translated),'Five bilingual learner exercises required '+lesson.slug);
 check(validHttps(p.source),'Missing path reference '+lesson.slug);
}
check(scienceSources.length===10&&scienceSources.every(x=>validHttps(x.url)&&translated(x.desc)&&translated(x.method)&&translated(x.limits)),'Incomplete science bibliography');
const lab=readFileSync(new URL('../src/components/LabExpansion.astro',import.meta.url),'utf8');
const block=lab.match(/<script is:inline define:vars=\{\{lang\}\}>([\s\S]*?)<\/script>/);
check(!!block,'Local lab extension must contain browser JavaScript');
if(block){
 try{new Script(block[1],{filename:'LabExpansion.astro inline script'});}catch(error){failed.push('Invalid lab browser script: '+error.message);}
}
for(const name of ['robots','ld','chunk','sitemap','html','url','mcp','diff','evidence','md']){
 check(lab.includes('id="labx-'+name+'-run"')||lab.includes('id="labx-'+name+'-build"'),'Missing interactive lab module: '+name);
}
check((lab.match(/class="studio-card"/g)||[]).length===10,'Lab extension should contain ten modules');
if(failed.length){console.error('WebAI content extension checks failed:\n'+failed.join('\n'));process.exitCode=1;}
else console.log('Extended research, 36 dossiers, 51 tool profiles, 10 labs, 10 sectors, 6 pathways and bibliography: structural and JavaScript syntax checks passed.');
