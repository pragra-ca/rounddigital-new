import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Breadcrumb,
  Container,
  CtaBand,
  Eyebrow,
  Note,
  Panel,
  Section,
  SectionHead,
  TableWrap,
} from "@/components/system/ui";
import { PILLARS, allNaicsCodes } from "@/content/naics.mjs";

export default function NaicsPscCodes() {
  const codes = Array.from(new Set(allNaicsCodes())).sort();

  return (
    <Layout>
      <Seo
        title="NAICS & PSC Codes We Bid Under"
        description="Primary and secondary NAICS classifications and Product Service Codes across our five practices, with the applicable small-business size standards."
        keywords="NAICS 541512, NAICS 541910, NAICS 611430, NAICS 561320, PSC codes IT services, small business size standard"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Government", href: "/government" },
              { label: "NAICS & PSC codes" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "16ch" }}>
            The codes we are classified under.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Primary and secondary NAICS, Product Service Codes, and the applicable
            small-business size standard for each pillar — so a source list built
            by code finds us where we say we are.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label="Full classification" />

          <TableWrap label="Primary and secondary NAICS, PSC and size standard by pillar">
            <table className="rds-table">
              <caption>
                Size standards are SBA receipts-based figures shown as context. Re-verify
                against the current SBA size standards table before relying on them in a bid.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Pillar</th>
                  <th scope="col">Primary</th>
                  <th scope="col">Classification</th>
                  <th scope="col">Secondary NAICS</th>
                  <th scope="col">PSC</th>
                  <th scope="col">Size standard</th>
                </tr>
              </thead>
              <tbody>
                {PILLARS.map((p) => (
                  <tr key={p.id}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      {p.name}
                    </th>
                    <td className="rds-mono">{p.primaryNaics.code}</td>
                    <td>{p.primaryNaics.label}</td>
                    <td className="rds-mono">{p.secondaryNaics.join(" · ")}</td>
                    <td className="rds-mono">{p.psc.join(" · ")}</td>
                    <td className="rds-mono">{p.sizeStandard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <Note title="Note on 541910.">
            Research and data is deliberately given equal weight to IT here. Marketing
            Research and Public Opinion Polling is actively competed and materially
            less crowded than 541512, where most technology suppliers are stacked up.
            Statutory evidence-building obligations make it recurring demand rather
            than occasional.
          </Note>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="All codes" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s6)" }}>
            <h2 className="rds-h2">Every NAICS code we operate under.</h2>
            <p className="rds-prose">
              {codes.length} codes across five pillars. If your solicitation is
              classified under one of these, we can bid it directly or team on it —
              subject to the performance-location constraints set out on the{" "}
              <Link href="/government" className="rds-link">
                government hub
              </Link>
              .
            </p>
          </div>

          <Panel fill>
            <ul className="rds-taglist">
              {codes.map((c) => (
                <li key={c} className="rds-mono">
                  {c}
                </li>
              ))}
            </ul>
          </Panel>
        </Container>
      </Section>

      <CtaBand
        title="Classified under a code we do not list?"
        body="Send it anyway. We will tell you honestly whether the work sits inside our capability, and if it does not, we would rather say so than register a code to chase it."
        primary={{ label: "Submit a solicitation", href: "/rfp" }}
        secondary={{ label: "Back to government hub", href: "/government" }}
      />
    </Layout>
  );
}
