import Image from "next/image";
import { Container, Section, Button, Arrow } from "./ui";
import { Reveal, RevealStagger, RevealItem } from "./motion";

/* ---------------------------------------------------------------------------
   Section patterns from the 2026 Figma reference.

   Each export is one recurring device in that file. They are presentational
   only — every string is passed in by the page, so the same pattern can carry
   different copy without a fork. Styling lives in src/styles/system.css under
   the "2026 design" heading; nothing here sets a themeable colour inline.
   ------------------------------------------------------------------------ */

/* The red-rule label, display heading and optional lead that opens a band. */
export function FigHead({ label, title, body, center = false, as: As = "h2", id }) {
  return (
    <Reveal className={`rds-fig-head ${center ? "rds-fig-head-center" : ""}`}>
      {label ? <span className="rds-eyebrow rds-eyebrow-mark">{label}</span> : null}
      <As className={As === "h1" ? "rds-h1" : "rds-h2"} id={id}>
        {title}
      </As>
      {body ? <p>{body}</p> : null}
    </Reveal>
  );
}

export function Pill({ children }) {
  return <span className="rds-pill">{children}</span>;
}

/* Page opening. `inverted` is the government treatment: a dark band with the
   tokens re-pointed, so children need no inverted variants of their own. */
export function FigHero({ pill, eyebrow, title, lead, actions, inverted = false, center = false }) {
  const centred = center || inverted || Boolean(pill);
  return (
    <div className={`rds-fig-hero ${inverted ? "rds-fig-hero-inv" : ""}`} style={centred ? undefined : { textAlign: "start" }}>
      <Container>
        {pill ? <Pill>{pill}</Pill> : null}
        {eyebrow ? <span className="rds-eyebrow rds-eyebrow-mark">{eyebrow}</span> : null}
        <h1 className="rds-h1">{title}</h1>
        {lead ? (
          <p className="rds-lead" style={centred ? undefined : { marginInline: 0 }}>
            {lead}
          </p>
        ) : null}
        {actions?.length ? (
          <div className="rds-fig-hero-actions" style={centred ? undefined : { justifyContent: "flex-start" }}>
            {actions.map((a) => (
              <Button key={a.label} href={a.href} variant={a.variant || "ghost"}>
                {a.label}
                {a.arrow ? <Arrow /> : null}
              </Button>
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
}

/* A caps label followed by the names of credentials or past clients. The list
   is text, not logos: a logo implies an endorsement that a name does not. */
export function TrustBar({ label, items }) {
  return (
    <Section tight className="rds-band">
      <Container>
        <div className="rds-trustbar">
          <span className="rds-eyebrow">{label}</span>
          <ul>
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export function Metrics({ items, band = true }) {
  return (
    <Section tight className={band ? "rds-band" : ""}>
      <Container>
        <RevealStagger as="dl" className="rds-metrics" step={0.07}>
          {items.map((m) => (
            <RevealItem key={m.label}>
              <dt className="rds-sr">{m.label}</dt>
              <dd>
                <span className="rds-metrics-v">{m.value}</span>
                <span className="rds-metrics-l" aria-hidden="true">
                  {m.label}
                </span>
              </dd>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}

export function Chip({ children, quiet = false }) {
  return <span className={`rds-chip ${quiet ? "rds-chip-quiet" : ""}`}>{children}</span>;
}

export function DotList({ items }) {
  return (
    <ul className="rds-dotlist">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export function NumRow({ items }) {
  return (
    <RevealStagger as="ol" className="rds-numrow">
      {items.map((it, i) => (
        <RevealItem as="li" key={it.title}>
          <span className="rds-numrow-idx" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}

export function CertCard({ tag, title, body, quiet = false }) {
  return (
    <div className="rds-panel rds-certcard">
      <span>
        <Chip quiet={quiet}>{tag}</Chip>
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        d="M8 1.5l5 2v4c0 3.2-2.1 6-5 7-2.9-1-5-3.8-5-7v-4l5-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldRow({ items }) {
  return (
    <Section tight className="rds-band">
      <Container>
        <ul className="rds-shieldrow">
          {items.map((i) => (
            <li key={i}>
              <ShieldIcon />
              {i}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* A photograph carrying copy over its lower half. `priority` is passed through
   because this is the LCP element on pages where it sits high. */
export function CaseHero({ image, tag, title, body, priority = false }) {
  return (
    <Reveal className="rds-casehero">
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        priority={priority}
        sizes="(max-width: 1240px) 100vw, 1200px"
      />
      <div className="rds-casehero-body">
        {tag ? (
          <span>
            <Chip>{tag}</Chip>
          </span>
        ) : null}
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Reveal>
  );
}

export function CaseCard({ eyebrow, client, title, body, result }) {
  return (
    <div className="rds-panel rds-panel-fill rds-casecard">
      <span className="rds-eyebrow">
        {eyebrow}
        {client ? <span style={{ color: "var(--fg-2)" }}>· {client}</span> : null}
      </span>
      <h3>{title}</h3>
      {body ? <p>{body}</p> : null}
      {result ? <span className="rds-casecard-result">{result}</span> : null}
    </div>
  );
}

/* Prose beside a photograph. `flip` puts the image first, `wide` gives it the
   larger column — both are in the Figma and alternate down the services page. */
export function MediaSplit({ image, flip = false, wide = false, children, ratio }) {
  return (
    <div className={`rds-media ${wide ? "rds-media-wide" : ""} ${flip ? "rds-media-flip" : ""}`}>
      <div>{children}</div>
      <Reveal as="figure" className="rds-media-fig" style={ratio ? { aspectRatio: ratio } : undefined}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 960px) 100vw, 600px"
        />
      </Reveal>
    </div>
  );
}

export function Steps4({ items }) {
  return (
    <RevealStagger as="ol" className="rds-steps4">
      {items.map((s, i) => (
        <RevealItem as="li" key={s.title}>
          <div className="rds-steps4-top">
            <span className="rds-steps4-idx" aria-hidden="true">
              {s.idx ?? String(i + 1).padStart(2, "0")}
            </span>
            <span className="rds-steps4-rule" aria-hidden="true" />
          </div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}

export function Quote({ text, who, org }) {
  return (
    <Section className="rds-band">
      <Container>
        <Reveal as="figure" className="rds-quote">
          <svg className="rds-quote-mark" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path
              d="M13 8c-4 1.6-6.5 4.9-6.5 9.2V24H14v-8h-3.4c.2-2.4 1.5-4.2 3.9-5.2L13 8zm13 0c-4 1.6-6.5 4.9-6.5 9.2V24H27v-8h-3.4c.2-2.4 1.5-4.2 3.9-5.2L26 8z"
              fill="currentColor"
            />
          </svg>
          <blockquote>{text}</blockquote>
          <figcaption>
            <span className="rds-quote-who">{who}</span>
            <span className="rds-quote-org">{org}</span>
          </figcaption>
        </Reveal>
      </Container>
    </Section>
  );
}

export function Marquee({ label, items }) {
  return (
    <Section className="rds-band">
      <Container>
        <p className="rds-eyebrow" style={{ justifyContent: "center", display: "flex", marginBottom: "var(--s6)" }}>
          {label}
        </p>
        <ul className="rds-marquee">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function IdList({ items }) {
  return (
    <ul className="rds-idlist">
      {items.map((i) => (
        <li key={i.label}>
          <strong>{i.label}:</strong> {i.value}
        </li>
      ))}
    </ul>
  );
}

export function NaicsRows({ items }) {
  return (
    <ul className="rds-naicsrow">
      {items.map((n) => (
        <li key={n.code}>
          <span>
            <Chip quiet>{n.code}</Chip>
          </span>
          <div>
            <h3>{n.title}</h3>
            <p>{n.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* A photograph on the brand plate. See .rds-portrait in system.css for the
   three brand cues it composes. `caption`/`role` render over the field. */
export function Portrait({ src, alt, caption, role, priority = false }) {
  return (
    <figure className="rds-portrait">
      {/* The photograph fills this wrapper, not the plate. `fill` writes
          inset/width/height as inline styles, which outrank any stylesheet, so
          the inset that lets the brand field show has to live on a parent. */}
      <span className="rds-portrait-photo">
        <Image src={src} alt={alt} fill sizes="(max-width: 960px) 100vw, 520px" priority={priority} />
      </span>
      <span className="rds-portrait-rule" aria-hidden="true" />
      {caption || role ? (
        <figcaption className="rds-portrait-cap">
          {caption ? <b>{caption}</b> : null}
          {role ? <span>{role}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* Stands in for a portrait that must be a real photograph of a real person. */
export function MonoPlate({ initials, caption }) {
  return (
    <div className="rds-monoplate">
      <span className="rds-monoplate-ini" aria-hidden="true">
        {initials}
      </span>
      {caption ? <span className="rds-meta">{caption}</span> : null}
    </div>
  );
}
