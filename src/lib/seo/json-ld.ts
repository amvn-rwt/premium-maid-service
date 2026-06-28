import { servicesContent } from "@/lib/content/services";
import { siteConfig, getPrimaryPhone } from "@/lib/site";

const { url, name, seo, serviceArea, contact, phones } = siteConfig;

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildJsonLd() {
  const primaryPhone = getPrimaryPhone();

  const openingHoursSpecification = [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ];

  const serviceEntities = servicesContent.items.map((service) => ({
    "@type": "Service" as const,
    "@id": `${url}/#service-${service.id}`,
    name: service.name,
    provider: { "@id": `${url}/#business` },
    areaServed: {
      "@type": "AdministrativeArea" as const,
      name: serviceArea,
    },
    url: `${url}/#services`,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: `${url}/`,
        name,
        description: seo.description,
        inLanguage: siteConfig.language,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${url}/#business`,
        name,
        url: `${url}/`,
        description: seo.description,
        telephone: phones.map((phone) => phone.tel),
        email: contact.enquiryEmail,
        image: absoluteUrl(seo.ogImage),
        areaServed: {
          "@type": "AdministrativeArea",
          name: serviceArea,
        },
        openingHoursSpecification,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: primaryPhone.tel,
            contactType: "customer service",
            areaServed: serviceArea,
            availableLanguage: ["English"],
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Domestic help services",
          itemListElement: serviceEntities.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: { "@id": service["@id"] },
          })),
        },
      },
      ...serviceEntities,
    ],
  };
}
