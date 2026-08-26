// Certification roadmap. See spec §8.
//
// status: "earned"      — awarded, evidence on file, safe to display as held
//         "in-progress" — application filed or audit underway
//         "planned"     — committed on the roadmap, not yet started
//
// Nothing is "earned" today. When one is awarded, flip the status and add an
// `awardedOn` date — the UI reads the status and nothing else.

export const CREDENTIALS = [
  {
    id: "wbe-canada",
    // The standard itself. Linking the issuing body is the difference
    // between naming a credential and evidencing what it is.
    authority: "https://wbecanada.ca/",
    name: "WBE Canada",
    body: "Women Business Enterprise certification for Canadian federal and corporate supplier diversity programs.",
    status: "planned",
    targetQuarter: "Q4 2026",
    jurisdiction: "Canada",
  },
  {
    id: "weconnect",
    // The standard itself. Linking the issuing body is the difference
    // between naming a credential and evidencing what it is.
    authority: "https://weconnectinternational.org/",
    name: "WEConnect International",
    body: "Global women-owned business certification, opening corporate supplier diversity programs across Asia-Pacific and the United States.",
    status: "planned",
    targetQuarter: "Q4 2026",
    jurisdiction: "Global",
  },
  {
    id: "iso-9001",
    // The standard itself. Linking the issuing body is the difference
    // between naming a credential and evidencing what it is.
    authority: "https://www.iso.org/standard/62085.html",
    name: "ISO 9001:2015",
    body: "Quality management system certification. Led by our founder, whose twenty-year background is in audit and quality assurance.",
    status: "planned",
    targetQuarter: "Q1 2027",
    jurisdiction: "Global",
  },
  {
    id: "iso-27001",
    // The standard itself. Linking the issuing body is the difference
    // between naming a credential and evidencing what it is.
    authority: "https://www.iso.org/standard/27001",
    name: "ISO/IEC 27001:2022",
    body: "Information security management system certification covering all delivery locations.",
    status: "planned",
    targetQuarter: "Q2 2027",
    jurisdiction: "Global",
  },
  {
    id: "iso-42001",
    // The standard itself. Linking the issuing body is the difference
    // between naming a credential and evidencing what it is.
    authority: "https://www.iso.org/standard/81230.html",
    name: "ISO/IEC 42001:2023",
    body: "Artificial intelligence management system — the first AI governance standard. Few services firms hold it.",
    status: "planned",
    targetQuarter: "Q3 2027",
    jurisdiction: "Global",
  },
  {
    id: "soc-2",
    // The standard itself. Linking the issuing body is the difference
    // between naming a credential and evidencing what it is.
    authority: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2",
    name: "SOC 2 Type II",
    body: "Independent attestation over security, availability and confidentiality controls for our platform products.",
    status: "planned",
    targetQuarter: "Q3 2027",
    jurisdiction: "United States",
  },
];

export function byStatus(status) {
  return CREDENTIALS.filter((c) => c.status === status);
}

export function hasAnyEarned() {
  return CREDENTIALS.some((c) => c.status === "earned");
}
