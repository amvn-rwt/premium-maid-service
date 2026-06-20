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

const PANEL_CLOSE_MS = 300;

export function NavbarMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [show, setShow] = useState(false);
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
    if (isOpen) {
      setIsPresent(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setShow(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setShow(false);
    const timeout = window.setTimeout(
      () => setIsPresent(false),
      PANEL_CLOSE_MS,
    );
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!isPresent) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isPresent]);

  const closeMenu = () => setIsOpen(false);

  const menuPanel =
    isPresent && mounted ? (
      <>
        <button
          type="button"
          aria-label="Close menu"
          className={cn(
            "fixed inset-0 top-16 z-60 bg-foreground/20 backdrop-blur-[2px] lg:hidden",
            "motion-safe:transition-opacity motion-reduce:transition-none",
            show
              ? "opacity-100 duration-(--nav-overlay-open-dur) ease-enter"
              : "opacity-0 duration-(--nav-overlay-close-dur) ease-enter",
          )}
          onClick={closeMenu}
        />

        <nav
          id="mobile-nav-menu"
          aria-label={menuAriaLabel}
          aria-hidden={!show}
          className={cn(
            "fixed inset-x-0 top-16 bottom-0 z-70 flex flex-col overflow-y-auto border-b border-border bg-background shadow-lg lg:hidden",
            "origin-top motion-safe:transition-[transform,opacity] motion-reduce:transition-none",
            show
              ? "translate-y-0 opacity-100 duration-(--nav-panel-open-dur) ease-drawer"
              : "-translate-y-3 opacity-0 duration-(--nav-panel-close-dur) ease-move",
          )}
        >
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-5 sm:px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ label, href }, index) => (
                <li
                  key={href}
                  className={cn(
                    "motion-safe:transition-[transform,opacity] motion-reduce:transition-none",
                    show
                      ? "translate-y-0 opacity-100 duration-300 ease-enter"
                      : "translate-y-2 opacity-0 duration-150 ease-enter",
                  )}
                  style={{
                    transitionDelay: show ? `${80 + index * 45}ms` : "0ms",
                  }}
                >
                  <Link
                    href={href}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-base font-medium text-foreground",
                      "transition-colors duration-200 hover:bg-muted",
                      "motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-enter motion-safe:active:scale-[0.98] motion-safe:active:bg-muted",
                    )}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={cn(
                "mt-8 space-y-3 border-t border-border/70 pt-6",
                "motion-safe:transition-[transform,opacity] motion-reduce:transition-none",
                show
                  ? "translate-y-0 opacity-100 duration-300 ease-enter"
                  : "translate-y-2 opacity-0 duration-150 ease-enter",
              )}
              style={{
                transitionDelay: show
                  ? `${80 + navLinks.length * 45 + 40}ms`
                  : "0ms",
              }}
            >
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
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background text-sm font-medium text-foreground",
                    "transition-colors duration-200 hover:bg-muted",
                    "motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-enter motion-safe:active:scale-[0.97]",
                  )}
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
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/10 text-sm font-medium text-primary",
                    "transition-colors duration-200 hover:bg-primary/15",
                    "motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-enter motion-safe:active:scale-[0.97]",
                  )}
                >
                  <WhatsAppIcon className="size-4 shrink-0" aria-hidden />
                  {whatsappLabel}
                </a>
              </div>
            </div>

            <p
              className={cn(
                "mt-auto pt-8 text-center text-xs text-muted-foreground",
                "motion-safe:transition-opacity motion-reduce:transition-none",
                show
                  ? "opacity-100 duration-300 ease-enter"
                  : "opacity-0 duration-150 ease-enter",
              )}
              style={{
                transitionDelay: show
                  ? `${80 + navLinks.length * 45 + 100}ms`
                  : "0ms",
              }}
            >
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
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        className={cn(
          buttonVariants({ size: "icon-lg" }),
          "border-transparent bg-foreground text-background hover:bg-foreground/90",
          "motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-enter motion-safe:active:scale-[0.97]",
        )}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="relative grid size-4 place-items-center" aria-hidden>
          <Menu
            className={cn(
              "col-start-1 row-start-1 size-4 transition-[opacity,transform,filter] duration-200 ease-enter motion-reduce:transition-none",
              isOpen
                ? "scale-75 opacity-0 blur-[2px]"
                : "scale-100 opacity-100 blur-0",
            )}
            strokeWidth={2.25}
          />
          <X
            className={cn(
              "col-start-1 row-start-1 size-4 transition-[opacity,transform,filter] duration-200 ease-enter motion-reduce:transition-none",
              isOpen
                ? "scale-100 opacity-100 blur-0"
                : "scale-75 opacity-0 blur-[2px]",
            )}
            strokeWidth={2.25}
          />
        </span>
      </button>

      {menuPanel ? createPortal(menuPanel, document.body) : null}
    </div>
  );
}
