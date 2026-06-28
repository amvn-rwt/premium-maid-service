import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

const { url, name, seo, serviceArea } = siteConfig;

export function buildSiteMetadata(): Metadata {
  const ogImageUrl = `${url}${seo.ogImage}`;

  return {
    metadataBase: new URL(url),
    title: {
      default: seo.title,
      template: `%s | ${name}`,
    },
    description: seo.description,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${url}/`,
      siteName: name,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `Premium maid and domestic help services in ${serviceArea}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
    },
  };
}
