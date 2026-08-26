/* Nav icons.

   Drawn inline rather than pulled from an icon package: the site already draws
   its own marks (Arrow, the shield in figma.jsx, the theme glyphs) and a
   dependency would have arrived with several hundred unused glyphs. Every icon
   here shares one construction — 24x24 box, no fill, 1.5 stroke, round caps and
   joins — so they read as one family beside the brand mark.

   Keyed by href so the menu data stays free of presentation concerns; an
   unmapped route falls back to a neutral dot rather than breaking the row. */

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

const PATHS = {
  // --- Services -------------------------------------------------------
  "/services/it-services": (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" {...P} />
      <rect x="3" y="14" width="18" height="6" rx="1.5" {...P} />
      <path d="M6.5 7h.01M6.5 17h.01" {...P} />
    </>
  ),
  "/services/ai-enablement": (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" {...P} />
      <path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2" {...P} />
    </>
  ),
  "/services/research-data": (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" {...P} />
    </>
  ),
  "/services/staffing": (
    <>
      <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" {...P} />
      <circle cx="10" cy="8" r="3.2" {...P} />
      <path d="M19.5 19v-1.2a3.2 3.2 0 0 0-2.4-3.1M15.8 5.2a3.2 3.2 0 0 1 0 6" {...P} />
    </>
  ),
  "/services/training": (
    <>
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" {...P} />
      <path d="M6 10.8V15c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4.2" {...P} />
    </>
  ),
  "/services": (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" {...P} />
      <rect x="14" y="3" width="7" height="7" rx="1.5" {...P} />
      <rect x="3" y="14" width="7" height="7" rx="1.5" {...P} />
      <rect x="14" y="14" width="7" height="7" rx="1.5" {...P} />
    </>
  ),

  // --- Who we serve ---------------------------------------------------
  "/government": (
    <>
      <path d="M3 20h18M5 20V10M9.5 20V10M14.5 20V10M19 20V10M12 3 3 8h18l-9-5Z" {...P} />
    </>
  ),
  "/enterprise": (
    <>
      <path d="M3 20h18M5 20V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15M14 10h4a1 1 0 0 1 1 1v9" {...P} />
      <path d="M8 8h2M8 12h2M8 16h2" {...P} />
    </>
  ),
  "/nonprofit": (
    <>
      <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9Z" {...P} />
    </>
  ),
  "/industries": (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" {...P} />
      <path d="m3 13 9 5 9-5" {...P} />
    </>
  ),

  // --- Our work -------------------------------------------------------
  "/works": (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" {...P} />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" {...P} />
    </>
  ),
  "/products": (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" {...P} />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" {...P} />
    </>
  ),
  "/government/past-performance": (
    <>
      <rect x="4" y="4" width="16" height="17" rx="2" {...P} />
      <path d="M9 3h6v3H9zM8.5 12.5l2.2 2.2L15.5 10" {...P} />
    </>
  ),

  // --- Company --------------------------------------------------------
  "/about": (
    <>
      <circle cx="12" cy="12" r="9" {...P} />
      <path d="M12 11v5M12 8h.01" {...P} />
    </>
  ),
  "/about/women-owned": (
    <>
      <circle cx="12" cy="9" r="5" {...P} />
      <path d="m8.5 13.5-1.5 7 5-2.6 5 2.6-1.5-7" {...P} />
    </>
  ),
  "/about/leadership": (
    <>
      <circle cx="12" cy="8" r="3.4" {...P} />
      <path d="M5.5 20v-1a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5v1" {...P} />
    </>
  ),
  "/blogs": (
    <>
      <path d="M5 4h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" {...P} />
      <path d="M14 4v5h5M8 13h8M8 17h5" {...P} />
    </>
  ),
  "/careers": (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" {...P} />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18" {...P} />
    </>
  ),
  "/contact": (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" {...P} />
      <path d="m4 7 8 6 8-6" {...P} />
    </>
  ),
};

export default function NavIcon({ href, size = 20 }) {
  const glyph = PATHS[href] ?? <circle cx="12" cy="12" r="3" {...P} />;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
