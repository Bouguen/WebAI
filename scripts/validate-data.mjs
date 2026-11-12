import {atlas} from '../src/data/atlas.js';
import {guides} from '../src/data/guides.js';
import {dossiers} from '../src/data/dossiers.js';

const failures=[];
const check=(condition,message)=>{if(!condition)failures.push(message);};
const isHttps=url=>{try{return new URL(url).protocol==='https:';}catch{return false;}};
const translated=(value)=>Boolean(value&&typeof value.fr==='string'&&value.fr.trim()&&typeof value.en==='string'&&value.en.trim());
for(const [collection,items] of Object.entries(atlas)){
  check(Array.isArray(items),collection+' must be an array');
}
const ids=new Set();
for(const item of atlas.catalog){
  check(!ids.has(item.slug),'Duplicate tool slug: '+item.slug);
  ids.add(item.slug);
  check(isHttps(item.url),'Unsafe tool URL: '+item.slug);
  check(translated(item.desc),'Tool needs FR/EN description: '+item.slug);
}
const topicSlugs=new Set(atlas.topics.map(t=>t.slug));
for(const topic of atlas.topics){
  check(isHttps(topic.source),'Topic missing HTTPS primary source: '+topic.slug);
  check(translated(topic.title)&&translated(topic.summary)&&translated(topic.body),'Topic translation incomplete: '+topic.slug);
}
check(topicSlugs.size===atlas.topics.length,'Duplicate encyclopedia slugs');
for(const source of atlas.sources)check(isHttps(source.url)&&translated(source.desc),'Invalid source: '+source.name);
for(const term of atlas.glossary)check(term.fr&&term.en&&translated(term.definition),'Invalid glossary definition');
for(const lesson of atlas.lessons){
  check(Array.isArray(lesson.topics),'Lesson topics missing: '+lesson.slug);
  for(const id of lesson.topics)check(topicSlugs.has(id),'Broken learning topic '+id+' in '+lesson.slug);
}
for(const g of guides){
 check(isHttps(g.source),'Guide has invalid source: '+g.slug);
 check(translated(g.title)&&translated(g.intro),'Guide missing translation: '+g.slug);
 check(g.steps.length>=4,'Guide too short: '+g.slug);
 for(const step of g.steps)check(translated(step),'Missing guide step translation: '+g.slug);
}
check(new Set(guides.map(g=>g.slug)).size===guides.length,'Duplicate guide slug');
const toolSlugs=new Set(atlas.catalog.map(x=>x.slug));
for(const [slug,d] of Object.entries(dossiers)){
 check(topicSlugs.has(slug),'Dossier missing encyclopedia topic: '+slug);
 check(d.review_status==='a_verifier','Dossier must be marked pending: '+slug);
 check(translated(d.stage)&&translated(d.audience)&&translated(d.lead),'Incomplete bilingual metadata: '+slug);
 check(Array.isArray(d.sections)&&d.sections.length>=4,'Too few dossier sections: '+slug);
 check(Array.isArray(d.steps)&&d.steps.length>=4,'Dossier workflow incomplete: '+slug);
 check(Array.isArray(d.checks)&&d.checks.length>=3,'Dossier checks incomplete: '+slug);
 for(const s of d.sections)check(translated(s.title)&&translated(s.body),'Missing section translation: '+slug);
 for(const s of d.steps)check(translated(s),'Missing workflow translation: '+slug);
 for(const s of d.checks)check(translated(s),'Missing checkpoint translation: '+slug);
 for(const s of d.refs)check(isHttps(s.url)&&s.label,'Invalid dossier source: '+slug);
 for(const s of d.tools)check(toolSlugs.has(s),'Broken dossier tool link '+s+' in '+slug);
 for(const s of d.relations)check(topicSlugs.has(s),'Broken dossier related topic '+s+' in '+slug);
}
check(Object.keys(dossiers).length>=10,'Expected at least 10 deep dossiers');
if(failures.length){console.error('Data integrity errors (not factual validation):\n'+failures.join('\n'));process.exitCode=1;}
else console.log('Structural integrity passed for '+atlas.catalog.length+' tools, '+atlas.sources.length+' sources, '+atlas.glossary.length+' glossary terms, '+atlas.topics.length+' topics, '+guides.length+' guides and '+Object.keys(dossiers).length+' deep dossiers. This does not validate scientific accuracy or licensing.');
