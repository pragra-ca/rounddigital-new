import Link from "next/link";

/* ---------------------------------------------------------------------------
   Engineered Grid — shared primitives.

   Everything here is class-driven against src/styles/system.css. No inline
   style objects for anything themeable: the legacy system inlined colours,
   which is what made it impossible to retheme or audit for contrast.
   ------------------------------------------------------------------------ */

export function Container({ as: As = "div", className = "", children, ...rest }) {
  return (
    <As className={`rds-container ${className}`} {...rest}>
      {children}
    </As>
  );
}

export function Section({ as: As = "section", tight = false, className = "", children, ...rest }) {
  return (
    <As className={`${tight ? "rds-section-tight" : "rds-section"} ${className}`} {...rest}>
      {children}
    </As>
  );
}

/* The numbered rule device: `01 ─────────────`. `index` is decorative, so it
   is hidden from assistive tech; the label carries the meaning. */
export function SectionHead({ index, label }) {
  return (
    <p className="rds-sechead">
      <span className="rds-eyebrow">
        {index ? <span aria-hidden="true">{index}</span> : null}
        {label}
      </span>
    </p>
  );
}

export function Eyebrow({ mark = false, className = "", children }) {
  return (
    <span className={`rds-eyebrow ${mark ? "rds-eyebrow-mark" : ""} ${className}`}>
      {children}
    </span>
  );
}

