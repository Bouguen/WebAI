/**
 * Final editorial typography pass on generated Astro HTML, before Pagefind indexing.
 * Remove terminal full stops from visible h1–h6 text without changing paragraph copy.
 * This keeps localized reference titles consistent across all generated routes.
 * The transform is deliberately narrow: it does not rewrite code examples or source files.
 */
import {readdirSync,readFileSync,writeFileSync} from 'node:fs';
import {resolve,join} from 'node:path';

const root=resolve('dist');
let files=0,headings=0;
const headingPattern=/<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
const plainText=inner=>inner.replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').trim();
function cleanHeading(full,level,attrs,inner){
  if(!plainText(inner).endsWith('.'))return full;
  // Work only between tags, never inside attributes or links.
  const candidates=[...inner.matchAll(/(?:^|>)[^<]*?\.(\s*)(?=<|$)/g)];
  if(!candidates.length)return full;
  const match=candidates.at(-1);
  const dotOffset=match.index+match[0].lastIndexOf('.');
  const changed=inner.slice(0,dotOffset)+inner.slice(dotOffset+1);
  headings++;
  return '<h'+level+attrs+'>'+changed+'</h'+level+'>';
}
function visit(dir){
  for(const entry of readdirSync(dir,{withFileTypes:true})){
    const path=join(dir,entry.name);
    if(entry.isDirectory())visit(path);
    else if(entry.isFile() && entry.name==='index.html'){
      const original=readFileSync(path,'utf8');
      const revised=original.replace(headingPattern,cleanHeading);
      if(revised!==original){writeFileSync(path,revised);files++;}
    }
  }
}
visit(root);
console.log('WebAI heading punctuation: '+headings+' terminal stops removed across '+files+' generated pages.');
