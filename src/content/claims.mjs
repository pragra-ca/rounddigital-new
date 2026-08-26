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
// "certified/compliant", as plain possession ("hold", "attained"), or as an
// unqualified claim that an audit occurred ("audited" — deliberately not
// "audits": the plural noun shows up in legitimate service-marketing copy
// like "get you through SOC 2 ... audits", which describes work performed
// for a client, not a claim about our own posture).
const CERT_VERBS = String.raw`certified|certification(?!\s+is\s+in\s+progress)(?!\s+is\s+planned)|accredited|appraised|compliant|hold|holds|attained|awarded|audited`;

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
      String.raw`${NOT_PURSUING}(?:\b(?:hold|holds|attained|awarded|audited)${CERT_GAP}ISO(?:/IEC)?\s*\d{4,5}(?:[:-]\d{4})?|ISO(?:/IEC)?\s*\d{4,5}(?:[:-]\d{4})?${CERT_ASSERTION})`,
      "gi"
    ),
    reason: "ISO certification is not held. Use 'aligned to' or 'certification is in progress'.",
  },
  {
    pattern: new RegExp(String.raw`CMMI\s*(?:Level\s*)?[1-5]`, "gi"),
    bareName: true,
    reason: "CMMI is not held and is not on the near-term roadmap. Spec §8 Tier 3.",
  },
  {
    pattern: /\bWOSB\b|\bEDWOSB\b/gi,
    bareName: true,
    reason:
      "WOSB/EDWOSB require 51% US-citizen ownership. We are ineligible. Spec §4.2.",
  },
  {
    // Trailing \b would never fire here: ")" and a following space are both
    // non-word characters, so no word boundary exists between them. Fixed
    // here after `node --test` exposed it: "our 8(a) status" wasn't matching.
    pattern: /\b8\(a\)(?!\w)/gi,
    bareName: true,
    reason: "8(a) requires US citizenship. We are ineligible. Spec §4.2.",
  },
  {
    pattern: /\bHUBZone\b/gi,
    bareName: true,
    reason: "HUBZone requires US-citizen ownership. We are ineligible. Spec §4.2.",
  },
  {
    pattern: /\bSDB\b|small[\s-]disadvantaged[\s-]business/gi,
    bareName: true,
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
    bareName: true,
    reason:
      "A bare certification name as a standalone string literal reads as a claim (e.g. an SEO keyword array). Certification names belong only in claims.mjs and credentials.mjs.",
  },
];

// Disclaimer context. Applies ONLY to bare-name rules (`bareName: true`).
//
// A bare programme name is not by itself a claim — the site names WOSB, 8(a)
// and HUBZone precisely to state that we are not eligible, which the spec
// requires us to disclose. These markers identify that framing.
//
// This must NEVER be applied to a pattern that already contains the assertion
// verb ("ISO 27001 certified"), or a sentence like "Our roadmap is ambitious.
// We are ISO 27001 certified." would be waved through on the word "roadmap".
const DISCLAIM_CONTEXT = [
  /\b(?:not|never)\s+(?:yet\s+)?(?:eligible|certified|held|awarded|accredited)\b/i,
  /\bineligible\b/i,
  /\bclosed\s+to\s+us\b/i,
  /\bdo\s+not\s+(?:hold|pursue|claim|imply)\b/i,
  /\bwe\s+hold\s+(?:no|none)\b/i,
  /\brequires?\s+(?:51%\s+)?(?:ownership\s+by\s+)?(?:United\s+States|US)[\s-]citizen/i,
  /\brequire\s+US-citizen\s+ownership\b/i,
  /\bnot\s+pursue\b/i,
  // Standards named as design targets rather than possessions.
  /\b(?:frameworks?\s+we\s+design\s+to|design(?:ed)?\s+(?:and\s+document\s+)?to|aligned\s+to|standards?\s+we\s+work\s+to|regimes?\s+we\s+design\s+to)\b/i,
  // Roadmap framing — bare names on a roadmap are targets, not possessions.
  /\b(?:roadmap|target\s+(?:date|quarter)|targetQuarter|in\s+progress|planned|pursuing)\b/i,
];

const DISCLAIM_WINDOW = 240;

// Interrogative openers. A question is never an assertion, so this exemption
// is safe to apply to every rule — but it is deliberately narrow: the match
// must sit inside a clause that both begins with an interrogative and ends in
// a question mark before any sentence-ending period.
const INTERROGATIVE = /^\s*(?:are|is|do|does|can|could|will|would|have|has|what|which|who|how|why|where)\b/i;

function inQuestion(text, index, length) {
  // Nearest preceding clause boundary: sentence end, quote, or newline.
  let start = 0;
  for (let i = index - 1; i >= 0 && index - i < 300; i -= 1) {
    if (/[.?!\n"'`]/.test(text[i])) {
      start = i + 1;
      break;
    }
  }
  // Nearest following terminator.
  let end = text.length;
  for (let i = index + length; i < text.length && i - index < 300; i += 1) {
    if (/[.?!\n"'`]/.test(text[i])) {
      end = i;
      break;
    }
  }
  const clause = text.slice(start, end);
  return INTERROGATIVE.test(clause) && text[end] === "?";
}

// An assertion verb sitting immediately against the match overrides any
// disclaimer nearby. Without this, "Not eligible for HUBZone. We are WOSB
// certified though." is waved through on the leading disclaimer, which is the
// precise shape of a claim smuggled in behind a caveat.
const ADJACENT_ASSERTION = /^[\s-]{0,40}(?:certified|certification|accredited|appraised|compliant|holder|audited)\b/i;

function assertsPossession(text, index, length) {
  return ADJACENT_ASSERTION.test(text.slice(index + length, index + length + 60));
}

function isExempt(rule, text, index, length) {
  // A question is never an assertion — this applies to every rule.
  if (inQuestion(text, index, length)) return true;
  // Assertion-form rules already contain the verb; context cannot excuse them.
  if (!rule.bareName) return false;
  // A bare name followed by an assertion verb is an assertion, disclaimer or not.
  if (assertsPossession(text, index, length)) return false;
  const from = Math.max(0, index - DISCLAIM_WINDOW);
  const to = Math.min(text.length, index + length + DISCLAIM_WINDOW);
  const context = text.slice(from, to);
  return DISCLAIM_CONTEXT.some((re) => re.test(context));
}

export function findForbiddenClaims(text, { ignoreContext = false } = {}) {
  const hits = [];
  for (const rule of FORBIDDEN_CLAIMS) {
    const { pattern, reason } = rule;
    // Patterns are global; reset lastIndex so repeated calls are stateless.
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(text)) !== null) {
      if (ignoreContext || !isExempt(rule, text, m.index, m[0].length)) {
        hits.push({ match: m[0], reason, index: m.index });
      }
      if (m.index === pattern.lastIndex) pattern.lastIndex += 1;
    }
  }
  return hits;
}
