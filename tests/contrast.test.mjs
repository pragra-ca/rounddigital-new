import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { contrastRatio, TOKENS } from "../src/content/contrast.mjs";

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

test("TOKENS hand-mirrors globals.css — every hex value actually appears there", () => {
  // TOKENS is a manual copy of the CSS custom properties, kept in sync by
  // hand (see the comment in contrast.mjs). A CSS-only colour edit would
  // silently desync it and this suite would keep testing stale colours. So
  // fail loudly instead: every hex literal in TOKENS must be found verbatim
  // in globals.css.
  const cssPath = fileURLToPath(new URL("../src/styles/globals.css", import.meta.url));
  const css = readFileSync(cssPath, "utf8");
  for (const [name, t] of Object.entries(TOKENS)) {
    for (const [key, hex] of Object.entries(t)) {
      assert.ok(
        css.includes(hex),
        `${name}.${key} (${hex}) is not present in globals.css — TOKENS is out of sync`
      );
    }
  }
});
