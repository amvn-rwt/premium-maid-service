"use client";

import { siteConfig } from "@/lib/site";

export function FooterCopyright() {
  return (
    <p>
      © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
    </p>
  );
}
