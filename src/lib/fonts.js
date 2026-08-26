// Self-hosted via next/font so there is no render-blocking round-trip to
// fonts.googleapis.com and no layout shift: next/font emits a size-adjusted
// local fallback for each family.
//
// ROUNDED VOICE (the committed brand direction, reaffirmed by the owner
// 2026-08-25 after a full-replacement exploration was rejected):
//   display — Bricolage Grotesque: warm and characterful without being the
//             chunky-rounded face every generated mockup ships with
//   body    — Nunito, rounded but composed at text sizes
//   mono    — JetBrains Mono, kept for codes, identifiers and tabular data
import { Bricolage_Grotesque, JetBrains_Mono, Nunito } from "next/font/google";

export const brand = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-brand",
  display: "swap",
});

export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display",
  display: "swap",
});

export const body = Nunito({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-body",
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVars = `${display.variable} ${body.variable} ${mono.variable} ${brand.variable}`;
