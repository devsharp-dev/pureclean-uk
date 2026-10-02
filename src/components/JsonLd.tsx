import { siteConfig } from "@/lib/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: siteConfig.areasServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "London Homecare Cleaning Services",
      itemListElement: siteConfig.services.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.name,
          description: svc.description,
          provider: {
            "@type": "LocalBusiness",
            name: siteConfig.name,
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
