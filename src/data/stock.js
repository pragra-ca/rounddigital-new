// Stock photography used by the 2026 design.
//
// Every file in public/images/stock was downloaded from Unsplash under the
// Unsplash License (free for commercial use, no permission or attribution
// required). Only regular `photo-*` assets are used — `premium_photo-*` /
// plus.unsplash.com assets are Unsplash+ subscription work and are deliberately
// excluded. `source` records the exact CDN slug so any image can be traced back
// to its original and re-licensed or replaced without guesswork.
//
// `alt` is the accessible name. These photographs are illustrative, so the alt
// text describes what is depicted and never implies the scene is a RoundDigital
// facility, project or employee. Decorative-only usages pass alt="".

const BASE = "/images/stock";

export const STOCK = {
  datacenter: {
    src: `${BASE}/datacenter.jpg`,
    width: 2000,
    height: 640,
    alt: "Rows of dark server cabinets threaded with orange and blue fibre-optic cabling.",
    source: "unsplash:photo-1558494949-ef010cbdcc31",
  },
  logistics: {
    src: `${BASE}/logistics.jpg`,
    width: 1400,
    height: 944,
    alt: "Aerial view of a container yard, shipping containers stacked in colour-sorted rows.",
    source: "unsplash:photo-1494412519320-aa613dfb7738",
  },
  cloudRacks: {
    src: `${BASE}/cloud-racks.jpg`,
    width: 1400,
    height: 688,
    alt: "A bright, empty data-hall aisle lined with white server cabinets.",
    source: "unsplash:photo-1784652852605-6945598f2af3",
  },
  code: {
    src: `${BASE}/code.jpg`,
    width: 1300,
    height: 672,
    alt: "A dark editor window filled with syntax-highlighted source code.",
    source: "unsplash:photo-1461749280684-dccba630e2f6",
  },
  neural: {
    src: `${BASE}/neural.jpg`,
    width: 1000,
    height: 668,
    alt: "An abstract sphere of interconnected blue nodes and light filaments.",
    source: "unsplash:photo-1641897037078-e91a4afcce94",
  },
  security: {
    src: `${BASE}/security.jpg`,
    width: 1400,
    height: 906,
    alt: "A network patch panel with yellow fibre-optic leads running to circuit boards.",
    source: "unsplash:photo-1744868562210-fffb7fa882d9",
  },
  team: {
    src: `${BASE}/team.jpg`,
    width: 1000,
    height: 834,
    alt: "Colleagues working together around a laptop in a glass-walled meeting room.",
    source: "unsplash:photo-1541746972996-4e0b0f43e02a",
  },
  networkMap: {
    src: `${BASE}/network-map.jpg`,
    width: 1600,
    height: 844,
    alt: "A three-dimensional lattice of connected nodes suggesting a distributed network.",
    source: "unsplash:photo-1683447551794-1c287cd42675",
  },
};

export default STOCK;
