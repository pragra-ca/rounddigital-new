// WCAG 2.1 relative luminance and contrast ratio.
// https://www.w3.org/TR/WCAG21/#dfn-relative-luminance

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

export function relativeLuminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(fgHex, bgHex) {
  const a = relativeLuminance(fgHex);
  const b = relativeLuminance(bgHex);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

// Mirrors the CSS custom properties in src/styles/system.css. Kept in sync by
// the contrast suite — if you change a colour in CSS, change it here too or the
// tests stop protecting you.
//
// `accent` is the logo red and is used only for fills, rules and focus rings,
// where the applicable threshold is 3:1. It CANNOT carry text: #fd3f42 on white
// measures 3.52:1. `accentText` is the darkened value used wherever the accent
// appears as text, and `solidFg` is the label colour on a solid accent button —
// white in light mode (5.73:1 on #c81e22) and ink in dark mode (5.46:1 on
// #fd3f42), because white on the brand red would fail.
export const TOKENS = {
  dark: {
    bg: "#0b0f14",
    bg2: "#131a21",
    bg3: "#1c242d",
    text: "#ffffff",
    text2: "#b9c2cc",
    text3: "#8a95a1",
    accent: "#fd3f42",      // fills, rules, focus rings — 3:1 threshold
    accentText: "#ff7175",  // any accent-coloured text — 4.5:1 threshold
    control: "#5a6570",     // input + control borders — 3:1 threshold
    solid: "#fd3f42",
    solidFg: "#0b0f14",
  },
  light: {
    bg: "#ffffff",
    bg2: "#f7f8f9",
    bg3: "#edeff2",
    text: "#0b0f14",
    text2: "#47515c",
    text3: "#5f6a77",
    accent: "#fd3f42",
    accentText: "#c81e22",
    control: "#8a939d",
    solid: "#c81e22",
    solidFg: "#ffffff",
  },
};

// The hero band is a surface with its own local token layer (the --band-*
// properties in system.css), because it does not sit on the page ground: in
// light it is the tinted surface, and in dark it is LIFTED off the near-black
// page to #151d25 so it still reads as a distinct block. Band text therefore
// cannot be checked against TOKENS.*.bg — that is the wrong ground — so the
// band carries its own measured set here.
//
// The band used to be pinned to a single dark palette in both themes, which
// left the theme toggle a no-op across the whole first screen. These entries
// are what stops it regressing to a theme-locked slab again.
export const BAND_TOKENS = {
  dark: {
    bg: "#151d25",       // the lifted ground, NOT the page's #0b0f14
    text: "#ffffff",
    text2: "#b9c2cc",
    text3: "#8a95a1",
    accent: "#fd3f42",   // graphics only — loop mark, rule, timer fill
    accentText: "#ff7175",
    control: "#6b7683",  // not the page --control: #5a6570 is 3.23:1 on the
                         // page ground but only 2.86:1 on this lifted band
  },
  light: {
    bg: "#f7f8f9",
    text: "#0b0f14",
    text2: "#47515c",
    text3: "#5f6a77",
    accent: "#fd3f42",
    accentText: "#c81e22",
    control: "#7f8892",  // deliberately darker than the page --control:
                         // #8a939d measures 3.12:1 on white but only 2.93:1
                         // on the tinted band, which would miss the 3:1 UI bar
  },
};

