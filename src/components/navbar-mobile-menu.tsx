"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { buttonVariants } from "@/components/ui/button";
import { getPrimaryTelHref, getPrimaryWhatsAppHref } from "@/lib/contact";
import { mobileNavContent } from "@/lib/content/mobile-nav";
import { navLinks } from "@/lib/content/nav";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function NavbarMobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {
    menuAriaLabel,
    callLabel,
    whatsappLabel,
    enquireLabel,
    enquireHref,
    callAriaLabel,
    whatsappAriaLabel,
  } = mobileNavContent;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const menuPanel =
    open && mounted ? (
      <>
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 top-16 z-[60] bg-foreground/20 backdrop-blur-[2px] lg:hidden"
          onClick={closeMenu}
        />

        <nav
          id="mobile-nav-menu"
          aria-label={menuAriaLabel}
          className="fixed inset-x-0 top-16 bottom-0 z-[70] flex flex-col overflow-y-auto border-b border-border bg-background shadow-lg lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-5 sm:px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted active:bg-muted"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 border-t border-border/70 pt-6">
              <PillCtaButton
                href={enquireHref}
                className="w-full max-w-none justify-between"
                onClick={closeMenu}
              >
                {enquireLabel}
              </PillCtaButton>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={getPrimaryTelHref()}
                  aria-label={callAriaLabel}
                  onClick={closeMenu}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Phone
                    className="size-4 shrink-0"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                  {callLabel}
                </a>
                <a
                  href={getPrimaryWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={whatsappAriaLabel}
                  onClick={closeMenu}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/10 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
                >
                  <WhatsAppIcon className="size-4 shrink-0" aria-hidden />
                  {whatsappLabel}
                </a>
              </div>
            </div>

            <p className="mt-auto pt-8 text-center text-xs text-muted-foreground">
              Serving {siteConfig.serviceArea}
            </p>
          </div>
        </nav>
      </>
    ) : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        className={cn(
          buttonVariants({ size: "icon-lg" }),
          "border-transparent bg-foreground text-background hover:bg-foreground/90",
        )}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X className="size-4" aria-hidden strokeWidth={2.25} />
        ) : (
          <Menu className="size-4" aria-hidden strokeWidth={2.25} />
        )}
      </button>

      {menuPanel ? createPortal(menuPanel, document.body) : null}
    </div>
  );
}
