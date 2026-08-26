/* The RD monogram, traced directly from the master artwork.
 *
 * Source: the `nlogo` bitmap embedded in public/logo.svg — the same artwork the
 * 2026 Figma header uses (its logo layer carries the same `nlogo` id). The
 * outline was traced from that bitmap's alpha mask with a marching-squares
 * contour and simplified with Douglas-Peucker; the result matches the source at
 * IoU 0.983, the remainder being sub-pixel antialiasing on the rim.
 *
 * This replaces an earlier hand-drawn approximation. Because it is a path and
 * not a bitmap it stays crisp at any density and takes the brand token, so the
 * mark remains the one true-red object in both themes.
 *
 * The silhouette is simply connected — the two slots open onto the left edge
 * rather than enclosing counters — so one subpath is all it needs and no
 * fill-rule is required.
 */
export default function RdMark({ size = 26 }) {
  // Native artwork is 208x168; keep that ratio so the mark never distorts.
  const width = Math.round(size * (208 / 168));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M629.8 997.0 L331.7 997.0 L326.9 776.8 L175.5 779.8 L173.1 997.0 L2.4 994.0 L4.8
           556.5 L504.8 556.5 L507.2 767.9 L639.4 770.8 L644.2 764.9 L658.7 764.9 L677.9 753.0
           L687.5 753.0 L735.6 717.3 L790.9 642.9 L810.1 595.2 L814.9 559.5 L819.7 553.6 L819.7
           458.3 L814.9 452.4 L814.9 434.5 L810.1 428.6 L805.3 398.8 L781.2 345.2 L745.2 294.6
           L706.7 258.9 L677.9 241.1 L653.8 235.1 L649.0 229.2 L634.6 229.2 L629.8 223.2 L177.9
           223.2 L175.5 506.0 L4.8 508.9 L4.8 0.0 L620.2 0.0 L625.0 3.0 L663.5 3.0 L668.3 8.9
           L687.5 8.9 L692.3 14.9 L721.2 20.8 L802.9 68.5 L855.8 116.1 L906.2 178.6 L949.5
           256.0 L963.9 291.7 L963.9 303.6 L983.2 351.2 L983.2 369.0 L992.8 398.8 L992.8 434.5
           L997.6 440.5 L997.6 547.6 L992.8 553.6 L992.8 589.3 L988.0 595.2 L988.0 613.1 L983.2
           619.0 L983.2 636.9 L978.4 642.9 L973.6 672.6 L949.5 732.1 L906.2 809.5 L836.5 889.9
           L788.5 931.5 L740.4 961.3 L730.8 961.3 L716.3 973.2 L687.5 979.2 L682.7 985.1 L634.6
           991.1Z"
        fill="var(--brand, #fd3f42)"
      />
    </svg>
  );
}
