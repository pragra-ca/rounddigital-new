import { useEffect } from "react";

/**
 * Scroll reveal for [data-rd-reveal] elements: adds .rd-in when they enter
 * the viewport, driving the CSS keyframe. Pure IntersectionObserver.
 *
 * Robustness: a safety timeout force-reveals anything still hidden, and
 * reduced-motion / no-IO environments reveal everything immediately — so
 * content is never left stuck at opacity:0.
 */
export function useRdReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (typeof window === "undefined" || !root) return undefined;

    const reveal = (el) => {
      const d = el.dataset.rdRevealDelay;
      if (d) el.style.animationDelay = `${d}s`;
      el.classList.add("rd-in");
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      // Leave content visible; no arming, no animation.
      return undefined;
    }

    // Arm: only now does CSS hide [data-rd-reveal] so we can animate it in.
    root.classList.add("rd-reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    const observeAll = () =>
      root.querySelectorAll("[data-rd-reveal]:not(.rd-in)").forEach((el) => io.observe(el));

    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(root, { childList: true, subtree: true });

    // Safety net: whatever the observer misses becomes visible anyway.
    const safety = setTimeout(() => {
      root.querySelectorAll("[data-rd-reveal]:not(.rd-in)").forEach(reveal);
    }, 1600);

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(safety);
      root.classList.remove("rd-reveal-on");
    };
  }, [rootRef]);
}
