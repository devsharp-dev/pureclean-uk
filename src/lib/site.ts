// Configuration for site URL and metadata
// Use process.env.NEXT_PUBLIC_SITE_URL in production, falling back to the default deployment URL

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://london-homecare.vercel.app"
).replace(/\/$/, "");

export const siteConfig = {
  name: "London Homecare",
  legalName: "London Homecare Ltd",
  companyNumber: "12948201",
  vatNumber: "GB 384 1029 88",
  url: siteUrl,
  description:
    "Professional home cleaning services in London including regular home cleaning, deep cleaning and end of tenancy cleaning.",
  telephone: "+44 20 7946 0912",
  telephoneDisplay: "020 7946 0912",
  email: "enquiries@londonhomecare.co.uk",
  address: {
    streetAddress: "71-75 Shelton Street, Covent Garden",
    addressLocality: "London",
    postalCode: "WC2H 9JQ",
    addressCountry: "GB",
  },
  openingHours: "Mon–Fri: 08:00 – 18:00 GMT, Sat: 09:00 – 16:00 GMT",
  // Sample service coverage areas (clearly structured so they can be updated for real coverage)
  areasServed: [
    "Central London",
    "Kensington & Chelsea",
    "Richmond upon Thames",
    "Wimbledon",
    "Islington",
    "Camden",
    "Canary Wharf",
    "Surrey",
    "Hertfordshire",
    "St Albans",
  ],
  services: [
    {
      name: "Regular Home Cleaning",
      slug: "regular",
      description:
        "Consistent weekly or fortnightly domestic cleaning tailored to your home and schedule.",
    },
    {
      name: "Deep Cleaning",
      slug: "deep",
      description:
        "Intensive top-to-bottom scrub, lime scale elimination, and restorative hygiene.",
    },
    {
      name: "End of Tenancy Cleaning",
      slug: "tenancy",
      description:
        "Guaranteed checkout clean meeting strict UK letting agent inventory standards with 72-hour re-clean guarantee.",
    },
  ],
};
