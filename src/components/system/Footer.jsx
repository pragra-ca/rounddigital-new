import Link from "next/link";
import RdMark from "./RdMark";
import { FOOTER_NAV, LEGAL_NAV } from "@/data/navigation";
import { FACTS } from "@/content/facts.mjs";
import { Container } from "./ui";

// Locations are printed with their status word, because a registered address
// and a delivery centre are different facts and a procurement reader will
// treat them differently. See src/content/facts.mjs.
const STATUS_LABEL = {
  delivery: "delivery centre",
  registered: "registered office",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rds-footer rds-noprint">
      <Container>
        <div className="rds-footer-grid">
          <div>
            <Link href="/" className="rds-brand" aria-label="Round Digital — home">
              <RdMark size={30} />
              <span className="rds-brand-word">RoundDigital</span>
            </Link>

            <p className="rds-meta" style={{ marginTop: "var(--s4)", maxWidth: "34ch" }}>
              Build it. Staff it. Train it. Prove it. Women-owned technology and
              workforce services for government and enterprise.
            </p>

            <ul style={{ marginTop: "var(--s5)" }}>
              {FACTS.locations.map((loc) => (
                <li key={`${loc.city}-${loc.country}`} className="rds-meta" style={{ padding: "2px 0" }}>
                  <span style={{ color: "var(--fg-2)" }}>
                    {loc.city}, {loc.region}
                  </span>{" "}
                  <span className="rds-mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {loc.country} · {STATUS_LABEL[loc.status] || loc.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_NAV.map((col) => (
            <nav key={col.title} aria-labelledby={`f-${col.title.replace(/\s+/g, "-").toLowerCase()}`}>
              <h2 id={`f-${col.title.replace(/\s+/g, "-").toLowerCase()}`}>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="rds-footer-base">
          <p className="rds-meta">
            © {year} {FACTS.legalName}. Successor to {FACTS.predecessor}.
          </p>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "var(--s4)" }}>
            {LEGAL_NAV.map((l) => (
              <li key={l.href} style={{ listStyle: "none" }}>
                <Link href={l.href} className="rds-meta">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
