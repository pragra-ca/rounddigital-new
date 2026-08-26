import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import Link from "next/link";
import {
  Container,
  Section,
  Panel,
  Button,
  Arrow,
  Status,
  Note,
  TableWrap,
  CtaBand,
} from "@/components/system/ui";
import {
  FigHead,
  FigHero,
  MediaSplit,
  CaseCard,
  Chip,
} from "@/components/system/figma";
import { STOCK } from "@/data/stock";
import { CREDENTIALS } from "@/content/credentials.mjs";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";
import { getFact } from "@/content/facts.mjs";
// naics.mjs is the classification registry — navigation.js carries the same
// pillars for menu purposes but not the codes, size standards or PSCs.
import { PILLARS as NAICS_PILLARS } from "@/content/naics.mjs";

/* Government — layout from the "Government Solutions" frame of the Figma
   reference (node 3:1149), including its inverted hero, which is the only
   inverted hero in the file.

   The Figma's content could not be used at all. It presented the company as an
   active federal contractor with a DUNS number, a CAGE code, a UEI, an
   SBA-certified small-business designation, a completed $4.8M firm-fixed-price
   contract and delivery for USPS, the Department of Energy and the Department
   of Defense. None of that exists. The company has not delivered a government
   contract, holds no certification, and is registered in Wyoming.

   So this page keeps the design and inverts the message: it is a readiness
   page. What we can do, what we are classified under, what we are working
   toward and by when, and — stated plainly — what we have not done yet. */

const CAPABILITIES = [
  {
    title: "Agile Software Development",
    body: "DevSecOps pipelines using containerised microservices architectures.",
  },
  {
    title: "Cloud Migration",
    body: "Design and transition of workloads to cloud and hybrid environments.",
  },
  {
    title: "Cybersecurity Engineering",
    body: "Zero-trust patterns, dependency scanning and release controls built into delivery.",
  },
  {
    title: "Data Analytics & AI/ML",
    body: "Document parsing, semantic vectors and ML models deployed inside your boundary.",
  },
  {
    title: "IT Staff Augmentation",
    body: "Background-screened developers provisioned to bridge technical resource gaps.",
  },
  {
    title: "Training & Up-skilling Labs",
    body: "Technical workshops so in-house personnel can run what we hand over.",
  },
];

const SECURITY = [
  {
    title: "Continuous DevSecOps Scans",
    body: "Static and dynamic scanners integrated inside active repository branches.",
  },
  {
    title: "Zero Trust Architecture Patterns",
    body: "Granular network separation limiting lateral movement.",
  },
  {
    title: "Documented Control Mapping",
    body: "Controls written down and mapped, so an assessor can follow them when we do certify.",
  },
];

const EVALUATION = [
  {
    title: "Technical Approach",
    body: "No generic templates. Blueprints map to modern build guidelines and secure containerisation practice.",
  },
  {
    title: "Management Approach",
    body: "Agile sprints mapped to your schedule, with a named delivery lead and transparency on hours.",
  },
  {
    title: "Past Performance",
    body: "Three commercial references, each anchored to a citable source. No public-sector award yet — stated up front.",
  },
  {
    title: "Price Realism",
    body: "Clear, transparent rates with no unexplained fees or hidden staffing multipliers.",
  },
];

