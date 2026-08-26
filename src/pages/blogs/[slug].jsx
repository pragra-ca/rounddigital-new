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
  Section,
  SectionHead,
} from "@/components/system/ui";
import { blogs } from "@/data/blogs";

/* Content is a plain string with blank-line paragraph breaks. It is rendered
   as React text nodes — never through dangerouslySetInnerHTML — so authored
   content cannot inject markup into the page.

   A line that is short and ends without terminal punctuation is treated as a
   subheading, which is how this content was written. */
function renderContent(content) {
  if (!content) return null;
  return String(content)
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, i) => {
      const isHeading = block.length < 90 && !/[.!?:]$/.test(block) && !block.includes("\n");
      if (isHeading) {
        return (
          <h2 key={i} className="rds-h3" style={{ marginTop: "var(--s7)", marginBottom: "var(--s3)" }}>
            {block}
          </h2>
        );
      }
      return <p key={i}>{block}</p>;
    });
}

function formatDate(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

/* Editorial headlines are written for the page, not for a SERP: all eight run
   55-70 characters, and the Seo component appends " | Round Digital", so every
   one of them truncated in results. This shortens the <title> only — the H1 on
   the page keeps the full headline.

   Each post carries a hand-written `seoTitle` in blogs.js; this is only the
   fallback for a post that ships without one. It drops a trailing subtitle
   after a colon or dash and then trims to the last whole word that fits.
   Automatic trimming is deliberately the fallback and not the mechanism —
   applied to these eight headlines it produced fragments like "Security and
   Compliance in AI Agent", which is worse in a result than a long title. */
const TITLE_BUDGET = 62 - " | Round Digital".length;

function seoTitle(headline) {
  if (headline.length <= TITLE_BUDGET) return headline;
  const head = headline.split(/\s[:\u2014-]\s|:\s/)[0].trim();
  if (head.length <= TITLE_BUDGET && head.length >= 24) return head;
  const words = headline.split(" ");
  let out = "";
  for (const w of words) {
    if ((out ? out + " " + w : w).length > TITLE_BUDGET) break;
    out = out ? out + " " + w : w;
  }
  return out || headline.slice(0, TITLE_BUDGET);
}

export default function BlogPost({ post, related }) {
  const published = formatDate(post.publishedAt || post.publishDate);

  /* Article schema.
     `author` stays an Organization deliberately: leadership.jsx records that
     named officer biographies are pending documentary confirmation, and
     inventing a byline to satisfy an E-E-A-T checklist would be exactly the
     kind of unearned signal the rest of this site refuses to emit. The
     publisher block is expanded so the entity resolves, and dateModified is
     declared so recency is legible to crawlers rather than inferred. */
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: published || undefined,
    dateModified: post.updatedAt || published || undefined,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "Round Digital",
      url: "https://www.round.digital",
    },
    publisher: {
      "@type": "Organization",
      name: "Round Digital",
      url: "https://www.round.digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.round.digital/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.round.digital/blogs/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
  };

  return (
    <Layout>
      <Seo
        title={post.seoTitle || seoTitle(post.title)}
        /* Six excerpts ran 92-106 characters. Appending the tag list lands
           them in range using terms already on the page. */
        description={`${post.excerpt}${post.tags?.length ? ` Covering ${post.tags.slice(0, 3).join(", ")}.` : ""}`.slice(0, 158)}
        keywords={post.tags?.join(", ")}
        ogType="article"
        articlePublishedTime={published || undefined}
        breadcrumbLabel={post.title}
        jsonLd={[schema]}
      />

      <Section as="div" className="rds-hero">
        <Container style={{ maxWidth: 820 }}>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/blogs" },
              { label: post.title },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", fontSize: "clamp(32px, 4vw, 52px)" }}>
            {post.title}
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>{post.excerpt}</p>
          <p className="rds-meta" style={{ marginTop: "var(--s5)" }}>
            {post.author}
            {published ? (
              <>
                {" · "}
                <span className="rds-mono">{published}</span>
              </>
            ) : null}
          </p>
        </Container>
      </Section>

      <Section>
        <Container style={{ maxWidth: 760 }}>
          <article className="rds-prose" style={{ maxWidth: "none", fontSize: 17 }}>
            {renderContent(post.content)}
          </article>

          <Note title="On authorship:">
            This article is published under the company name. Named authorship will be
            attributed once the leadership record is finalised — we would rather publish
            without a byline than invent one.
          </Note>
        </Container>
      </Section>

      {related.length ? (
        <Section className="rds-band">
          <Container>
            <SectionHead index="01" label="More insights" />
            <ul className="rds-pillarlist">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blogs/${r.slug}`}>
                    <div className="rds-pillarlist-main">
                      <h2 className="rds-h3" style={{ marginBottom: "var(--s2)" }}>{r.title}</h2>
                      <p style={{ color: "var(--fg-2)", fontSize: 15, maxWidth: "66ch" }}>{r.excerpt}</p>
                    </div>
                    <div className="rds-pillarlist-side">
                      <span className="rds-arrow">
                        Read <Arrow />
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
        title="Working on something this touches?"
        body="If this raised a question about your own programme, ask it. You will get an answer from the people who do the delivery."
        primary={{ label: "Ask us", href: "/contact" }}
        secondary={{ label: "All insights", href: "/blogs" }}
      />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: blogs.map((b) => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return { notFound: true };
  const related = blogs
    .filter((b) => b.slug !== post.slug)
    .filter((b) => !post.tags?.length || b.tags?.some((t) => post.tags.includes(t)))
    .slice(0, 3);
  return {
    props: {
      post,
      related: related.length ? related : blogs.filter((b) => b.slug !== post.slug).slice(0, 3),
    },
  };
}
