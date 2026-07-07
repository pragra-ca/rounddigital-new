import { useState } from "react";
import Link from "next/link";
import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow } from "@/components/sf/ui";
import BlogCover from "@/components/sf/BlogCover";
import { blogSummaries, toBlogListItem } from "@/data/blogSummaries";

export async function getStaticProps() {
  return {
    props: {
      blogPosts: blogSummaries.map(toBlogListItem),
    },
  };
}

function formatDate(date) {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch (e) {
    return "";
  }
}

function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    if (status.state === "sending") return;
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Subscription failed.");
      setStatus({ state: "success", message: "You're in. See you next month." });
      setEmail("");
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Subscription failed." });
    }
  };

  return (
    <div
      data-reveal
      className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 rounded-[18px] px-6 py-8 sm:px-9 lg:flex-row"
      style={{ border: "1px solid var(--sf-border)" }}
    >
      <div className="text-center lg:text-left">
        <div className="sf-sora mb-[6px] text-[20px] font-bold">Stay ahead of the curve</div>
        <div className="text-[14px]" style={{ color: "var(--sf-muted)" }}>
          {status.state === "success"
            ? status.message
            : "Monthly insights on AI, cloud and digital transformation. No fluff."}
        </div>
        {status.state === "error" ? (
          <div className="mt-1 text-[13px]" style={{ color: "var(--sf-accent)" }} role="status">
            {status.message}
          </div>
        ) : null}
      </div>
      <form onSubmit={submit} className="flex w-full max-w-[380px] items-center gap-[10px]">
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sf-input flex-1 rounded-full px-[22px]"
        />
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="sf-btn-primary whitespace-nowrap px-6 py-[13px] text-[14px] disabled:opacity-60"
        >
          {status.state === "sending" ? "…" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}

export default function BlogIndex({ blogPosts }) {
  const [featured, ...rest] = blogPosts;

  return (
    <SfLayout>
      <Seo
        title="AI Agents, Cloud & Digital Transformation Blog"
        description="Field notes from the AI frontier: practical guides on AI agents, cloud migration, security and digital transformation — written by the engineers who ship them."
        keywords="AI blog, AI agents guide, digital transformation insights, cloud migration blog, enterprise AI best practices, AI ROI"
      />

      {/* Hero */}
      <section className="px-5 pb-11 pt-16 sm:px-8 lg:px-11">
        <div className="mx-auto max-w-[1240px]">
          <Eyebrow data-reveal className="mb-[14px]">
            Insights
          </Eyebrow>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            className="m-0 text-[36px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[50px]"
          >
            Field notes from the AI frontier.
          </h1>
        </div>
      </section>

      {/* Featured */}
      {featured ? (
        <section className="px-5 pb-5 sm:px-8 lg:px-11">
          <Link
            href={`/blogs/${featured.slug.current}`}
            data-reveal
            className="mx-auto grid max-w-[1240px] grid-cols-1 overflow-hidden rounded-[18px] transition-transform duration-300 hover:-translate-y-[3px] lg:grid-cols-[1.2fr_1fr]"
            style={{
              border: "1px solid var(--sf-accent-border)",
              backgroundImage:
                "linear-gradient(160deg, var(--sf-accent-soft), transparent 55%)",
            }}
          >
            <div className="flex flex-col justify-center gap-[14px] px-7 py-9 sm:px-[34px]">
              <span
                className="sf-mono text-[11px] font-medium tracking-[0.12em]"
                style={{ color: "var(--sf-accent)" }}
              >
                FEATURED · {(featured.category || "INSIGHTS").toUpperCase()} ·{" "}
                {formatDate(featured.publishedAt)}
              </span>
              <span className="sf-sora text-[24px] font-bold leading-[1.2] tracking-[-0.02em] sm:text-[30px]">
                {featured.title}
              </span>
              <span className="text-[14.5px] leading-[1.6]" style={{ color: "var(--sf-muted)" }}>
                {featured.excerpt}
              </span>
              <span className="sf-sora text-[13px] font-semibold" style={{ color: "var(--sf-accent)" }}>
                Read the article →
              </span>
            </div>
            <div
              className="min-h-[220px] lg:min-h-full"
              style={{ borderLeft: "1px solid var(--sf-border)" }}
            >
              <BlogCover slug={featured.slug.current} category={featured.category} />
            </div>
          </Link>
        </section>
      ) : null}

      {/* Grid */}
      <section className="px-5 pb-14 pt-6 sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((post, i) => (
            <Link
              key={post._id}
              href={`/blogs/${post.slug.current}`}
              data-reveal
              data-reveal-delay={`${(i % 4) * 0.06}`}
              className="sf-card sf-card-hover flex flex-col overflow-hidden rounded-2xl"
            >
              <div
                className="h-[130px]"
                style={{ borderBottom: "1px solid var(--sf-border)" }}
              >
                <BlogCover slug={post.slug.current} category={post.category} />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <span
                  className="sf-mono text-[10.5px] font-medium tracking-[0.08em]"
                  style={{ color: "var(--sf-accent)" }}
                >
                  {(post.category || "INSIGHTS").toUpperCase()} · {formatDate(post.publishedAt)}
                </span>
                <span className="sf-sora text-[16px] font-bold leading-[1.3]">{post.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-5 pb-14 sm:px-8 lg:px-11">
        <NewsletterBar />
      </section>
    </SfLayout>
  );
}
