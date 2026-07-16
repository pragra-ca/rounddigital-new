import { useState } from "react";
import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { Arrow } from "@/components/rd/ui";
import { blogSummaries, toBlogListItem } from "@/data/blogSummaries";

const MONO = "'Space Mono',monospace";
const wrap = { maxWidth: 1280, margin: "0 auto" };
const COVERS = ["/rd/images/hero-5.jpg", "/rd/images/hero-2.jpg", "/rd/images/feature-1.jpg", "/rd/images/pillar-1.jpg", "/rd/images/benefit-2.jpg", "/rd/images/hero-1.jpg", "/rd/images/pillar-0.jpg", "/rd/images/feature-3.jpg"];

export async function getStaticProps() {
  return { props: { blogPosts: blogSummaries.map(toBlogListItem) } };
}

function fmt(date) {
  try {
    return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error();
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };
  return (
    <div data-rd-reveal style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", border: "1px solid var(--rd-border)", borderRadius: 40, padding: "48px 8%" }}>
      <div>
        <div style={{ font: `700 22px ${MONO}`, marginBottom: 6 }}>Stay ahead of the curve</div>
        <div style={{ fontSize: 16, color: "var(--rd-text-2)" }}>
          {status === "done" ? "You're in. See you next month." : status === "error" ? "Something went wrong. Try again." : "Monthly insights on AI, cloud and digital transformation. No fluff."}
        </div>
      </div>
      <form onSubmit={submit} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <input type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="rd-input" style={{ minWidth: 220 }} />
        <button type="submit" disabled={status === "sending"} className="rd-btn rd-btn-primary" style={{ padding: "12px 26px", fontSize: 15 }}>
          {status === "sending" ? "…" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}

export default function BlogIndex({ blogPosts }) {
  const [featured, ...rest] = blogPosts;
  return (
    <RdLayout>
      <Seo
        title="AI Agents, Cloud & Digital Transformation Blog"
        description="Field notes from the AI frontier: practical guides on AI agents, cloud migration, security and digital transformation — written by the engineers who ship them."
        keywords="AI blog, AI agents guide, digital transformation insights, cloud migration blog"
      />
      <section style={{ padding: "96px 5% 44px" }}>
        <div style={wrap}>
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>INSIGHTS</p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: 0, font: `700 clamp(44px,4.6vw,76px)/1.06 ${MONO}`, letterSpacing: "-0.01em" }}>
            Field notes from the AI frontier.
          </h1>
        </div>
      </section>

      {featured ? (
        <section style={{ padding: "0 5% 28px" }}>
          <Link href={`/blogs/${featured.slug.current}`} data-rd-reveal className="rd-card rd-card-lift" style={{ ...wrap, display: "grid", gridTemplateColumns: "1.2fr 1fr", overflow: "hidden" }}>
            <div style={{ padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
              <span style={{ font: `700 12px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>
                FEATURED · {(featured.category || "INSIGHTS").toUpperCase()} · {fmt(featured.publishedAt)}
              </span>
              <span style={{ font: `700 clamp(24px,2.4vw,32px)/1.2 ${MONO}` }}>{featured.title}</span>
              <span style={{ fontSize: 15, lineHeight: 1.6, color: "var(--rd-text-2)" }}>{featured.excerpt}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, font: "500 14px 'Inter',sans-serif", color: "var(--rd-accent)" }}>Read the article <Arrow /></span>
            </div>
            <img src={COVERS[0]} alt="" className="rd-img" style={{ minHeight: 260, height: "100%" }} />
          </Link>
        </section>
      ) : null}

      <section style={{ padding: "0 5% 64px" }}>
        <div className="rd-grid-4" style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {rest.map((post, i) => (
            <Link key={post._id} href={`/blogs/${post.slug.current}`} data-rd-reveal className="rd-card rd-card-lift" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <img src={COVERS[(i + 1) % COVERS.length]} alt="" className="rd-img" style={{ height: 150 }} />
              <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ font: `700 11px ${MONO}`, letterSpacing: "0.08em", color: "var(--rd-accent)" }}>{(post.category || "INSIGHTS").toUpperCase()} · {fmt(post.publishedAt)}</span>
                <span style={{ font: `700 17px/1.3 ${MONO}` }}>{post.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 5% 112px" }}>
        <Newsletter />
      </section>
    </RdLayout>
  );
}
