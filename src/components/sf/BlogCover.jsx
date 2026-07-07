import { useMemo } from "react";

/**
 * Generative, deterministic cover art for blog posts — Signal Field motifs
 * rendered as inline SVG (theme-aware via CSS variables). The slug seeds a
 * PRNG so every post always gets the same artwork; the category picks the
 * motif: node networks for AI, ascending steps for transformation, signal
 * rings for security, waves otherwise.
 */

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let s = seed;
  return function next() {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickVariant(category, rand) {
  const c = (category || "").toLowerCase();
  if (c.includes("agent") || c.includes("ai")) return "network";
  if (c.includes("transformation") || c.includes("cloud") || c.includes("modern"))
    return "steps";
  if (c.includes("security") || c.includes("compliance")) return "rings";
  return ["network", "steps", "rings", "waves"][Math.floor(rand() * 4)];
}

function NetworkArt({ rand }) {
  const nodes = useMemo(() => {
    const list = [];
    for (let i = 0; i < 10; i += 1) {
      list.push({
        x: 30 + rand() * 340,
        y: 26 + rand() * 208,
        r: 2.5 + rand() * 3.5,
        hot: rand() > 0.68,
      });
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {nodes.map((a, i) =>
        nodes.slice(i + 1, i + 3).map((b, j) => (
          <line
            key={`${i}-${j}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--sf-accent)"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        ))
      )}
      {nodes.map((n, i) => (
        <g key={i}>
          {n.hot ? (
            <circle cx={n.x} cy={n.y} r={n.r + 6} fill="var(--sf-accent)" fillOpacity="0.15" />
          ) : null}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.hot ? "var(--sf-accent)" : "var(--sf-faint)"}
            fillOpacity={n.hot ? 0.9 : 0.5}
          />
        </g>
      ))}
    </>
  );
}

function StepsArt({ rand }) {
  const bars = useMemo(() => {
    const list = [];
    for (let i = 0; i < 6; i += 1) {
      list.push({
        x: 34 + i * 58,
        h: 42 + i * 24 + rand() * 18,
        hot: i >= 4,
      });
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={236 - b.h}
          width="38"
          height={b.h}
          rx="8"
          fill={b.hot ? "var(--sf-accent)" : "var(--sf-faint)"}
          fillOpacity={b.hot ? 0.75 : 0.25}
        />
      ))}
      <polyline
        points={bars.map((b) => `${b.x + 19},${224 - b.h}`).join(" ")}
        fill="none"
        stroke="var(--sf-accent)"
        strokeWidth="2"
        strokeOpacity="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={bars[5].x + 19}
        cy={224 - bars[5].h}
        r="5"
        fill="var(--sf-accent)"
      />
    </>
  );
}

function RingsArt({ rand }) {
  const ticks = useMemo(() => {
    const list = [];
    for (let i = 0; i < 14; i += 1) {
      const angle = rand() * Math.PI * 2;
      list.push({ angle, hot: rand() > 0.7 });
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {[36, 62, 90, 118].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="130"
          r={r}
          fill="none"
          stroke="var(--sf-accent)"
          strokeOpacity={0.5 - i * 0.1}
          strokeWidth="1"
          strokeDasharray={i === 2 ? "3 6" : "none"}
        />
      ))}
      {ticks.map((t, i) => (
        <circle
          key={i}
          cx={200 + Math.cos(t.angle) * (36 + (i % 4) * 27)}
          cy={130 + Math.sin(t.angle) * (36 + (i % 4) * 27)}
          r={t.hot ? 4 : 2.5}
          fill={t.hot ? "var(--sf-accent)" : "var(--sf-faint)"}
          fillOpacity={t.hot ? 0.9 : 0.5}
        />
      ))}
      <circle cx="200" cy="130" r="10" fill="var(--sf-accent)" fillOpacity="0.85" />
      <circle cx="200" cy="130" r="20" fill="var(--sf-accent)" fillOpacity="0.18" />
    </>
  );
}

function WavesArt({ rand }) {
  const waves = useMemo(() => {
    const list = [];
    for (let w = 0; w < 3; w += 1) {
      const points = [];
      const amp = 14 + rand() * 18;
      const phase = rand() * Math.PI * 2;
      const base = 80 + w * 50;
      for (let x = 0; x <= 400; x += 10) {
        points.push(`${x},${base + Math.sin(x / 42 + phase) * amp}`);
      }
      list.push({ points: points.join(" "), hot: w === 1 });
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {waves.map((w, i) => (
        <polyline
          key={i}
          points={w.points}
          fill="none"
          stroke={w.hot ? "var(--sf-accent)" : "var(--sf-faint)"}
          strokeOpacity={w.hot ? 0.8 : 0.4}
          strokeWidth={w.hot ? 2 : 1.2}
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

const ART = {
  network: NetworkArt,
  steps: StepsArt,
  rings: RingsArt,
  waves: WavesArt,
};

export default function BlogCover({ slug, category, className = "" }) {
  const seed = hashString(slug || "post");
  const rand = useMemo(() => mulberry32(seed), [seed]);
  const variant = useMemo(() => pickVariant(category, mulberry32(seed + 1)), [category, seed]);
  const Art = ART[variant];
  const patternId = `sf-dots-${seed % 100000}`;

  return (
    <div className={`h-full w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid slice"
        className="block h-full w-full"
      >
        <defs>
          <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="var(--sf-faint)" fillOpacity="0.35" />
          </pattern>
          <radialGradient id={`${patternId}-g`} cx="30%" cy="20%" r="90%">
            <stop offset="0%" stopColor="var(--sf-accent)" stopOpacity="0.14" />
            <stop offset="60%" stopColor="var(--sf-accent)" stopOpacity="0.03" />
            <stop offset="100%" stopColor="var(--sf-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#${patternId}-g)`} />
        <rect width="400" height="260" fill={`url(#${patternId})`} />
        <Art rand={rand} />
      </svg>
    </div>
  );
}