export default function Government() {
  return (
    <Layout>
      <Seo
        title="Government Contracting Readiness"
        description="Public-sector readiness: capability, NAICS classification, a dated certification roadmap, and a plain statement of what we have not yet delivered."
      />

      <FigHero
        inverted
        pill="Public-sector readiness"
        title={
          <>
            Purpose-Built for Government.
            <br />
            Straight About Where We Stand.
          </>
        }
        lead="We build the systems public-sector buyers need and we are ready to deliver them. We have not yet been awarded a government contract, and we hold no certification today. This page says exactly what we can evidence, what is in progress, and by when."
        actions={[
          { label: "View Capability Statement", href: "/government/capability-statement", variant: "accent" },
          { label: "Where we can contract", href: "/government/where-we-can-contract", variant: "ghost" },
        ]}
      />

      {/* --- The plain statement, immediately after the hero ------------------
          The design put a row of credential badges here. Presenting unearned
          credentials as badges is the single most misleading thing this page
          could do, so the slot carries the disclosure instead. */}
      <Section tight className="rds-band">
        <Container>
          <Note title="Current status:">
            Round Digital has not yet performed a government contract. We hold no certification
            today — every credential below is planned, with the quarter we are targeting attached.
            Our registered address is in Cheyenne, Wyoming; delivery is performed in Mississauga,
            Ontario and Noida, Uttar Pradesh. If a solicitation requires a credential we do not
            hold, we will tell you rather than let you find out at evaluation.
          </Note>
        </Container>
      </Section>

      {/* --- Classification ----------------------------------------------------- */}
      <Section>
        <Container>
          <div className="rds-media rds-media-wide">
            <div>
              <FigHead
                label="Classification"
                title="What We Bid Under"
                body="These are the NAICS classifications our five practices map to. They describe the work we do; they are not an award, a schedule or a vehicle, and we do not present them as one."
              />
              <Button href="/government/naics-psc-codes" variant="ghost">
                Full NAICS and PSC list <Arrow />
              </Button>
            </div>
            <Panel lg fill style={{ padding: "var(--s5)" }}>
              <TableWrap label="NAICS and PSC codes by capability">
                <table className="rds-table">
                  <caption className="rds-sr">
                    Primary and secondary NAICS, PSC and small-business size standard for each
                    Round Digital capability.
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Pillar</th>
                      <th scope="col">Primary</th>
                      <th scope="col">Classification</th>
                      <th scope="col">Secondary</th>
                      <th scope="col">PSC</th>
                      <th scope="col">Size standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NAICS_PILLARS.map((p) => (
                      <tr key={p.id}>
                        <th scope="row" style={{ fontWeight: 600 }}>
                          {p.name}
                        </th>
                        <td className="rds-mono">{p.primaryNaics.code}</td>
                        <td>{p.primaryNaics.label}</td>
                        <td className="rds-mono">{p.secondaryNaics.join(", ")}</td>
                        <td className="rds-mono">{p.psc.join(", ")}</td>
                        <td className="rds-mono">{p.sizeStandard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableWrap>
            </Panel>
          </div>
        </Container>
      </Section>

      {/* --- Certification roadmap ------------------------------------------------ */}
      <Section className="rds-band">
        <Container>
          <FigHead
            label="Certification roadmap"
            title="Certification Roadmap — Nothing Held Today"
            body="A certification is either awarded or it is not. Each of these is listed with the quarter we are targeting, and the status changes here only when the award is on file."
          />
          <ul className="rds-grid rds-cols-3">
            {CREDENTIALS.map((c) => (
              <li key={c.id} className="rds-panel rds-certcard" style={{ listStyle: "none" }}>
                <span>
                  <Status state={c.status}>
                    {c.status === "earned"
                      ? "Held"
                      : c.status === "in-progress"
                        ? `In progress · ${c.targetQuarter}`
                        : `On roadmap · ${c.targetQuarter}`}
                  </Status>
                </span>
                <h3>{c.name}</h3>
                <p>{c.body}</p>
                <p className="rds-meta">Jurisdiction: {c.jurisdiction}</p>
                {/* The issuing body, linked. A buyer can confirm what the
                    standard actually requires without taking our word for it,
                    and it is the kind of outbound citation answer engines
                    weigh when deciding whether a page is worth quoting. */}
                {c.authority ? (
                  <a
                    className="rds-link rds-mono rds-srclink"
                    href={c.authority}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ fontSize: 12 }}
                  >
                    {new URL(c.authority).hostname.replace(/^www\./, "")}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* --- Past performance ------------------------------------------------------ */}
      <Section>
        <Container>
          <FigHead
            label="Past performance"
            title="Past Performance — Commercial References, Clearly Labelled"
            body="Three references an evaluator can check. All are commercial: we have no public-sector award to cite, and we would rather say so here than imply otherwise."
          />
          <div className="rds-grid rds-cols-3">
            {PAST_PERFORMANCE.map((p) => {
              const fact = getFact(p.factId);
              return (
                <Panel as="article" key={p.id}>
                  <Chip quiet>{p.period}</Chip>
                  <h3 className="rds-h4" style={{ margin: "var(--s4) 0 var(--s3)" }}>
                    {p.client}
                  </h3>
                  <p className="rds-meta" style={{ fontSize: 15, marginBottom: "var(--s3)" }}>
                    {p.outcome}
                  </p>
                  <p className="rds-eyebrow" style={{ marginBottom: "var(--s3)" }}>
                    {p.relationship}
                  </p>
                  {/* The corroborating source, linked. A past-performance claim an
                      evaluator cannot check independently is not a reference. */}
                  <a
                    className="rds-link rds-mono rds-srclink"
                    href={fact.source}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ fontSize: 13 }}
                  >
                    {new URL(fact.source).hostname.replace(/^www\./, "")}
                  </a>
                </Panel>
              );
            })}
          </div>
          <div style={{ marginTop: "var(--s6)" }}>
            <Button href="/government/past-performance" variant="ghost">
              Full past-performance detail <Arrow />
            </Button>
          </div>
        </Container>
      </Section>

      {/* --- Capabilities ----------------------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <FigHead
            label="Capabilities"
            title="Government Technology Practices"
            body="Technical practices we deliver today, described as capability rather than as accredited environments."
          />
          <div className="rds-grid rds-cols-3">
            {CAPABILITIES.map((c) => (
              <Panel key={c.title}>
                <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>
                  {c.title}
                </h3>
                <p className="rds-meta" style={{ fontSize: 15 }}>
                  {c.body}
                </p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- Security ------------------------------------------------------------------ */}
      <Section>
        <Container>
          <MediaSplit image={STOCK.security} wide>
            <FigHead
              label="Security by default"
              title="Controls Built In, Not Bolted On"
              body="We do not treat security as an optional layer. Zero-trust access patterns, mandatory static scanning and isolated testing sandboxes are how we build — which is also what makes the ISO/IEC 27001 work tractable when we begin the audit."
            />
            <div className="rds-grid" style={{ gap: "var(--s4)" }}>
              {SECURITY.map((s) => (
                <div key={s.title}>
                  <h3 className="rds-h4" style={{ marginBottom: 2 }}>
                    {s.title}
                  </h3>
                  <p className="rds-meta">{s.body}</p>
                </div>
              ))}
            </div>
          </MediaSplit>
        </Container>
      </Section>

      {/* --- Ownership -------------------------------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <MediaSplit image={STOCK.team} flip>
            <FigHead
              label="Ownership"
              title="Woman-Owned, Stated Precisely"
              body="Round Digital has been woman-owned since it was founded in 2017. Supplier-diversity certifications that would let a buyer claim credit for that are on the roadmap — WBE Canada and WEConnect International, both targeted for Q4 2026 — and until they are awarded we describe the ownership, not a designation."
            />
            <Note title="Programmes we are not eligible for:">
              United States set-aside programmes requiring 51% US-citizen ownership are closed to
              us. We state this rather than leaving it to be discovered at evaluation.
            </Note>
          </MediaSplit>
        </Container>
      </Section>

      {/* --- Evaluation criteria ------------------------------------------------------------- */}
      <Section>
        <Container>
          <FigHead
            label="Evaluation compliance"
            title="Aligned to Typical Government Source Selection Factors"
          />
          <div className="rds-grid rds-cols-4">
            {EVALUATION.map((e) => (
              <Panel key={e.title}>
                <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>
                  {e.title}
                </h3>
                <p className="rds-meta" style={{ fontSize: 15 }}>
                  {e.body}
                </p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- What we do not claim ---------------------------------------------
          Restored from the previous /government hub. Stating the gaps in one
          place is what makes the rest of the page credible, and an evaluator
          should not have to assemble it from four sections. */}
      <Section className="rds-band">
        <Container>
          <Panel lg fill keyed>
            <h2 className="rds-h3" style={{ marginBottom: "var(--s4)" }}>
              What we do not claim
            </h2>
            <p className="rds-prose" style={{ marginBottom: "var(--s4)" }}>
              We hold no third-party certifications today. The roadmap above is what we are working
              toward and by when. We would rather tell you that plainly than have you discover it
              during evaluation.
            </p>
            <p className="rds-prose" style={{ marginBottom: "var(--s4)" }}>
              We have not yet delivered a government contract. Our three references are commercial,
              and we do not describe them as public-sector past performance.
            </p>
            <p className="rds-prose">
              We are also not eligible for US programs requiring citizen ownership. Where a
              solicitation needs that status, we are a subcontractor, not a prime —{" "}
              <Link href="/contact" className="rds-link">
                and a good one
              </Link>
              .
            </p>
          </Panel>
        </Container>
      </Section>

      <CtaBand
        title="Evaluate us for your next bid."
        body="Download the capability statement, or send the solicitation and we will tell you plainly whether we can meet it — including when we cannot."
        primary={{ label: "Download Capability Statement", href: "/government/capability-statement" }}
        secondary={{ label: "Submit an RFP", href: "/rfp" }}
        accent
      />
    </Layout>
  );
}