export function Arrow({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true" focusable="false">
      <path
        d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

/* Button renders an <a> when it navigates and a <button> when it acts.
   Never a div — the distinction is what makes it keyboard-operable. */
export function Button({
  href,
  variant = "primary",
  size,
  className = "",
  children,
  external = false,
  ...rest
}) {
  const cls = [
    "rds-btn",
    `rds-btn-${variant}`,
    size === "sm" ? "rds-btn-sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href && external) {
    return (
      <a className={cls} href={href} rel="noopener noreferrer" target="_blank" {...rest}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link className={cls} href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} type="button" {...rest}>
      {children}
    </button>
  );
}

/* `lg` is the feature-panel size — a panel holding a headline, prose and
   buttons rather than one sitting in a card grid. It is a variant here, not
   an inline style at the call site, so every feature panel on the site shares
   one padding instead of each inventing its own. */
export function Panel({ as: As = "div", fill = false, keyed = false, lg = false, className = "", children, ...rest }) {
  const cls = [
    "rds-panel",
    fill ? "rds-panel-fill" : "",
    keyed ? "rds-panel-keyed" : "",
    lg ? "rds-panel-lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <As className={cls} {...rest}>
      {children}
    </As>
  );
}

/* A whole-card link. The <a> wraps the card so the entire surface is one
   target — no nested interactive elements, which would break tab order. */
export function PanelLink({ href, keyed = false, className = "", children, ...rest }) {
  const cls = ["rds-panel", "rds-panel-link", keyed ? "rds-panel-keyed" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <Link className={cls} href={href} {...rest}>
      {children}
    </Link>
  );
}

/* Status is how this site states what it does not yet hold. There is no
   "badge" variant on purpose — an unearned credential must never be able to
   render as an achievement. See the claims guard in scripts/check-claims.mjs. */
export function Status({ state = "planned", children }) {
  return <span className={`rds-status rds-status-${state}`}>{children}</span>;
}

/* Note marks copy that is pending company confirmation, or gives the reader
   context a procurement evaluator specifically needs. */
export function Note({ title, children }) {
  return (
    <div className="rds-note">
      {title ? <strong style={{ color: "var(--fg)" }}>{title}</strong> : null}
      {title ? " " : null}
      {children}
    </div>
  );
}

export function Grid({ cols = 3, className = "", children, ...rest }) {
  return (
    <div className={`rds-grid rds-cols-${cols} ${className}`} {...rest}>
      {children}
    </div>
  );
}

/* Horizontally scrollable table region. tabIndex + role make it keyboard
   operable, which WCAG 2.1.1 requires of any scrollable region. */
export function TableWrap({ label, children }) {
  return (
    <div className="rds-tablewrap" tabIndex={0} role="region" aria-label={label}>
      {children}
    </div>
  );
}

export function Breadcrumb({ trail }) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "var(--s6)" }}>
      <ol style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--s2)", listStyle: "none" }}>
        {trail.map((item, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: "var(--s2)" }}>
              {last || !item.href ? (
                <span className="rds-meta" aria-current={last ? "page" : undefined} style={{ color: "var(--fg)" }}>
                  {item.label}
                </span>
              ) : (
                <Link className="rds-meta rds-link" href={item.href}>
                  {item.label}
                </Link>
              )}
              {!last ? (
                <span className="rds-meta" aria-hidden="true">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* FAQ uses native <details>/<summary>: keyboard-operable and screen-reader
   correct with no JavaScript, and it still works if hydration fails. */
export function Faq({ items, idPrefix = "faq" }) {
  return (
    <div>
      {items.map((item, i) => (
        <details
          key={`${idPrefix}-${i}`}
          style={{ borderBottom: "1px solid var(--rule)", padding: "var(--s4) 0" }}
        >
          <summary
            style={{
              cursor: "pointer",
              fontFamily: "var(--f-display)",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              gap: "var(--s4)",
            }}
          >
            {item.q}
            <span aria-hidden="true" className="rds-mono" style={{ color: "var(--brand-fg)", flex: "none" }}>
              +
            </span>
          </summary>
          <div className="rds-prose" style={{ marginTop: "var(--s3)", fontSize: 15 }}>
            {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
          </div>
        </details>
      ))}
    </div>
  );
}

/* Shared layout for legal pages (privacy, terms). Narrow measure, numbered
   sections, and a stated "last updated" date — because a legal notice without
   a date is not much of a notice. */
export function LegalPage({ eyebrow, title, intro, updated, sections, contactEmail = "privacy@round.digital" }) {
  return (
    <>
      <Section as="div" className="rds-hero">
        <Container style={{ maxWidth: 820 }}>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: title }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0" }}>
            {title}
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>{intro}</p>
          {updated ? (
            <p className="rds-meta" style={{ marginTop: "var(--s5)" }}>
              Last updated <span className="rds-mono">{updated}</span>
            </p>
          ) : null}
        </Container>
      </Section>

      <Section>
        <Container style={{ maxWidth: 820 }}>
          <ol style={{ display: "grid", gap: "var(--s7)" }}>
            {sections.map((s, i) => (
              <li key={s.title} style={{ listStyle: "none" }}>
                <p className="rds-sechead">
                  <span className="rds-eyebrow">
                    <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </span>
                </p>
                <div className="rds-prose" style={{ maxWidth: "none" }}>
                  {(Array.isArray(s.body) ? s.body : [s.body]).map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <Panel fill keyed style={{ marginTop: "var(--s8)" }}>
            <h2 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>
              Questions about this notice
            </h2>
            <p style={{ color: "var(--fg-2)", fontSize: 15 }}>
              Email{" "}
              <a href={`mailto:${contactEmail}`} className="rds-link">
                {contactEmail}
              </a>
              . We aim to respond within one business day.
            </p>
          </Panel>
        </Container>
      </Section>
    </>
  );
}

/* The closing call to action. `accent` promotes the single highest-intent
   action on the page to the red solid treatment. */
export function CtaBand({
  title,
  body,
  primary = { label: "Start a conversation", href: "/contact" },
  secondary,
  accent = false,
}) {
  return (
    <Section>
      <Container>
        <Panel fill keyed lg>
          <div style={{ maxWidth: "62ch" }}>
            <h2 className="rds-h2" style={{ marginBottom: "var(--s4)" }}>
              {title}
            </h2>
            <p className="rds-lead" style={{ marginBottom: "var(--s6)" }}>
              {body}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)" }}>
            <Button href={primary.href} variant={accent ? "accent" : "primary"}>
              {primary.label} <Arrow />
            </Button>
            {secondary ? (
              <Button href={secondary.href} variant="ghost">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
