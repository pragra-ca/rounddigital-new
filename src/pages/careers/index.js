import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Container,
  CtaBand,
  Eyebrow,
  Panel,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { jobPositions } from "@/data/jobPositions";

const WHY = [
  {
    t: "You will know what you are accountable for",
    b: "Engagements have a named lead and a written definition of done. Nobody is measured on looking busy in a status meeting.",
  },
  {
    t: "Small enough that your work is visible",
    b: "There is one step between you and someone who can make a decision. That cuts both ways — your judgement is relied on earlier than it would be at a large firm.",
  },
  {
    t: "Teaching is part of the job",
    b: "This company started as a training business. Explaining your work to the client's team is delivery, not an add-on you do if there is time.",
  },
  {
    t: "Two centres, one standard",
    b: "Mississauga and Noida run to the same delivery standard and the same review gates. Location does not determine the interest of the work.",
  },
];

export default function Careers() {
  const roles = [...jobPositions].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <Layout>
      <Seo
        title="Careers — Work at Round Digital"
        description="Open roles across Canada and India in engineering, data and research, delivery and training. A small team where the work is visible and named."
        keywords="careers, technology jobs Canada, IT jobs Noida, delivery roles"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            Work that someone else has to operate.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Everything we build gets handed to a client team that has to run it
            without us. That constraint shapes the engineering, and it is the most
            useful discipline we know of.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label={`Open roles (${roles.length})`} />
          {roles.length ? (
            <ul className="rds-pillarlist">
              {roles.map((j) => (
                <li key={j.slug}>
                  <Link href={`/careers/${j.slug}`}>
                    <div className="rds-pillarlist-main">
                      <span className="rds-code">
                        {[j.department, j.type].filter(Boolean).join(" · ")}
                      </span>
                      <h2 className="rds-h3" style={{ margin: "var(--s2) 0 var(--s2)" }}>{j.title}</h2>
                      <p style={{ color: "var(--fg-2)", fontSize: 15, maxWidth: "66ch" }}>
                        {j.tagline || j.description}
                      </p>
                    </div>
                    <div className="rds-pillarlist-side">
                      <p className="rds-meta" style={{ marginBottom: "var(--s3)" }}>
                        {j.location}
                        {j.experience ? ` · ${j.experience}` : ""}
                      </p>
                      <span className="rds-arrow">
                        View role <Arrow />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Panel fill>
              <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>
                No open roles right now.
              </h2>
              <p className="rds-prose">
                We hire when there is work to do rather than to fill a headcount plan.
                Send us something you have built and we will keep it on file.
              </p>
            </Panel>
          )}
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="What it is like" />
          <div className="rds-grid rds-cols-2">
            {WHY.map((w) => (
              <Panel key={w.t}>
                <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>{w.t}</h2>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{w.b}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Nothing here fits?"
        body="If you do work we would obviously want and there is no role listed for it, write anyway. Tell us what you have built and what you want to do next."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "About the company", href: "/about" }}
      />
    </Layout>
  );
}
