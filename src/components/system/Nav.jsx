import Link from "next/link";
import RdMark from "./RdMark";
import NavIcon from "./navicons";
import { useRouter } from "next/router";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { PRIMARY_NAV } from "@/data/navigation";
import { useTheme } from "./theme";
import { Arrow, Button, Container } from "./ui";

/* Header motion.

   Every animation here is gated on useReducedMotion(). When a visitor has asked
   their OS for reduced motion the springs collapse to instant state changes —
   nothing is merely slowed down, and nothing that conveys state depends on an
   animation completing. This mirrors the @media (prefers-reduced-motion) blocks
   already in system.css; the JS had to opt in separately because Framer drives
   these properties from script, where the media query cannot reach.

   The a11y contract of the previous header is preserved exactly: the dropdown
   is a disclosure with a real <button>, aria-expanded and aria-controls; hover
   is an enhancement over click, never the only way in; Escape returns focus to
   the trigger; and the panel element keeps a stable id whether open or closed
   so aria-controls never dangles. */

const SPRING = { type: "spring", stiffness: 520, damping: 38, mass: 0.7 };
const PANEL_SPRING = { type: "spring", stiffness: 420, damping: 34, mass: 0.8 };

function NavMenu({ item, openId, setOpenId, current, hovered, setHovered, reduce }) {
  const id = useId();
  const isOpen = openId === id;
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const closeTimer = useRef(null);

  const close = useCallback(
    (returnFocus) => {
      setOpenId((cur) => (cur === id ? null : cur));
      if (returnFocus) btnRef.current?.focus();
    },
    [id, setOpenId]
  );

  /* Hover intent. Two things made this menu feel unstable before:
       1. a 6px visual gap between trigger and panel that belonged to no
          element, so crossing it fired mouseleave and closed the menu; the
          panel now covers that gap with a ::before bridge (system.css), and
       2. an instant close, so clipping a corner on the way to a link killed
          the menu. Closing is deferred and cancelled if the pointer comes
          back, which is what makes a diagonal path to a submenu item work. */
  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => close(false), 220);
  }, [cancelClose, close]);

  const openNow = useCallback(() => {
    cancelClose();
    setOpenId(id);
  }, [cancelClose, id, setOpenId]);

  useEffect(() => cancelClose, [cancelClose]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close(true);
    };
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) close(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [isOpen, close]);

  const key = item.label;

  return (
    <li
      ref={wrapRef}
      className="rds-navitem"
      onMouseEnter={() => {
        setHovered(key);
        openNow();
      }}
      onMouseLeave={() => {
        setHovered(null);
        scheduleClose();
      }}
      onFocus={() => {
        setHovered(key);
        cancelClose();
      }}
    >
      {/* The gliding pill. One element shared across every item via layoutId,
          so Framer interpolates its position instead of cross-fading two. */}
      {hovered === key ? (
        <motion.span
          layoutId="rds-nav-pill"
          className="rds-navpill"
          aria-hidden="true"
          transition={reduce ? { duration: 0 } : SPRING}
        />
      ) : null}

      <button
        ref={btnRef}
        type="button"
        className="rds-navtrigger"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        /* Without this, only /government — the one top-level item with no
           dropdown — ever showed the active underline, leaving four of five
           sections with no location feedback. */
        data-current={current ? "true" : undefined}
        onClick={() => (isOpen ? close(false) : openNow())}
      >
        {item.label}
        <motion.svg
          width="8"
          height="8"
          viewBox="0 0 10 10"
          aria-hidden="true"
          focusable="false"
          animate={reduce ? undefined : { rotate: isOpen ? 180 : 0 }}
          transition={SPRING}
        >
          {/* Filled caret per the mockups — softer than the stroked chevron. */}
          <path d="M1.8 3.2h6.4L5 7.4Z" fill="currentColor" />
        </motion.svg>
      </button>

      {/* Wrapper carries the id and the positioning so aria-controls resolves
          whether or not the animated panel is mounted. */}
      <div id={`${id}-panel`} className="rds-navpanel-wrap">
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="rds-navpanel rds-mega"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, y: -6, scale: 0.98 }}
              transition={reduce ? { duration: 0 } : PANEL_SPRING}
              style={{ transformOrigin: "top left" }}
            >
              <ul className="rds-mega-grid">
                {item.children.map((child, i) => (
                  <motion.li
                    key={child.href}
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reduce ? { duration: 0 } : { delay: 0.03 + i * 0.026, duration: 0.22 }}
                  >
                    <Link href={child.href} className="rds-mega-item" onClick={() => close(false)}>
                      <span className="rds-mega-ico" aria-hidden="true">
                        <NavIcon href={child.href} />
                      </span>
                      <span className="rds-mega-body">
                        <span className="rds-navpanel-row">
                          <span className="rds-navpanel-title">{child.label}</span>
                          {child.meta ? <span className="rds-code">{child.meta}</span> : null}
                        </span>
                        {child.summary ? (
                          <span className="rds-navpanel-sum">{child.summary}</span>
                        ) : null}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Footer rail: the section's own overview page, so a mega menu
                  never becomes the only route into the parent section. */}
              <div className="rds-mega-foot">
                <Link href={item.href} onClick={() => close(false)}>
                  {item.label} overview <Arrow size={12} />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </li>
  );
}

