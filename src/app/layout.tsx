import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Maids, Cooks & Babysitters in ${siteConfig.serviceArea}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
