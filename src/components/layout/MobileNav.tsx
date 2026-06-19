"use client";

import { useEffect, useId, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ContactButtons } from "@/components/layout/ContactButtons";
import { siteConfig } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg border border-border bg-background p-2.5 text-primary transition-colors hover:bg-muted-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id={panelId}
            className="absolute top-0 right-0 flex h-full w-full max-w-sm flex-col bg-background shadow-xl"
            aria-label="Mobile"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <span className="text-sm font-semibold text-primary">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 text-primary hover:bg-muted-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto px-4 py-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted-surface hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="border-t border-border p-4">
              <ContactButtons size="md" className="w-full [&_a]:flex-1 [&_a]:justify-center" />
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
