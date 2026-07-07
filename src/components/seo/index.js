import Head from "next/head";
import { useRouter } from "next/router";

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
  jsonLd = []
}) => {
  const router = useRouter();
  const baseUrl = "https://www.round.digital";
  const cleanPath = router.asPath.split("?")[0].split("#")[0];
  const currentUrl = canonicalUrl || `${baseUrl}${cleanPath === "/" ? "" : cleanPath}`;
  
  // Comprehensive default keywords based on site content
  const defaultKeywords = [
    "RoundDigital",
    "IT services",
    "AI development",
    "artificial intelligence",
    "machine learning",
    "AI agent development",
    "AI product integration",
    "cybersecurity",
    "enterprise security",
    "cloud solutions",
    "AWS",
    "Azure",
    "Google Cloud",
    "cloud migration",
    "custom software development",
    "enterprise software",
    "web development",
    "mobile app development",
    "legacy modernization",
    "API development",
    "digital transformation",
    "data analytics",
    "business intelligence",
    "DevOps",
    "cloud-native development",
    "global talent solutions",
    "staff augmentation",
    "remote teams",
    "engagement models",
    "IT consulting",
    "enterprise solutions",
    "software consulting",
    "Canada tech",
    "Toronto IT services",
    "Mississauga technology",
    "enterprise IT solutions",
    "technology consulting",
    "software engineering",
    "application development",
    "system integration",
    "compliance",
    "SOC 2",
    "ISO 27001",
    "GDPR compliance",
    "HIPAA compliance"
  ];

  const keywordsData = keywords 
    ? `${keywords}, ${defaultKeywords.join(", ")}`
    : defaultKeywords.join(", ");

  const defaultDescription = 
    description ||
    "RoundDigital provides comprehensive IT solutions including AI development, cybersecurity, cloud services, custom software development, and digital transformation. Trusted by leading enterprises worldwide.";

  const defaultTitle = title || "RoundDigital | Enterprise IT Solutions, AI Development & Cybersecurity";
  const fullTitle = title ? `${title} | RoundDigital` : defaultTitle;

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
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
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
      <meta name="twitter:creator" content="@rounddigital" />
      <meta name="twitter:site" content="@rounddigital" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#e14242" />
      <meta name="msapplication-TileColor" content="#e14242" />
      <meta name="application-name" content="RoundDigital" />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Mississauga, Ontario" />
      <meta name="geo.position" content="43.5890;-79.6441" />
      <meta name="ICBM" content="43.5890, -79.6441" />
      
      {/* Business/Organization Tags */}
      <meta name="contact" content="info@rounddigital.co" />
      <meta name="copyright" content="RoundDigital" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Google Site Verification */}
      {/* <meta
        name="google-site-verification"
        content="1-oTgGaARXtqTHAkUDKHoSZBd1yqsHtogEZ2YqqD06E"
      /> */}
      
      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RoundDigital",
            "url": baseUrl,
            "logo": `${baseUrl}/favicon.svg`,
            "description": defaultDescription,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "160B - 110 Matheson Blvd W",
              "addressLocality": "Mississauga",
              "addressRegion": "ON",
              "postalCode": "L5M 6B8",
              "addressCountry": "CA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-905-407-5009",
              "contactType": "Customer Service",
              "email": "info@rounddigital.co",
              "areaServed": "Worldwide",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.linkedin.com/company/rounddigital/",
              "https://twitter.com/rounddigital",
              "https://facebook.com/rounddigital"
            ],
            "foundingDate": "2015",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "20+"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "Cybersecurity",
              "Cloud Computing",
              "Software Development",
              "Digital Transformation",
              "Data Analytics"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "6+",
              "itemOffered": [
                {
                  "@type": "Service",
                  "name": "AI Agent Development",
                  "description": "Custom intelligent agents for workflow automation"
                },
                {
                  "@type": "Service",
                  "name": "Cybersecurity Services",
                  "description": "Enterprise security and compliance solutions"
                },
                {
                  "@type": "Service",
                  "name": "Cloud Solutions",
                  "description": "Cloud migration and infrastructure services"
                },
                {
                  "@type": "Service",
                  "name": "Custom Software Development",
                  "description": "Enterprise-grade software solutions"
                },
                {
                  "@type": "Service",
                  "name": "Digital Transformation",
                  "description": "Strategic consulting and implementation"
                },
                {
                  "@type": "Service",
                  "name": "Data Analytics",
                  "description": "Business intelligence and analytics solutions"
                }
              ]
            }
          })
        }}
      />

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
