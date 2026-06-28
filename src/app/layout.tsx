import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { buildJsonLd } from "@/lib/seo/json-ld";
import { buildSiteMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = buildSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
