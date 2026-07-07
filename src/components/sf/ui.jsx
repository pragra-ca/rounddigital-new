import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Small shared building blocks for the Signal Field design system     */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, className = "", ...rest }) {
  return (
    <div className={`sf-eyebrow ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function PillLink({ href, variant = "primary", size = "md", className = "", children }) {
  const sizes = {
    sm: "px-[22px] py-[11px] text-[13px]",
    md: "px-[26px] py-[13px] text-[14px]",
    lg: "px-[28px] py-[15px] text-[15px]",
  };
  const base = variant === "primary" ? "sf-btn-primary" : "sf-btn-ghost";
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${className}`}>
      {children}
    </Link>
  );
}

export function Chip({ children, accent = false, className = "" }) {
  return (
    <span className={`sf-chip ${accent ? "sf-chip-accent" : ""} ${className}`}>
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp — animates stat values like "100+", "−75%", "$2M", "3×"     */
/* ------------------------------------------------------------------ */

export function CountUp({ value, className = "", duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const match = String(value).match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!match) return undefined;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (Number.isNaN(target)) return undefined;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const useCommas = numStr.includes(",");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return undefined;
    }

    let raf;
    const run = () => {
      const startTime = performance.now();
      const frame = (now) => {
        const p = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        let current = (target * eased).toFixed(decimals);
        if (useCommas) current = Number(current).toLocaleString("en-US");
        setDisplay(`${prefix}${current}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Ticker — the rotating "what our agents did today" hero line         */
/* ------------------------------------------------------------------ */

const TICKER_ITEMS = [
  "agents processed 3,412 invoices",
  "support bots resolved 1,208 tickets",
  "security agents blocked 57 threats",
  "pipelines shipped 14 releases",
  "docs pipeline extracted 9,306 pages",
];

export function LiveTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % TICKER_ITEMS.length);
        setVisible(true);
      }, 260);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-[10px] rounded-full px-[22px] py-[10px] backdrop-blur-[6px]"
      style={{
        backgroundColor: "var(--sf-surface)",
        border: "1px solid var(--sf-border)",
      }}
    >
      <span
        className="h-[7px] w-[7px] rounded-full"
        style={{
          backgroundColor: "var(--sf-live)",
          boxShadow: "0 0 8px var(--sf-live-glow)",
        }}
      />
      <span className="sf-mono text-[13px] font-medium" style={{ color: "var(--sf-muted)" }}>
        LIVE ·
      </span>
      <span
        className="sf-mono inline-block min-w-0 text-left text-[13px] font-medium transition-opacity duration-[250ms] sm:min-w-[320px]"
        style={{ color: "var(--sf-text)", opacity: visible ? 1 : 0 }}
      >
        Today: {TICKER_ITEMS[index]}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SignalCore — the breathing radial glow + orbit rings hero backdrop, */
/* with a floaty mouse parallax on the whole core                      */
/* ------------------------------------------------------------------ */

export function SignalCore() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const el = parallaxRef.current;
    if (!el) return undefined;

    let raf;
    const onMove = (e) => {
      const dx = (e.clientX / window.innerWidth - 0.5) * 22;
      const dy = (e.clientY / window.innerHeight - 0.5) * 14;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0"
        style={{ transition: "transform 0.9s cubic-bezier(0.2, 0.6, 0.2, 1)" }}
      >
        <div
          className="absolute left-1/2 top-[44%] h-[780px] w-[780px] rounded-full"
          style={{
            transform: "translate(-50%,-50%)",
            background:
              "radial-gradient(circle, var(--sf-hero-glow) 0%, var(--sf-hero-glow-mid) 42%, transparent 68%)",
            animation: "rd-pulse 5s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-1/2 top-[44%] h-[440px] w-[440px] rounded-full"
          style={{
            transform: "translate(-50%,-50%)",
            border: "1px solid var(--sf-accent-border)",
            opacity: 0.6,
          }}
        />
        <div
          className="absolute left-1/2 top-[44%] h-[640px] w-[640px] rounded-full"
          style={{
            border: "1px dashed var(--sf-accent-border)",
            opacity: 0.4,
            animation: "rd-spin-slow 60s linear infinite",
          }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SplitWords — word-by-word headline reveal (blur → sharp, rise up)   */
/* ------------------------------------------------------------------ */

export function SplitWords({ text, accent = "", stagger = 0.055 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={on ? "sf-words-on" : ""}>
      {words.map((word, i) => (
        <span key={i} className="sf-word" style={{ transitionDelay: `${i * stagger}s` }}>
          {word}
          {i < words.length - 1 || accent ? " " : ""}
        </span>
      ))}
      {accent ? (
        <span
          className="sf-word"
          style={{
            transitionDelay: `${words.length * stagger}s`,
            color: "var(--sf-accent)",
            textShadow: "0 0 30px var(--sf-accent-glow)",
          }}
        >
          {accent}
        </span>
      ) : null}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — infinite chip strip, pauses on hover                      */
/* ------------------------------------------------------------------ */

export function Marquee({ children, duration = 36 }) {
  return (
    <div className="sf-marquee">
      <div className="sf-marquee-track" style={{ animationDuration: `${duration}s` }}>
        <div className="sf-marquee-half">{children}</div>
        <div className="sf-marquee-half" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollProgress — thin accent bar at the very top of the viewport    */
/* ------------------------------------------------------------------ */

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[2px]"
      style={{
        width: `${progress * 100}%`,
        backgroundColor: "var(--sf-accent)",
        boxShadow: "0 0 10px var(--sf-accent-glow)",
        transition: "width 0.1s linear",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* SectionHead — eyebrow + big heading, with optional side action      */
/* ------------------------------------------------------------------ */

export function SectionHead({ eyebrow, title, action, className = "" }) {
  return (
    <div className={`mb-9 flex flex-wrap items-end justify-between gap-6 ${className}`}>
      <div>
        {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
        <h2 className="max-w-[18ch] text-[32px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[42px]">
          {title}
        </h2>
      </div>
      {action || null}
    </div>
  );
}
