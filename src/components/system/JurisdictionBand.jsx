import Link from "next/link";
import { useState } from "react";
import { Arrow, Container, Eyebrow } from "./ui";
import { JURISDICTIONS, getJurisdiction } from "@/data/procurement";

/* The jurisdiction band.
 *
 * Sits directly beneath the fold and answers the first question a foreign buyer
 * asks — can this supplier legally hold my contract? — in one click, rather
 * than making them hunt for it three pages deep.
 *
 * The band is deliberately willing to say no. Three of the seven answers are a
 * refusal, and those are the entries that make the three yeses worth believing:
 * a vendor page that never declines anything is telling you nothing.
 *
 * Every string comes from JURISDICTIONS in src/data/procurement.js. That is the
 * one place programme names may appear (check-claims.mjs sanctions it), and it
 * keeps this band, the full jurisdiction page and the capability statement from
 * ever drifting apart — which is the failure mode that loses a bid.
 *
 * Surface: --bg-3, not --bg-2. The hero band above already sits on --bg-2's
 * value in light theme, so a second surface at the same value would dissolve
 * into it. --bg-3 is the third measured surface and separates in both themes.
 */
export default function JurisdictionBand() {
  const [selected, setSelected] = useState(JURISDICTIONS[0].id);
  const active = getJurisdiction(selected) ?? JURISDICTIONS[0];

  return (
    <div className="rds-jband">
      <Container>
        <div className="rds-jband-head">
          <Eyebrow mark>Can we hold your contract?</Eyebrow>
          <Link href="/government/where-we-can-contract" className="rds-jband-more">
            Where we can contract, in full <Arrow size={12} />
          </Link>
        </div>

        {/* The legend the critique found missing: tier encoding was dot-only,
            its meaning locked behind a click. Words beside the dots, once. */}
        <p className="rds-jband-legend rds-mono" aria-hidden="true">
          <span><span className="rds-jband-dot rds-jband-dot-direct" /> direct</span>
          <span><span className="rds-jband-dot rds-jband-dot-partner" /> with a partner</span>
        </p>

        <div className="rds-jband-chips" role="group" aria-label="Choose a jurisdiction">
          {JURISDICTIONS.map((j) => (
            <button
              key={j.id}
              type="button"
              className="rds-jband-chip"
              aria-pressed={j.id === selected}
              onClick={() => setSelected(j.id)}
            >
              <span className={`rds-jband-dot rds-jband-dot-${j.tier}`} aria-hidden="true" />
              {j.name}
            </button>
          ))}
        </div>

        {/* Polite rather than assertive: the answer changes in response to a
            deliberate click, so it should be announced without interrupting
            whatever the reader is already hearing. */}
        <div className="rds-jband-answer" aria-live="polite">
          <p className={`rds-jband-verdict rds-jband-verdict-${active.tier}`}>
            <span className={`rds-jband-dot rds-jband-dot-${active.tier}`} aria-hidden="true" />
            {active.verdict}
          </p>
          <p className="rds-jband-why">{active.why}</p>
        </div>
      </Container>
    </div>
  );
}
