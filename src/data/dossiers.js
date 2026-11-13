import { deepDossiersPart1 } from './dossiers-part1.js';
import { deepDossiersPart2 } from './dossiers-part2.js';
import {researchDossiers} from './researchExpansion.js';
import {foundationalDossiersA} from './foundationalDossiersA.js';
import {foundationalDossiersB} from './foundationalDossiersB.js';
import {dossierAddendaA} from './dossierAddendaA.js';
import {dossierAddendaB} from './dossierAddendaB.js';
import {dossierAddendaC} from './dossierAddendaC.js';
// Editorial descriptions prepared for human fact/rights review.
// Curated links are thematic connections, not claims of formal institutional endorsement.
const originalDossiers={...deepDossiersPart1,...deepDossiersPart2,...researchDossiers,...foundationalDossiersA,...foundationalDossiersB};
const addenda={...dossierAddendaA,...dossierAddendaB,...dossierAddendaC};
export const dossiers=Object.fromEntries(Object.entries(originalDossiers).map(([slug,d])=>[slug,{
 ...d,
 sections:[...d.sections,...(addenda[slug]??[])]
}]));
export const dossierSlugs = Object.keys(dossiers);
