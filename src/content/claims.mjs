// Forbidden-claims registry. See spec §2 and §8.
//
// Round Digital holds no certifications. Any language asserting one is a
// misrepresentation risk in a procurement context, so the build fails on it.
//
// The patterns deliberately allow "aligned to X", "pursuing X" and
// "X certification is in progress" — those are honest roadmap statements.
// They forbid the assertion forms: "X certified", "X-certified", "our X".

// Every prose string in this codebase is JSX-wrapped and indented, so an
// assertion can be line-wrapped ("ISO 27001\n          certified."). The gap
// between the certification name and the assertion word can therefore be
// several characters of whitespace/indentation, not just one — so this is a
// bounded run of whitespace/hyphen characters, not a single optional one.
const CERT_GAP = String.raw`[\s-]{0,40}`;

// Verbs that assert possession of a certification, whether framed as
// "certified/compliant" or as plain possession ("hold", "attained").
const CERT_VERBS = String.raw`certified|certification(?!\s+is\s+in\s+progress)(?!\s+is\s+planned)|accredited|appraised|compliant|hold|holds|attained|awarded`;

const CERT_ASSERTION = String.raw`${CERT_GAP}(?:${CERT_VERBS})`;

// Guards a term from matching when it's introduced as an honest roadmap
// statement ("pursuing SOC 2 certification") rather than an assertion.
// Fixed here after `node --test` exposed it against the Step 1 test suite:
// without this, "We are pursuing WBE Canada certification." was flagged.
const NOT_PURSUING = String.raw`(?<!pursuing\s+)`;

// Matches "Type I"/"Type II" (Roman) and "Type 1"/"Type 2" (Arabic) — SOC 2
// reports are commonly written either way.
const SOC2_TYPE = String.raw`(?:\s*Type\s*(?:I{1,2}|[12]))?`;

export const FORBIDDEN_CLAIMS = [
  {
    pattern: new RegExp(String.raw`${NOT_PURSUING}SOC\s*2${SOC2_TYPE}${CERT_ASSERTION}`, "gi"),
    reason: "SOC 2 is not held. Spec §2 — no certification is held today.",
  },
  {
    // ISO can be asserted either as a possession-verb prefix ("We hold ISO
    // 27001.") or as the usual certified/compliant suffix ("ISO 27001
    // certified."). Both forms are checked; either alone is enough to flag.
    pattern: new RegExp(
      String.raw`${NOT_PURSUING}(?:\b(?:hold|holds|attained|awarded)${CERT_GAP}ISO(?:/IEC)?\s*\d{4,5}(?:[:-]\d{4})?|ISO(?:/IEC)?\s*\d{4,5}(?:[:-]\d{4})?${CERT_ASSERTION})`,
      "gi"
    ),
    reason: "ISO certification is not held. Use 'aligned to' or 'certification is in progress'.",
  },
  {
    pattern: new RegExp(String.raw`CMMI\s*(?:Level\s*)?[1-5]`, "gi"),
    reason: "CMMI is not held and is not on the near-term roadmap. Spec §8 Tier 3.",
  },
  {
    pattern: /\bWOSB\b|\bEDWOSB\b/gi,
    reason:
      "WOSB/EDWOSB require 51% US-citizen ownership. We are ineligible. Spec §4.2.",
  },
  {
    // Trailing \b would never fire here: ")" and a following space are both
    // non-word characters, so no word boundary exists between them. Fixed
    // here after `node --test` exposed it: "our 8(a) status" wasn't matching.
    pattern: /\b8\(a\)(?!\w)/gi,
    reason: "8(a) requires US citizenship. We are ineligible. Spec §4.2.",
  },
  {
    pattern: /\bHUBZone\b/gi,
    reason: "HUBZone requires US-citizen ownership. We are ineligible. Spec §4.2.",
  },
  {
    pattern: /\bSDB\b|small[\s-]disadvantaged[\s-]business/gi,
    reason:
      "SDB self-certification requires US-citizen ownership. We are ineligible. Spec §4.2.",
  },
  {
    pattern: new RegExp(String.raw`${NOT_PURSUING}\bWBENC${CERT_ASSERTION}`, "gi"),
    reason: "WBENC is not held and eligibility is unconfirmed. Spec §8 Tier 1.",
  },
  {
    pattern: new RegExp(String.raw`${NOT_PURSUING}\bWBE\s*Canada${CERT_ASSERTION}`, "gi"),
    reason: "WBE Canada is not yet awarded. Spec §8 Tier 1.",
  },
  {
    pattern: /certified[\s-]{0,20}women[\s-]?owned|WBE[\s-]{0,20}certified/gi,
    reason: "Women-owned certification (WBE Canada / WBENC) is not yet awarded. Spec §8 Tier 1.",
  },
  {
    pattern: /\bGSA\s*(?:MAS|Schedule)\s*holder\b/gi,
    reason: "No GSA vehicle is held. Spec §8 Tier 3.",
  },
  {
    pattern: new RegExp(
      String.raw`["'](?:SOC\s*2${SOC2_TYPE}|ISO(?:\/IEC)?\s*\d{4,5}(?:[:-]\d{4})?|CMMI(?:\s*Level\s*[1-5])?)["']`,
      "gi"
    ),
    reason:
      "A bare certification name as a standalone string literal reads as a claim (e.g. an SEO keyword array). Certification names belong only in claims.mjs and credentials.mjs.",
  },
];

export function findForbiddenClaims(text) {
  const hits = [];
  for (const { pattern, reason } of FORBIDDEN_CLAIMS) {
    // Patterns are global; reset lastIndex so repeated calls are stateless.
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(text)) !== null) {
      hits.push({ match: m[0], reason, index: m.index });
      if (m.index === pattern.lastIndex) pattern.lastIndex += 1;
    }
  }
  return hits;
}
