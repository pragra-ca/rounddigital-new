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
  Status,
  TableWrap,
} from "@/components/system/ui";
import { STATUS_LABEL, STATUS_STATE, VEHICLES } from "@/data/procurement";

const ROUTES_TODAY = [
  {
    title: "Subcontract under your vehicle",
    body: "We deliver a defined work package beneath your prime contract. This is available now, requires no vehicle of our own, and is how a supplier of our size builds a federal past-performance record.",
    who: "For primes and integrators",
    href: "/government/teaming",
  },
  {
    title: "Open-market and simplified acquisition",
    body: "Awards below the simplified acquisition threshold, and open-market solicitations that do not mandate a specific vehicle. We can bid these directly today.",
    who: "For contracting officers",
    href: "/rfp",
  },
  {
    title: "State, municipal and provincial procurement",
    body: "Many state, municipal and provincial buyers run their own solicitations without a federal vehicle requirement. Lower barrier, real budgets, and no US-performance restriction of the federal kind.",
    who: "For state & local buyers",
    href: "/rfp",
  },
  {
    title: "Commercial and nonprofit contracting",
    body: "Standard commercial terms, including through corporate supplier-diversity programmes where our women-owned status is the qualifying route.",
    who: "For enterprise and nonprofit buyers",
    href: "/contact",
  },
];

export default function ContractVehicles() {
  return (
    <Layout>
      <Seo
        title="Contract Vehicles & How to Buy From Us"
        description="Round Digital holds no contract vehicle of its own today. Here is what we are pursuing — TBIPS, ProServices, SBIPS, GSA MAS and state term contracts."
        keywords="TBIPS supplier, ProServices vendor, GSA schedule roadmap, subcontracting partner IT services, CanadaBuys IT supplier"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Government", href: "/government" },
              { label: "Contract vehicles" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "18ch" }}>
            No vehicle of our own. Four ways to buy from us today.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Vehicle position is usually the first thing an evaluator checks and the
            last thing a supplier of our size is honest about. Ours is stated
            plainly, along with the routes that are open right now.
          </p>
        </Container>
      </Section>

      {/* 01 — available now */}
      <Section>
        <Container>
          <SectionHead index="01" label="Available today" />
          <h2 className="rds-h2" style={{ maxWidth: "22ch", marginBottom: "var(--s7)" }}>
            You can contract with us without a vehicle.
          </h2>

          <div className="rds-grid rds-cols-2">
            {ROUTES_TODAY.map((r) => (
              <Panel key={r.title}>
                <p className="rds-code" style={{ marginBottom: "var(--s3)" }}>{r.who}</p>
                <h3 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>
                  {r.title}
                </h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s5)" }}>{r.body}</p>
                <Link href={r.href} className="rds-arrow rds-link">
                  Continue <Arrow />
                </Link>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* 02 — vehicle position */}
      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="Vehicle position" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s6)" }}>
            <h2 className="rds-h2">What we hold, and what we are pursuing.</h2>
            <p className="rds-prose">
              Nothing below is presented as held unless its status says so. Timelines
              reflect our own roadmap and the qualifying conditions of each programme,
              which are set out in the{" "}
              <Link href="/government/certifications" className="rds-link">
                certification roadmap
              </Link>
              .
            </p>
          </div>

          <TableWrap label="Contract vehicles with current status">
            <table className="rds-table">
              <thead>
                <tr>
                  <th scope="col">Vehicle</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Jurisdiction</th>
                  <th scope="col">Status</th>
                  <th scope="col">Route</th>
                </tr>
              </thead>
              <tbody>
                {VEHICLES.map((v) => (
                  <tr key={v.id}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      {v.name}
                    </th>
                    <td>{v.owner}</td>
                    <td>{v.jurisdiction}</td>
                    <td>
                      <Status state={STATUS_STATE[v.status]}>{STATUS_LABEL[v.status]}</Status>
                    </td>
                    <td style={{ color: "var(--fg-3)", fontSize: 14 }}>{v.route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <div style={{ marginTop: "var(--s7)" }} className="rds-grid rds-cols-2">
            {VEHICLES.map((v) => (
              <Panel key={v.id} fill>
                <div className="rds-statuslist-head" style={{ marginBottom: "var(--s2)" }}>
                  <h3 className="rds-h4">{v.name}</h3>
                  <Status state={STATUS_STATE[v.status]}>{STATUS_LABEL[v.status]}</Status>
                </div>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{v.detail}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* 03 — constraints */}
      <Section>
        <Container>
          <SectionHead index="03" label="Constraints we will not talk around" />
          <div className="rds-splithead">
            <h2 className="rds-h2">Where we cannot bid alone.</h2>
            <div className="rds-prose">
              <p>
                Delivery runs from Mississauga and Noida. We hold a registered office
                in Wyoming but do not operate a United States delivery centre today.
              </p>
              <p>
                That means solicitations requiring US-performed work, US-persons
                access, handling of controlled unclassified information, or a facility
                clearance are outside what we can honestly bid on our own. On those we
                team with a prime who holds the relevant position rather than bidding
                and hoping the requirement is waived.
              </p>
              <p>
                Establishing a US delivery presence is the highest-value item on our
                own roadmap, precisely because it removes this constraint.
              </p>
            </div>
          </div>

          <Note title="Why this is on the page.">
            A supplier who discloses a limitation before award is cheaper to work with
            than one who discovers it afterwards. If a constraint above rules us out
            of your requirement, that is the correct outcome and it cost you one page
            of reading.
          </Note>
        </Container>
      </Section>

      <CtaBand
        title="Holding a vehicle we do not?"
        body="If you are a prime with a vehicle and a capability gap in IT, AI, research, staffing or training, subcontracting is the fastest path for both of us. Send the requirement and we will respond with scope, rates and references."
        primary={{ label: "Teaming & subcontracting", href: "/government/teaming" }}
        secondary={{ label: "Capability statement", href: "/government/capability-statement" }}
      />
    </Layout>
  );
}
