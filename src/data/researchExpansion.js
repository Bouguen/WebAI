import {researchRowsA} from './research-part-a.js';
import {researchRowsB} from './research-part-b.js';
import {researchStepTranslations,researchCheckTranslations} from './researchLocales.js';
/** Editorial research snapshot 13 November 2026; not yet independently reviewed. */
export const researchRows=[...researchRowsA,...researchRowsB];
export const researchTopics=researchRows.map(r=>({
 slug:r.slug,category:r.category,title:r.title,summary:r.summary,
 body:{fr:r.sections.slice(0,2).map(s=>s.body.fr).join(' '),en:r.sections.slice(0,2).map(s=>s.body.en).join(' ')},
 source:r.source
}));
export const researchDossiers=Object.fromEntries(researchRows.map(r=>[r.slug,{
 stage:r.title,audience:r.audience,lead:r.summary,sections:r.sections,
 steps:r.steps.map((step,i)=>({...step,en:researchStepTranslations[r.slug]?.[i]??step.en})),
 checks:r.checks.map((check,i)=>({...check,[researchRowsA.includes(r)?'en':'fr']:researchCheckTranslations[r.slug]?.[i]??check.fr})),tools:r.tools,
 refs:[{label:'Source primaire · Primary source',url:r.source}],
 relations:researchRows.filter(other=>other.slug!==r.slug&&other.group===r.group).slice(0,3).map(other=>other.slug),
 review_status:'a_verifier',snapshot_date:'2026-11-13'
}]));
