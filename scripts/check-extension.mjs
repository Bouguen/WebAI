import {readFileSync} from 'node:fs';
import {Script} from 'node:vm';
import {atlas} from '../src/data/atlas.js';
import {dossiers} from '../src/data/dossiers.js';
import {guides} from '../src/data/guides.js';
import {sectorPlaybooks} from '../src/data/sectorPlaybooks.js';
import {learningPathDetails} from '../src/data/learningPathDetails.js';
import {scienceSources} from '../src/data/scienceSources.js';
import {referenceNav,referencePillars,technologyGroups,standardsRegister,ecosystemActors,referenceTimeline,referenceFaq,referenceResearchers} from '../src/data/referenceContent.js';
import {agentDirectory,agentCategories,agentKinds,agentFaq,agentGuides} from '../src/data/agents.js';
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
check(agentDirectory.length===22,'Directory should contain 22 AI agent profiles');
check(agentDirectory.filter(x=>x.kind==='pret').length===12,'Expected 12 ready-to-use AI agents');
check(agentDirectory.filter(x=>x.kind==='creation').length===10,'Expected 10 agent builder frameworks');
check(referenceNav.some(x=>x.id==='agents'),'Agents IA must appear in the primary reference navigation');
check(new Set(agentDirectory.map(x=>x.slug)).size===agentDirectory.length,'Duplicate agent slugs');
check(Object.keys(agentCategories).length===6,'Six distinct agent categories required');
check(Object.keys(agentKinds).length===2,'Agent products and developer frameworks must remain distinct');
for(const agent of agentDirectory){
 check(agent.status==='a_verifier','Agent profile must be pending review: '+agent.slug);
 check(validHttps(agent.website)&&validHttps(agent.docs),'Missing official HTTPS sources: '+agent.slug);
 check(translated(agent.description)&&agent.description.fr.length>110&&agent.description.en.length>100,'Agent description too short or missing translation: '+agent.slug);
 check(translated(agent.scenario)&&translated(agent.start)&&translated(agent.limits),'Missing bilingual usage and limits: '+agent.slug);
 check(agent.steps.length===4&&agent.steps.every(translated),'Four bilingual walkthrough steps required: '+agent.slug);
 check(!!agentCategories[agent.category]&&!!agentKinds[agent.kind],'Unknown agent type or category: '+agent.slug);
}
check(agentFaq.length>=5&&agentFaq.every(x=>translated(x.q)&&translated(x.a)&&validHttps(x.source)),'Agent FAQ incomplete');
check(agentGuides.length===2&&agentGuides.every(x=>x.steps.length===5&&validHttps(x.source)),'Agent guides incomplete');
const agentComponent=readFileSync(new URL('../src/components/AgentsDirectory.astro',import.meta.url),'utf8');
const agentScript=agentComponent.match(/<script is:inline>([\s\S]*?)<\/script>/);
check(!!agentScript,'Interactive agent directory browser code missing');
if(agentScript){try{new Script(agentScript[1],{filename:'AgentsDirectory.astro inline script'});}catch(e){failed.push('Invalid agent directory JS: '+e.message);}}
for(const id of ['agent-query','agent-kind','agent-category','agent-count','agents-compare-panel'])check(agentComponent.includes('id="'+id+'"'),'Missing interactive directory element: '+id);

check(referenceNav.length===8,'Main reference navigation must offer eight meaningful categories');
check(new Set(referenceNav.map(x=>x.id)).size===referenceNav.length,'Reference navigation contains duplicates');
for(const item of referenceNav)check(translated(item.title),'Missing translated reference navigation: '+item.id);
check(referencePillars.length===4,'Reference overview requires four distinct dimensions');
check(technologyGroups.length===7,'Technology atlas requires seven documented families');
check(standardsRegister.length>=10,'Standard register should contain ten or more specifications');
check(ecosystemActors.length>=10,'Reference directory should include ten or more organizations');
check(referenceResearchers.length>=5,'Include a sourced historical researchers section');
check(referenceTimeline.length>=10,'Historical timeline requires ten sourced milestones');
check(referenceFaq.length>=12,'Reference FAQ should contain 12 sourced questions');
for(const group of technologyGroups){
 check(translated(group.title)&&translated(group.description),'Untranslated technology family: '+group.id);
 for(const slug of group.topics)check(atlas.topics.some(x=>x.slug===slug),'Broken technology topic reference: '+slug);
 for(const slug of group.tools)check(atlas.catalog.some(x=>x.slug===slug),'Broken technology tool reference: '+slug);
}
for(const item of standardsRegister){
 check(validHttps(item.url),'Standard missing source: '+item.name);
 check(translated(item.status)&&translated(item.scope),'Untranslated standard: '+item.name);
 for(const slug of item.topics)check(atlas.topics.some(x=>x.slug===slug),'Broken standard related article: '+slug);
}
for(const item of ecosystemActors){
 check(validHttps(item.url)&&translated(item.scope),'Invalid organization record: '+item.name);
 check(atlas.topics.some(x=>x.slug===item.topic),'Unknown organization topic: '+item.name);
}
for(const item of referenceResearchers){
 check(validHttps(item.source)&&translated(item.work),'Invalid researcher source or description: '+item.name);
 for(const slug of item.topics)check(atlas.topics.some(x=>x.slug===slug),'Broken researcher related article: '+slug);
}
for(const item of referenceTimeline)check(validHttps(item.url)&&translated(item.title)&&translated(item.text),'Invalid timeline milestone: '+item.year);
for(const item of referenceFaq)check(validHttps(item.source)&&translated(item.question)&&translated(item.answer),'Invalid reference FAQ: '+item.question?.fr);
const page=readFileSync(new URL('../src/pages/[lang]/index.astro',import.meta.url),'utf8');
const layout=readFileSync(new URL('../src/layouts/BaseLayout.astro',import.meta.url),'utf8');
check(page.includes('referenceNav.map'),'Homepage must show main reference categories');
check(layout.includes('referenceNav.map'),'Header must show main reference categories');
check(layout.includes('noindex,nofollow'),'Preview indexing protection must stay active');

if(failed.length){console.error('WebAI content extension checks failed:\n'+failed.join('\n'));process.exitCode=1;}
else console.log('Extended research, 36 dossiers, 51 tool profiles, 10 labs, 10 sectors, 6 pathways and bibliography: structural and JavaScript syntax checks passed.');
