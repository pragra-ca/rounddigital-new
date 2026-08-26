import Head from "next/head";
import { useRouter } from "next/router";
import { buildOrganizationSchema } from "@/content/organization.mjs";


/* BreadcrumbList, derived from the URL path.
 *
 * 22 pages render breadcrumb navigation visually but none declared it as
 * structured data, so the hierarchy search and answer engines could have used
 * was invisible to them. Deriving it here covers every route at once and
 * cannot drift from the URL the way a hand-written list would.
 *
 * Segment labels are title-cased from the slug, with an override map for the
 * ones where that produces the wrong words (naics-psc-codes, rfp, blogs).
 * The home crumb is always first; the current page is always last, which is
 * what Google requires for the trail to be eligible. */
const CRUMB_LABELS = {
  "": "Home",
  rfp: "Submit an RFP",
  blogs: "Insights",
  works: "Case studies",
  "naics-psc-codes": "NAICS & PSC codes",
  "capability-statement": "Capability statement",
  "where-we-can-contract": "Where we can contract",
  "vendor-qualification": "Vendor qualification",
  "past-performance": "Past performance",
  "contract-vehicles": "Contract vehicles",
  "women-owned": "Women-owned business",
  "ai-enablement": "AI enablement",
  "research-data": "Data, research & surveys",
  "it-services": "IT services",
};

function labelFor(segment) {
  if (CRUMB_LABELS[segment]) return CRUMB_LABELS[segment];
  return segment
    .split("-")
    .map((w, i) => (i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function buildBreadcrumbSchema(baseUrl, path, leafLabel) {
  const segments = path.split("/").filter(Boolean);
  // The homepage is its own root; a single-item trail tells an engine nothing.
  if (segments.length === 0) return null;
  const items = [{ name: "Home", url: `${baseUrl}/` }];
  let acc = "";
  segments.forEach((seg, i) => {
    acc += `/${seg}`;
    // Dynamic routes pass the real record title; slug-casing turns
    // "rise-of-autonomous-ai-agents" into "Rise of autonomous ai agents".
    const isLeaf = i === segments.length - 1;
    items.push({
      name: isLeaf && leafLabel ? leafLabel : labelFor(seg),
      url: `${baseUrl}${acc}`,
    });
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

const Seo = ({ 
  title, 
  description, 
  keywords,
  ogImage,
  ogType = "website",
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  noindex = false,
  canonicalUrl,
  jsonLd = [],
  breadcrumbLabel
}) => {
  const router = useRouter();
  const baseUrl = "https://www.round.digital";
  const cleanPath = router.asPath.split("?")[0].split("#")[0];
  // The root canonical keeps its trailing slash so it matches the <loc> the
  // sitemap generator emits for "/". A canonical that disagrees with the
  // sitemap is a self-inflicted duplicate-URL signal.
  const currentUrl = canonicalUrl || `${baseUrl}${cleanPath === "/" ? "/" : cleanPath}`;
  
  // Site-wide keyword floor. Deliberately short: Google has ignored the
  // keywords meta since 2009, and every term here is also a claim we may be
  // asked to substantiate in a bid. No certification names. See spec §2.
  const defaultKeywords = [
    "Round Digital",
    "IT services",
    "AI enablement",
    "AI governance",
    "custom software development",
    "cloud engineering",
    "cybersecurity services",
    "data engineering",
    "survey research",
    "public opinion research",
    "program evaluation",
    "IT staff augmentation",
    "technical training",
    "workforce development",
    "women-owned technology company",
    "small business IT contractor",
    "Mississauga",
    "Ontario",
    "Noida",
  ];

  const keywordsData = keywords 
    ? `${keywords}, ${defaultKeywords.join(", ")}`
    : defaultKeywords.join(", ");

  // "Trusted by leading enterprises worldwide" was the fallback description on
  // every page without its own — an unverifiable superlative shipped in the
  // metadata of a site whose entire premise is verifiability.
  const defaultDescription =
    description ||
    "Round Digital builds the system, staffs it, trains the people who run it, and measures whether it worked. Women-owned technology and workforce services for government, enterprise and nonprofit buyers.";

  // The brand is "Round Digital" — two words — in the legal name, the footer
  // and every line of body copy. The suffix said "RoundDigital".
  const defaultTitle = title || "Round Digital — IT, AI, Research, Staffing and Training";
  const fullTitle = title ? `${title} | Round Digital` : defaultTitle;

  const breadcrumbSchema = buildBreadcrumbSchema(baseUrl, cleanPath, breadcrumbLabel);

  const defaultOgImage = ogImage || `${baseUrl}/og-image.png`;
  const ogImageUrl = ogImage?.startsWith('http') ? ogImage : defaultOgImage;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={keywordsData} />
      <meta name="author" content="RoundDigital" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="RoundDigital" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific tags */}
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
      {/* twitter:creator / twitter:site removed — the handle "@rounddigital"
          appears nowhere else and is unverified. An unowned handle in metadata
          is a claim like any other. Restore only once the account exists. */}
      
      {/* Additional SEO Tags */}
      {/* Brand red, text-safe variant — the value browser chrome and Windows
          tiles paint behind light UI. #e14242 here was the pre-rebuild red and
          was the last colour in the codebase still pointing at the old brand. */}
      <meta name="theme-color" content="#c81e22" />
      <meta name="msapplication-TileColor" content="#c81e22" />
      <meta name="application-name" content="RoundDigital" />
      
      {/* Business/Organization Tags */}
      {/* Was info@rounddigital.co — a different domain from round.digital,
          which is the one used everywhere a human can read it. */}
      <meta name="contact" content="hello@round.digital" />
      <meta name="copyright" content="RoundDigital" />

      {/* Google Site Verification */}
      {/* <meta
        name="google-site-verification"
        content="1-oTgGaARXtqTHAkUDKHoSZBd1yqsHtogEZ2YqqD06E"
      /> */}
      
      {/* Structured Data — Organization, built from the verified-facts module */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildOrganizationSchema({ baseUrl, description: defaultDescription })
          ),
        }}
      />

      {/* BreadcrumbList, derived from the route. Emitted on every page except
          the homepage, where a one-item trail carries no information. */}
      {breadcrumbSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      ) : null}

      {/* Page-specific structured data (FAQPage, Service, Article, …) */}
      {jsonLd.map((schema, i) => (
        <script
          key={`jsonld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default Seo;
