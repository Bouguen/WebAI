import { deepDossiersPart1 } from './dossiers-part1.js';
import { deepDossiersPart2 } from './dossiers-part2.js';
import {researchDossiers} from './researchExpansion.js';
import {foundationalDossiersA} from './foundationalDossiersA.js';
import {foundationalDossiersB} from './foundationalDossiersB.js';
// Editorial descriptions prepared for human fact/rights review.
// Curated links are thematic connections, not claims of formal institutional endorsement.
export const dossiers = {...deepDossiersPart1,...deepDossiersPart2,...researchDossiers,...foundationalDossiersA,...foundationalDossiersB};
export const dossierSlugs = Object.keys(dossiers);