function ThemeToggle({ reduce }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";
  return (
    <motion.button
      type="button"
      className="rds-iconbtn"
      onClick={toggle}
      aria-pressed={isDark}
      title={label}
      whileTap={reduce ? undefined : { scale: 0.9 }}
      transition={SPRING}
    >
      <span className="rds-sr">{label}</span>
      <span className="rds-iconswap" aria-hidden="true">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={reduce ? false : { opacity: 0, rotate: -70, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, rotate: 70, scale: 0.6 }}
            transition={reduce ? { duration: 0 } : { duration: 0.2 }}
            style={{ display: "grid", placeItems: "center" }}
          >
            {isDark ? (
              <svg width="16" height="16" viewBox="0 0 16 16" focusable="false">
                <circle cx="8" cy="8" r="3.4" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
                  <path d="M8 .8v2M8 13.2v2M.8 8h2M13.2 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M13.1 2.9l-1.4 1.4M4.3 11.7l-1.4 1.4" />
                </g>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" focusable="false">
                <path d="M13.4 9.6A5.8 5.8 0 016.4 2.6a5.9 5.9 0 107 7z" fill="currentColor" />
              </svg>
            )}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.button>
  );
}

export default function Nav() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  /* The header condenses once the page has moved. Driven off a motion value
     rather than a scroll listener in React state on every frame — this only
     re-renders on the threshold crossing. */
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => {
    const next = v > 8;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    const done = () => {
      setOpenId(null);
      setMobileOpen(false);
      setHovered(null);
    };
    router.events.on("routeChangeComplete", done);
    return () => router.events.off("routeChangeComplete", done);
  }, [router.events]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isCurrent = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  // With nothing hovered the pill rests on the current section, so the header
  // always shows where you are rather than going blank.
  const currentKey = PRIMARY_NAV.find((i) => isCurrent(i.href))?.label ?? null;
  const pillKey = hovered ?? currentKey;

  return (
    <header className="rds-header rds-noprint" data-scrolled={scrolled ? "true" : undefined}>
      <a className="rds-skip" href="#main">
        Skip to main content
      </a>

      <Container className="rds-header-inner">
        <Link href="/" className="rds-brand" aria-label="Round Digital — home">
          <motion.span
            className="rds-brand-mark"
            whileHover={reduce ? undefined : { rotate: -8, scale: 1.08 }}
            transition={SPRING}
          >
            <RdMark size={24} />
          </motion.span>
          {/* Uppercased in CSS, not in the markup, so the name a screen
              reader announces stays "Round Digital". */}
          <span className="rds-brand-word">RoundDigital</span>
        </Link>

        <nav aria-label="Primary" className="rds-primarynav">
          <LayoutGroup id="rds-nav">
            <ul onMouseLeave={() => setHovered(null)}>
              {PRIMARY_NAV.map((item) =>
                item.children ? (
                  <NavMenu
                    key={item.label}
                    item={item}
                    openId={openId}
                    setOpenId={setOpenId}
                    current={isCurrent(item.href)}
                    hovered={pillKey}
                    setHovered={setHovered}
                    reduce={reduce}
                  />
                ) : (
                  <li
                    key={item.label}
                    className="rds-navitem"
                    onMouseEnter={() => setHovered(item.label)}
                    onFocus={() => setHovered(item.label)}
                  >
                    {pillKey === item.label ? (
                      <motion.span
                        layoutId="rds-nav-pill"
                        className="rds-navpill"
                        aria-hidden="true"
                        transition={reduce ? { duration: 0 } : SPRING}
                      />
                    ) : null}
                    <Link
                      href={item.href}
                      className={`rds-navtrigger ${item.accent ? "rds-navtrigger-accent" : ""}`}
                      aria-current={isCurrent(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </LayoutGroup>
        </nav>

        <div className="rds-header-actions">
          <ThemeToggle reduce={reduce} />
          <Button href="/rfp" variant="accent" size="sm" className="rds-header-cta">
            Submit an RFP <Arrow size={12} />
          </Button>
          <button
            type="button"
            className="rds-iconbtn rds-burger"
            aria-expanded={mobileOpen}
            aria-controls="rds-mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="rds-sr">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
              {mobileOpen ? (
                <path d="M3.5 3.5l11 11M14.5 3.5l-11 11" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M2.5 5h13M2.5 9h13M2.5 13h13" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div id="rds-mobile-nav" className="rds-mobilenav-wrap">
        <AnimatePresence initial={false}>
          {mobileOpen ? (
            <motion.div
              className="rds-mobilenav"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              /* No inline overflow here. It would beat the stylesheet's
                 `overflow-y: auto`, and the drawer is taller than the screen —
                 1086px of menu in a 597px box on an iPhone 12, with the bottom
                 half unreachable by touch. The clipping the height animation
                 needs is done by .rds-mobilenav-wrap instead. */
            >
              <Container>
                <nav aria-label="Mobile">
                  <ul>
                    {PRIMARY_NAV.map((item, i) => (
                      <motion.li
                        key={item.label}
                        initial={reduce ? false : { opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={reduce ? { duration: 0 } : { delay: 0.04 + i * 0.03, duration: 0.2 }}
                      >
                        <Link href={item.href} className="rds-mobilenav-top">
                          {item.label}
                        </Link>
                        {item.children ? (
                          <ul className="rds-mobilenav-sub">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link href={child.href}>{child.label}</Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <Button href="/rfp" variant="accent" className="rds-mobilenav-cta">
                  Submit an RFP <Arrow size={12} />
                </Button>
              </Container>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
