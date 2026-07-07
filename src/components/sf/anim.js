import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

/**
 * Signal Field motion layer, wired once per page from SfLayout:
 *
 * 1. Scroll reveals — everything marked [data-reveal]. Optional attributes:
 *      data-reveal-delay="0.12"  — stagger offset in seconds
 *      data-reveal-x="-24"       — slide in horizontally instead of up
 * 2. Page-enter fade on <main>.
 * 3. Cursor spotlight — tracks the pointer on .sf-card-hover via CSS vars.
 * 4. Magnetic pull on .sf-btn-primary CTAs.
 *
 * Everything is skipped under prefers-reduced-motion.
 */
export function useSfReveal(rootRef) {
  useEffect(() => {
    if (typeof window === "undefined" || !rootRef.current) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray("[data-reveal]");
      if (reduced) {
        gsap.set(els, { opacity: 1, x: 0, y: 0 });
        return;
      }

      const main = root.querySelector("main");
      if (main) {
        gsap.fromTo(
          main,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }
        );
      }

      els.forEach((el) => {
        const delay = parseFloat(el.dataset.revealDelay || "0");
        const fromX = parseFloat(el.dataset.revealX || "0");
        gsap.fromTo(
          el,
          { opacity: 0, y: fromX ? 0 : 28, x: fromX },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    }, rootRef);

    let onPointerMove;
    let onPointerOut;

    if (!reduced) {
      onPointerMove = (e) => {
        const card = e.target.closest(".sf-card-hover");
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--sf-mx", `${e.clientX - rect.left}px`);
          card.style.setProperty("--sf-my", `${e.clientY - rect.top}px`);
        }
        const btn = e.target.closest(".sf-btn-primary");
        if (btn) {
          const rect = btn.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          gsap.to(btn, {
            x: gsap.utils.clamp(-7, 7, dx * 0.2),
            y: gsap.utils.clamp(-6, 6, dy * 0.35),
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      onPointerOut = (e) => {
        const btn = e.target.closest(".sf-btn-primary");
        if (btn && (!e.relatedTarget || !btn.contains(e.relatedTarget))) {
          gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.45)" });
        }
      };

      root.addEventListener("pointermove", onPointerMove);
      root.addEventListener("pointerout", onPointerOut);
    }

    return () => {
      if (onPointerMove) root.removeEventListener("pointermove", onPointerMove);
      if (onPointerOut) root.removeEventListener("pointerout", onPointerOut);
      ctx.revert();
    };
  }, [rootRef]);
}
