import { FACTS } from "./facts.mjs";

const POSTAL = {
  Mississauga: {
    streetAddress: "160B - 110 Matheson Blvd W",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5M 6B8",
    addressCountry: "CA",
  },
  Noida: {
    addressLocality: "Noida",
    addressRegion: "UP",
    addressCountry: "IN",
  },
};

// Only delivery locations become published postal addresses. A registered
// agent address is not a place of business and must not read as one.
export function buildOrganizationSchema({ baseUrl, description }) {
  const address = FACTS.locations
    .filter((l) => l.status === "delivery")
    .map((l) => ({ "@type": "PostalAddress", ...POSTAL[l.city] }))
    .filter((a) => a.addressLocality);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: FACTS.legalName,
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    description,
    address,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-905-407-5009",
      contactType: "Customer Service",
      email: "info@rounddigital.co",
      areaServed: ["CA", "US", "IN"],
      availableLanguage: "English",
    },
    sameAs: ["https://www.linkedin.com/company/rounddigital/"],
    foundingDate: "2017",
    numberOfEmployees: { "@type": "QuantitativeValue", value: FACTS.employeeCount },
    knowsAbout: [
      "Artificial Intelligence Enablement",
      "AI Governance",
      "Custom Software Engineering",
      "Cloud Engineering",
      "Cybersecurity",
      "Data Engineering",
      "Survey Research and Public Opinion Polling",
      "Program Evaluation",
      "IT Staff Augmentation",
      "Technical Training and Workforce Development",
    ],
  };
}
