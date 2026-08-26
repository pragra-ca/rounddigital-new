import { motion, useReducedMotion } from "framer-motion";

/* Scroll reveals.

   Three constraints shaped this, and they are the reason it is a shared
   primitive rather than inline props on every section:

   1. Crawlers and no-JS. `initial={{ opacity: 0 }}` is rendered by Framer as a
      server-side inline style, so without JavaScript the content would render
      but be invisible — bad for accessibility and bad for exactly the search
      and answer-engine indexing this site cares about. Every reveal carries
      `data-reveal`, and Layout ships a <noscript> rule that forces those
      elements visible. The text is always in the HTML either way.

   2. Reduced motion. useReducedMotion() collapses the reveal to a no-op rather
      than a slower version, matching the CSS blocks in system.css.

   3. Reveal once. `viewport={{ once: true }}` — content that re-animates every
      time it scrolls back into view is a readability problem, not a delight.

   The offset is deliberately small (14px). A long travel distance reads as a
   template; this should feel like the page settling, not like a slideshow. */

const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 14, as = "div", className, style }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      data-reveal=""
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/* Staggered children. Used where a row of cards should arrive in sequence —
   a grid that lands all at once loses the reading order the layout implies. */
export function RevealStagger({ children, className, style, step = 0.06, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      data-reveal=""
      className={className}
      style={style}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: reduce ? 0 : step } } }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ children, className, style, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      /* Carries the marker too: Framer renders the parent's "hidden" variant
         onto each child as a server-side inline opacity:0, so without this the
         <noscript> rule would reveal the container and leave its children
         invisible. Caught by counting data-reveal against opacity:0 in the
         prerendered HTML — 10 markers for 17 hidden elements. */
      data-reveal=""
      className={className}
      style={style}
      variants={
        reduce
          ? { hidden: {}, shown: {} }
          : { hidden: { opacity: 0, y: 14 }, shown: { opacity: 1, y: 0 } }
      }
      transition={reduce ? { duration: 0 } : { duration: 0.45, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
