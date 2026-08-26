import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { BAND_TOKENS, contrastRatio, TOKENS } from "../src/content/contrast.mjs";

test("contrastRatio matches known reference values", () => {
  // Black on white is the canonical 21:1.
  assert.ok(Math.abs(contrastRatio("#000000", "#ffffff") - 21) < 0.01);
  // A colour against itself is 1:1.
  assert.ok(Math.abs(contrastRatio("#251c1e", "#251c1e") - 1) < 0.001);
});

test("documents that the current pure-red accent fails AA on the dark bg", () => {
  const ratio = contrastRatio("#ff0000", "#251c1e");
  assert.ok(ratio < 4.5, `expected the known failure, got ${ratio}`);
});

test("the text accent passes AA for normal text in both themes", () => {
  for (const [name, t] of Object.entries(TOKENS)) {
    const ratio = contrastRatio(t.accentText, t.bg);
    assert.ok(ratio >= 4.5, `${name}: accentText is ${ratio.toFixed(2)}:1, need 4.5`);
  }
});

test("body text passes AA in both themes", () => {
  for (const [name, t] of Object.entries(TOKENS)) {
    assert.ok(
      contrastRatio(t.text, t.bg) >= 4.5,
      `${name}: primary text fails`
    );
    assert.ok(
      contrastRatio(t.text2, t.bg) >= 4.5,
      `${name}: secondary text fails`
    );
  }
});

test("the accent fill still passes 3:1 for large text and UI boundaries", () => {
  for (const [name, t] of Object.entries(TOKENS)) {
    assert.ok(
      contrastRatio(t.accent, t.bg) >= 3,
      `${name}: accent fill fails the 3:1 non-text threshold`
    );
  }
});

test("TOKENS hand-mirrors system.css — every hex value actually appears there", () => {
  // TOKENS is a manual copy of the CSS custom properties, kept in sync by
  // hand (see the comment in contrast.mjs). A CSS-only colour edit would
  // silently desync it and this suite would keep testing stale colours. So
  // fail loudly instead: every hex literal in TOKENS must be found verbatim
  // in system.css.
  const css = readFileSync(
    fileURLToPath(new URL("../src/styles/system.css", import.meta.url)),
    "utf8"
  );
  for (const [group, tokens] of [...Object.entries(TOKENS), ...Object.entries(BAND_TOKENS)]) {
    for (const [key, hex] of Object.entries(tokens)) {
      assert.ok(
        css.includes(hex),
        `${group}.${key} (${hex}) is not present in system.css — tokens are out of sync`
      );
    }
  }
});

/* ── Hero band ──────────────────────────────────────────────────────────
   The band is measured separately from the page because it is a surface in
   its own right: it never sits on TOKENS.*.bg. In dark it is lifted to
   #151d25, so checking band text against the page's #0b0f14 would report
   ratios the user never actually sees. */

test("band text passes AA against the band's own ground in both themes", () => {
  for (const [name, t] of Object.entries(BAND_TOKENS)) {
    assert.ok(
      contrastRatio(t.text, t.bg) >= 4.5,
      `${name} band: headline/body is ${contrastRatio(t.text, t.bg).toFixed(2)}:1, need 4.5`
    );
    assert.ok(
      contrastRatio(t.text2, t.bg) >= 4.5,
      `${name} band: lead prose is ${contrastRatio(t.text2, t.bg).toFixed(2)}:1, need 4.5`
    );
    // text3 dims the inactive slider steps and the rail captions. It is real
    // prose, not decoration, so it carries the full 4.5:1 bar too.
    assert.ok(
      contrastRatio(t.text3, t.bg) >= 4.5,
      `${name} band: captions are ${contrastRatio(t.text3, t.bg).toFixed(2)}:1, need 4.5`
    );
  }
});

test("band accent text passes AA, and the raw brand red is kept off text", () => {
  for (const [name, t] of Object.entries(BAND_TOKENS)) {
    assert.ok(
      contrastRatio(t.accentText, t.bg) >= 4.5,
      `${name} band: accent text is ${contrastRatio(t.accentText, t.bg).toFixed(2)}:1, need 4.5`
    );
    // The logo red is a graphic value on the band — the loop mark, the rule,
    // the timer fill. It clears 3:1 but NOT 4.5:1 on the light band, which is
    // exactly why --band-accent exists as a separate darkened token.
    assert.ok(
      contrastRatio(t.accent, t.bg) >= 3,
      `${name} band: brand red fails the 3:1 graphics threshold`
    );
  }
  assert.ok(
    contrastRatio(BAND_TOKENS.light.accent, BAND_TOKENS.light.bg) < 4.5,
    "documents why the light band needs a darkened accent for text"
  );
});

test("band control borders clear the 3:1 UI threshold on the band", () => {
  for (const [name, t] of Object.entries(BAND_TOKENS)) {
    const ratio = contrastRatio(t.control, t.bg);
    assert.ok(ratio >= 3, `${name} band: control border is ${ratio.toFixed(2)}:1, need 3`);
  }
  // In BOTH themes the page-level --control fails on the band: too light for
  // the tinted light ground, too dark for the lifted dark one. If someone
  // "simplifies" the band back onto it, these are the assertions that object.
  for (const name of ["light", "dark"]) {
    assert.ok(
      contrastRatio(TOKENS[name].control, BAND_TOKENS[name].bg) < 3,
      `${name}: the page control value would fail on the band — --band-control must stay distinct`
    );
  }
});

test("the band actually differs between themes — it is not theme-locked", () => {
  // The regression this whole token layer exists to prevent: the band was
  // once pinned to one dark palette, so toggling the theme changed nothing
  // across the entire first screen.
  assert.notEqual(
    BAND_TOKENS.light.bg,
    BAND_TOKENS.dark.bg,
    "light and dark bands share a ground — the hero has no light version"
  );
  assert.notEqual(
    BAND_TOKENS.light.text,
    BAND_TOKENS.dark.text,
    "light and dark bands share a text colour — the hero has no light version"
  );
  // The band must also stay distinguishable from the page it sits on, in
  // both directions, or it stops reading as a band at all.
  for (const name of ["light", "dark"]) {
    assert.notEqual(
      BAND_TOKENS[name].bg,
      TOKENS[name].bg,
      `${name}: the band has dissolved into the page ground`
    );
  }
});
