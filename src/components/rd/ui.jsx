import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Shared building blocks for the RoundDigital "Site" design system    */
/* ------------------------------------------------------------------ */

export function RdButton({ href, variant = "primary", className = "", children, ...rest }) {
  const cls = `rd-btn ${variant === "primary" ? "rd-btn-primary" : "rd-btn-ghost"} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}

export function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true">
      <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function SectionIntro({ eyebrow, title, body, center = true, maxWidth = 720 }) {
  return (
    <div
      data-rd-reveal
      style={{
        maxWidth,
        margin: center ? "0 auto 72px" : "0 0 72px",
        textAlign: center ? "center" : "left",
      }}
    >
      {eyebrow ? (
        <p style={{ margin: "0 0 16px", font: "600 15px 'Inter',sans-serif" }}>{eyebrow}</p>
      ) : null}
      <h2
        style={{
          margin: "0 0 20px",
          font: "700 clamp(36px,3.2vw,60px)/1.12 'Space Mono',monospace",
        }}
      >
        {title}
      </h2>
      {body ? (
        <p style={{ margin: 0, fontSize: 20, color: "var(--rd-text-2)" }}>{body}</p>
      ) : null}
    </div>
  );
}

/* CountUp — animates stat values like "100+", "−90%", "$2M", "3×", "24/7" */
export function CountUp({ value, className = "", style, duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const match = String(value).match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return undefined;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (Number.isNaN(target)) {
      setDisplay(value);
      return undefined;
    }
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const useCommas = numStr.includes(",");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return undefined;
    }

    let raf;
    const run = () => {
      const start = performance.now();
      const frame = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        let cur = (target * eased).toFixed(decimals);
        if (useCommas) cur = Number(cur).toLocaleString("en-US");
        setDisplay(`${prefix}${cur}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };
    setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}

/* CtaBand — the framed "ready?" call-to-action used across pages */
export function CtaBand({ title, body, ctaLabel = "Book a call", ctaHref = "/contact" }) {
  return (
    <section style={{ padding: "0 5% 112px" }}>
      <div
        data-rd-reveal
        className="rd-container"
        style={{
          textAlign: "center",
          border: "1px solid var(--rd-border)",
          borderRadius: 40,
          padding: "80px 8%",
        }}
      >
        <h2 style={{ margin: "0 0 16px", font: "700 clamp(32px,3vw,52px)/1.15 'Space Mono',monospace" }}>
          {title}
        </h2>
        <p style={{ margin: "0 auto 32px", maxWidth: 560, fontSize: 20, color: "var(--rd-text-2)" }}>
          {body}
        </p>
        <RdButton href={ctaHref}>{ctaLabel}</RdButton>
      </div>
    </section>
  );
}

/* Breadcrumb for detail pages */
export function Breadcrumb({ trail }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        fontSize: 15,
        color: "var(--rd-text-3)",
        marginBottom: 40,
      }}
    >
      {trail.map((item, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          {item.href ? (
            <Link href={item.href} style={{ color: "var(--rd-text-3)" }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "var(--rd-text)" }}>{item.label}</span>
          )}
          {i < trail.length - 1 ? <span>/</span> : null}
        </span>
      ))}
    </div>
  );
}
