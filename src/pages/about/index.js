import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow, PillLink } from "@/components/sf/ui";

const VALUES = [
  {
    num: "01",
    title: "Ship > talk",
    desc: "Agents in production, not decks in review. Every engagement has a working system milestone inside 6 weeks.",
  },
  {
    num: "02",
    title: "Security first",
    desc: "SOC 2 / ISO 27001-aligned delivery. AI systems inherit enterprise controls — never the other way around.",
  },
  {
    num: "03",
    title: "ROI or nothing",
    desc: "We model the business case before we write code, and we only take projects we believe clear it within 12 months.",
  },
];

const TEAM = [
  {
    name: "Atin Singh",
    role: "Chief Executive Officer",
    image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1727253393/Atin_pp4vjq.jpg",
  },
  {
    name: "Renu Singh",
    role: "HR Head",
    image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1736773360/Renu_Singh.jpg",
  },
  {
    name: "Neha Gaur",
    role: "AI Engineer",
    image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1736773360/Neha_Gaur.jpg",
  },
  {
    name: "Himanshu Kansal",
    role: "Software Engineer",
    image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1736773360/Himanshu_Kansal.jpg",
  },
  {
    name: "Rahul Singh",
    role: "Software Developer",
    image:
      "https://res.cloudinary.com/dm1txojyd/image/upload/v1727255082/passport_size_photo.._idtrmu.jpg",
  },
  {
    name: "Abhinav Roy",
    role: "Software Developer",
    image: "https://res.cloudinary.com/pragra/image/upload/v1744022235/Employees/small.jpg",
  },
  {
    name: "Priyanshu Chakraborty",
    role: "Web Designer",
    image:
      "https://res.cloudinary.com/dm1txojyd/image/upload/v1727255058/Priyanshu_Image_vfkqgf.png",
  },
];

const OFFICES = [
  {
    tag: "HQ · CANADA",
    city: "Mississauga",
    lines: ["160B - 110 Matheson Blvd W", "Mississauga, ON L5M 6B8", "Mon–Fri 9:00–18:00"],
  },
  {
    tag: "US · TEXAS",
    city: "Dallas",
    lines: ["450 Century Pkwy, Ste 250", "Allen, TX 75013", "Mon–Fri 9:00–18:00"],
  },
  {
    tag: "INDIA · MAHARASHTRA",
    city: "Pune",
    lines: [
      "Supreme HQ, 302, Mumbai-Pune Expressway",
      "Baner Annex, Baner, Pune 411045",
      "Mon–Fri 9:00–18:00 IST",
    ],
  },
];

export default function AboutPage() {
  return (
    <SfLayout>
      <Seo
        title="About Us: Senior AI & Software Consultants"
        description="Meet RoundDigital — 20+ senior consultants across Toronto, Dallas and Pune. The engineers you meet on the first call are the ones who build your system. No juniors, no bench."
        keywords="about RoundDigital, AI consulting firm, software consultants, IT consulting team, Mississauga, Toronto, Dallas"
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-5 pb-14 pt-[70px] sm:px-8 lg:px-11"
        style={{ borderBottom: "1px solid var(--sf-border)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[260px] -left-[160px] h-[560px] w-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--sf-hero-glow), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-[1240px]">
          <div className="max-w-[760px]">
            <Eyebrow data-reveal className="mb-4">
              About RoundDigital
            </Eyebrow>
            <h1
              data-reveal
              data-reveal-delay="0.08"
              className="m-0 mb-5 text-[38px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[54px]"
            >
              A senior team that bets its name on shipping.
            </h1>
            <p
              data-reveal
              data-reveal-delay="0.16"
              className="m-0 text-[16px] leading-[1.65]"
              style={{ color: "var(--sf-muted)" }}
            >
              20+ expert consultants across Toronto, Dallas and Pune. No juniors learning on
              your dime, no handoffs to an anonymous bench — the people you meet on the first
              call are the people who build your system.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-14 sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[18px] md:grid-cols-3">
          {VALUES.map((value, i) => (
            <div
              key={value.num}
              data-reveal
              data-reveal-delay={`${i * 0.08}`}
              className="sf-card sf-card-hover rounded-2xl p-7"
            >
              <div className="sf-mono mb-3 text-[15px] font-extrabold" style={{ color: "var(--sf-accent)" }}>
                {value.num}
              </div>
              <div className="sf-sora mb-[10px] text-[19px] font-bold">{value.title}</div>
              <div className="text-[14px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
                {value.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-5 pb-14 sm:px-8 lg:px-11">
        <div className="mx-auto max-w-[1240px]">
          <h2
            data-reveal
            className="m-0 mb-6 text-[26px] font-bold tracking-[-0.02em] sm:text-[32px]"
          >
            The team
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                data-reveal
                data-reveal-delay={`${(i % 4) * 0.06}`}
                className="group flex flex-col gap-[10px]"
              >
                <div
                  className="h-[220px] overflow-hidden rounded-[14px]"
                  style={{ border: "1px solid var(--sf-border)" }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="sf-sora text-[15px] font-bold">{member.name}</div>
                <div className="-mt-[6px] text-[12.5px]" style={{ color: "var(--sf-faint)" }}>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="px-5 pb-14 sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[18px] md:grid-cols-3">
          {OFFICES.map((office, i) => (
            <div
              key={office.city}
              data-reveal
              data-reveal-delay={`${i * 0.08}`}
              className="sf-card sf-card-hover rounded-2xl p-7"
            >
              <div
                className="sf-mono mb-3 text-[11px] font-semibold tracking-[0.12em]"
                style={{ color: "var(--sf-accent)" }}
              >
                {office.tag}
              </div>
              <div className="sf-sora mb-2 text-[20px] font-bold">{office.city}</div>
              <div className="text-[14px] leading-[1.6]" style={{ color: "var(--sf-muted)" }}>
                {office.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-14 sm:px-8 lg:px-11">
        <div
          data-reveal
          className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 overflow-hidden rounded-[22px] px-6 py-11 sm:px-[50px] lg:flex-row"
          style={{
            border: "1px solid var(--sf-accent-border)",
            backgroundImage:
              "radial-gradient(ellipse at 0% 130%, var(--sf-accent-glow), transparent 60%)",
          }}
        >
          <div className="text-center lg:text-left">
            <h2 className="m-0 mb-2 text-[24px] font-bold tracking-[-0.02em] sm:text-[28px]">
              Want to work with us?
            </h2>
            <p className="m-0 text-[14.5px]" style={{ color: "var(--sf-muted)" }}>
              Meet the senior engineers who&apos;ll actually build your system.
            </p>
          </div>
          <PillLink href="/contact" size="lg" className="whitespace-nowrap">
            Book a call
          </PillLink>
        </div>
      </section>
    </SfLayout>
  );
}
