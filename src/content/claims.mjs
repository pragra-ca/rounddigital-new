// Forbidden-claims registry. See spec §2 and §8.
//
// Round Digital holds no certifications. Any language asserting one is a
// misrepresentation risk in a procurement context, so the build fails on it.
//
// The patterns deliberately allow "aligned to X", "pursuing X" and
// "X certification is in progress" — those are honest roadmap statements.
// They forbid the assertion forms: "X certified", "X-certified", "our X".

const CERT_ASSERTION = String.raw`(?:\s|-)?(?:certified|certification(?!\s+is\s+in\s+progress)(?!\s+is\s+planned)|accredited|appraised|compliant)`;

// Guards a term from matching when it's introduced as an honest roadmap
// statement ("pursuing SOC 2 certification") rather than an assertion.
// Fixed here after `node --test` exposed it against the Step 1 test suite:
// without this, "We are pursuing WBE Canada certification." was flagged.
const NOT_PURSUING = String.raw`(?<!pursuing\s+)`;

export const FORBIDDEN_CLAIMS = [
  {
    pattern: new RegExp(String.raw`${NOT_PURSUING}SOC\s*2(?:\s*Type\s*I{1,2})?${CERT_ASSERTION}`, "gi"),
    reason: "SOC 2 is not held. Spec §2 — no certification is held today.",
  },
  {
    pattern: new RegExp(String.raw`${NOT_PURSUING}ISO(?:/IEC)?\s*\d{4,5}(?:[:-]\d{4})?${CERT_ASSERTION}`, "gi"),
    reason: "No ISO certification is not held. Use 'aligned to' or 'in progress'.",
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
    pattern: new RegExp(String.raw`${NOT_PURSUING}\bWBENC${CERT_ASSERTION}`, "gi"),
    reason: "WBENC is not held and eligibility is unconfirmed. Spec §8 Tier 1.",
  },
  {
    pattern: new RegExp(String.raw`${NOT_PURSUING}\bWBE\s*Canada${CERT_ASSERTION}`, "gi"),
    reason: "WBE Canada is not yet awarded. Spec §8 Tier 1.",
  },
  {
    pattern: /\bGSA\s*(?:MAS|Schedule)\s*holder\b/gi,
    reason: "No GSA vehicle is held. Spec §8 Tier 3.",
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
