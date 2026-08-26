import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Container,
  CtaBand,
  Eyebrow,
  Note,
  Panel,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { getFact } from "@/content/facts.mjs";

/* Relationship is stated on every entry, because "product", "client platform"
   and "partnership" are three different claims and a procurement reader is
   entitled to know which one applies. See the mandate's instruction to verify
   role and ownership before presenting anything as a product. */
const PLATFORMS = [
  {
    id: "perfectum",
    name: "Perfectum.ai",
    relationship: "Our own product — designed, built and operated by Round Digital",
    factId: "perfectum-platform",
    href: "https://perfectum.ai",
    what:
      "A commercial multi-tenant learning platform. Training providers author, deliver, license and sell courses from a single system.",
    capabilities: [
      "AI-assisted course authoring",
      "SCORM 1.2, SCORM 2004 and xAPI conformance",
      "Live cohort delivery",
      "Stripe multi-party commerce",
      "SSO and SCIM provisioning",
      "White-label deployment",
      "Two-sided licensing marketplace",
    ],
    proves:
      "Standards conformance and multi-tenant platform engineering, operated in production rather than demonstrated.",
  },
  {
    id: "shipcarte",
    name: "ShipCarte",
    relationship: "Client platform — built and maintained for the client, not owned by us",
    factId: "shipcarte-platform",
    href: "https://www.shipcarte.com/freight-solutions/",
    what:
      "A multi-carrier logistics platform covering LTL, courier, air and ocean freight, in continuous commercial operation since 2019.",
    capabilities: [
      "Multi-carrier rate aggregation",
      "Shipment tracking",
      "Automated bills of lading",
      "Customs documentation",
      "Shopify, Amazon, WooCommerce and eBay integrations",
    ],
    proves:
      "Systems integration and transaction-grade reliability across third-party carrier APIs.",
  },
];

export default function Products() {
  return (
    <Layout>
      <Seo
        title="Products & Platforms We Build and Run"
        description="Perfectum.ai is our own multi-tenant learning platform with SCORM and xAPI conformance. ShipCarte is a logistics platform we built for a client."
        keywords="Perfectum LMS, SCORM xAPI learning platform, multi-carrier logistics platform, white label LMS"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Products & platforms" }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            Software we run, not slideware.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Two production platforms. One is ours; one belongs to a client. We say
            which is which, because a supplier that presents a client&apos;s system
            as its own product is telling you something about how it will describe
            your project to the next buyer.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label="Platforms" />

          <div style={{ display: "grid", gap: "var(--s6)" }}>
            {PLATFORMS.map((p) => {
              const fact = getFact(p.factId);
              return (
                <Panel key={p.id} as="article">
                  <div className="rds-statuslist-head" style={{ marginBottom: "var(--s2)" }}>
                    <h2 className="rds-h2">{p.name}</h2>
                    <span className="rds-status">{p.relationship.split(" — ")[0]}</span>
                  </div>
                  <p className="rds-meta" style={{ marginBottom: "var(--s5)" }}>{p.relationship}</p>

                  <div className="rds-deliv">
                    <div>
                      <p className="rds-prose" style={{ marginBottom: "var(--s5)" }}>{p.what}</p>
                      <p className="rds-eyebrow" style={{ marginBottom: "var(--s3)" }}>
                        What it demonstrates
                      </p>
                      <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s5)" }}>{p.proves}</p>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rds-arrow rds-link"
                      >
                        Visit {p.name} <Arrow />
                      </a>
                    </div>

                    <div>
                      <p className="rds-eyebrow" style={{ marginBottom: "var(--s3)" }}>
                        Capabilities in production
                      </p>
                      <ul className="rds-ticklist">
                        {p.capabilities.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {fact ? (
                    <p className="rds-meta" style={{ marginTop: "var(--s5)" }}>
                      Source:{" "}
                      <a
                        href={fact.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rds-link rds-mono rds-srclink"
                      >
                        {new URL(fact.source).hostname.replace(/^www\./, "")}
                      </a>
                    </p>
                  ) : null}
                </Panel>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="Why this page exists" />
          <div className="rds-splithead">
            <h2 className="rds-h2">Operating a platform is different from building one.</h2>
            <div className="rds-prose">
              <p>
                A services firm that also runs a production platform has to live with
                its own decisions: the upgrade path, the support load, the security
                posture, the cost of a shortcut taken two years ago. That changes how
                you design for somebody else.
              </p>
              <p>
                It is also the most checkable form of past performance we have. You can
                open Perfectum, look at the standards it conforms to, and form your own
                view — rather than reading a case study we wrote about ourselves.
              </p>
            </div>
          </div>

          <Note title="Procurement note:">
            Perfectum.ai is a separate commercial product with its own website and its
            own published claims. Claims made on that site are its own; the statements
            on this page are limited to what is corroborated in our{" "}
            <Link href="/government/past-performance" className="rds-link">
              past-performance record
            </Link>
            .
          </Note>
        </Container>
      </Section>

      <CtaBand
        title="Need a platform built to be operated?"
        body="The engineering behind these systems is the same engineering we bring to client work — including the part where your team can still run it after we leave."
        primary={{ label: "IT services", href: "/services/it-services" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </Layout>
  );
}
