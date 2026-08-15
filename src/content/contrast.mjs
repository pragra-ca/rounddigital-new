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

// Mirrors the CSS custom properties in globals.css. Kept in sync by the
// tests above — if you change a colour in CSS, change it here too or the
// contrast suite stops protecting you.
export const TOKENS = {
  dark: {
    bg: "#251c1e",
    text: "#ffffff",
    text2: "#dad9d9",
    accent: "#ff0000",      // fills, rules, focus rings — 3:1 threshold
    accentText: "#ff6b6b",  // any accent-coloured text — 4.5:1 threshold
  },
  light: {
    bg: "#ffffff",
    text: "#0d0305",
    text2: "#554e50",
    accent: "#d40000",
    accentText: "#c00000",
  },
};
