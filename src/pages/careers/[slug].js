import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Button,
  Container,
  CtaBand,
  Eyebrow,
  Panel,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { jobPositions } from "@/data/jobPositions";

/* Job titles range from "AI/ML Engineer" (14 chars) to "Senior Full Stack
   Developer" (27), so a fixed suffix cannot fit them all: appending
   "— {department} Role, {type}" pushed five of six past 62 characters with the
   brand suffix, while the bare title left them under 45. This picks the richest
   qualifier that still fits the budget. */
const TITLE_BUDGET = 62 - " | Round Digital".length;

function careerTitle(job) {
  const candidates = [
    `${job.title} — ${job.department} Role, ${job.type}`,
    `${job.title} — ${job.department} Role`,
    `${job.title} — ${job.department}`,
    `${job.title} — ${job.type} Role`,
    `${job.title} — Careers at Round Digital`,
    `${job.title} — Careers`,
  ];
  return (
    candidates.find((c) => c.length <= TITLE_BUDGET && c.length >= 30) ??
    candidates[candidates.length - 1]
  );
}

const BLOCKS = [
  { key: "responsibilities", label: "What you will do" },
  { key: "requirements", label: "What we are looking for" },
  { key: "benefits", label: "What we offer" },
];

export default function JobPage({ job, others }) {
  // JobPosting schema without a fabricated salary range: `salary` is published
  // only when the data actually carries one.
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || job.tagline,
    employmentType: job.type,
    hiringOrganization: { "@type": "Organization", name: "Round Digital" },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: job.location },
    },
  };

  return (
    <Layout>
      <Seo
        title={careerTitle(job)}
        /* Taglines run as short as 35 characters. Composing with location and
           type lands the description in the 120-160 window without inventing
           anything that is not already on the page. */
        description={`${job.tagline || job.description} ${job.type} role based ${job.location}. Round Digital hires across Canada and India for engineering, data, delivery and training.`.slice(0, 158)}
        keywords={job.skills?.join(", ")}
        breadcrumbLabel={job.title}
        jsonLd={[schema]}
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Careers", href: "/careers" },
              { label: job.title },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            {job.title}
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          {job.tagline ? (
            <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>{job.tagline}</p>
          ) : null}

          <dl className="rds-codebar">
            <div>
              <dt>Location</dt>
              <dd>{job.location}</dd>
            </div>
            {job.experience ? (
              <div>
                <dt>Experience</dt>
                <dd>{job.experience}</dd>
              </div>
            ) : null}
            {job.type ? (
              <div>
                <dt>Type</dt>
                <dd>{job.type}</dd>
              </div>
            ) : null}
            {job.salary ? (
              <div>
                <dt>Compensation</dt>
                <dd className="rds-mono">{job.salary}</dd>
              </div>
            ) : null}
          </dl>

          <div style={{ marginTop: "var(--s6)" }}>
            <Button
              href={`mailto:careers@round.digital?subject=${encodeURIComponent(job.title)}`}
              variant="accent"
            >
              Apply for this role <Arrow />
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container style={{ maxWidth: 820 }}>
          {job.description ? (
            <>
              <SectionHead index="01" label="About the role" />
              <p className="rds-prose" style={{ fontSize: 17, marginBottom: "var(--s8)" }}>
                {job.description}
              </p>
            </>
          ) : null}

          {BLOCKS.map((b, i) =>
            job[b.key]?.length ? (
              <div key={b.key} style={{ marginBottom: "var(--s8)" }}>
                <SectionHead index={String(i + 2).padStart(2, "0")} label={b.label} />
                <ul className="rds-ticklist">
                  {job[b.key].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null
          )}

          {job.skills?.length ? (
            <Panel fill>
              <p className="rds-eyebrow" style={{ marginBottom: "var(--s3)" }}>
                Skills
              </p>
              <ul className="rds-taglist">
                {job.skills.map((s) => (
                  <li key={s} className="rds-mono">
                    {s}
                  </li>
                ))}
              </ul>
            </Panel>
          ) : null}
        </Container>
      </Section>

      {others.length ? (
        <Section className="rds-band">
          <Container>
            <SectionHead index="06" label="Other open roles" />
            <ul className="rds-pillarlist">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/careers/${o.slug}`}>
                    <div className="rds-pillarlist-main">
                      <span className="rds-code">{o.department}</span>
                      <h2 className="rds-h3" style={{ margin: "var(--s2) 0 0" }}>{o.title}</h2>
                    </div>
                    <div className="rds-pillarlist-side">
                      <p className="rds-meta" style={{ marginBottom: "var(--s3)" }}>{o.location}</p>
                      <span className="rds-arrow">
                        View <Arrow />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        title="Think you are close but not exact?"
        body="Apply anyway and say which part you would need to grow into. We would rather read that than an application tuned to match the keywords."
        primary={{
          label: "Apply",
          href: `mailto:careers@round.digital?subject=${encodeURIComponent(job.title)}`,
        }}
        secondary={{ label: "All roles", href: "/careers" }}
      />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: jobPositions.map((j) => ({ params: { slug: j.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const job = jobPositions.find((j) => j.slug === params.slug);
  if (!job) return { notFound: true };
  return {
    props: { job, others: jobPositions.filter((j) => j.slug !== job.slug).slice(0, 4) },
  };
}
