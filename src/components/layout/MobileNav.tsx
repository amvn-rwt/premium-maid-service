"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const DRAWER_OPEN_MS = 420;
const DRAWER_CLOSE_MS = 400;
const DRAWER_BACKDROP_OPEN_MS = 380;
const DRAWER_BACKDROP_CLOSE_MS = 360;
const DRAWER_LINK_CLOSE_MS = 340;
const DRAWER_LINK_CLOSE_STAGGER_MS = 40;
const DRAWER_EASE = "var(--drawer-ease)";

function getDrawerUnmountDelay(navCount: number) {
  const linkExitMs =
    DRAWER_LINK_CLOSE_MS +
    Math.max(navCount - 1, 0) * DRAWER_LINK_CLOSE_STAGGER_MS;

  return Math.max(DRAWER_CLOSE_MS, DRAWER_BACKDROP_CLOSE_MS, linkExitMs);
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const pendingOpenRef = useRef(false);
  const panelId = useId();

  const close = useCallback(() => {
    pendingOpenRef.current = false;
    setOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    pendingOpenRef.current = true;
    setMounted(true);
  }, []);

  const toggleMenu = useCallback(() => {
    if (open) {
      close();
      return;
    }
    openMenu();
  }, [close, open, openMenu]);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  // Mount closed, then promote to open on the next frame so enter can animate.
  useEffect(() => {
    if (!mounted || open || !pendingOpenRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      pendingOpenRef.current = false;
      setOpen(true);
      return;
    }

    let innerFrame = 0;
    const outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => {
        pendingOpenRef.current = false;
        setOpen(true);
      });
    });

    return () => {
      cancelAnimationFrame(outerFrame);
      cancelAnimationFrame(innerFrame);
    };
  }, [mounted, open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
    if (!mounted) return;

    const timer = window.setTimeout(
      () => setMounted(false),
      getDrawerUnmountDelay(siteConfig.nav.length),
    );
    return () => window.clearTimeout(timer);
  }, [open, mounted]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );

  const showDrawer = open || mounted;
  const panelDuration = open ? DRAWER_OPEN_MS : DRAWER_CLOSE_MS;
  const backdropDuration = open ? DRAWER_BACKDROP_OPEN_MS : DRAWER_BACKDROP_CLOSE_MS;
  const navCount = siteConfig.nav.length;

  const drawer =
    showDrawer && portalReady ? (
      <div
        className={cn("fixed inset-0 z-50 lg:hidden", !open && "pointer-events-none")}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-primary/25 backdrop-blur-[2px] motion-safe:transition-opacity motion-reduce:transition-none",
            open ? "opacity-100" : "opacity-0",
          )}
          style={{
            transitionDuration: `${backdropDuration}ms`,
            transitionTimingFunction: DRAWER_EASE,
          }}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={close}
        />

        <nav
          id={panelId}
          className={cn(
            "absolute top-0 right-0 flex h-full w-full max-w-sm flex-col border-l border-border bg-background shadow-xl motion-safe:transition-transform motion-reduce:transition-none",
            open ? "translate-x-0" : "translate-x-full",
          )}
          style={{
            transitionDuration: `${panelDuration}ms`,
            transitionTimingFunction: DRAWER_EASE,
          }}
          aria-label="Mobile"
          aria-modal="true"
          role="dialog"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-4">
            <span className="text-sm font-semibold text-primary">Menu</span>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Close menu"
              onClick={close}
            >
              <CloseIcon />
            </Button>
          </div>

          <ul className="flex-1 overflow-y-auto px-3 py-3">
            {siteConfig.nav.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary motion-safe:transition-[opacity,transform] motion-reduce:transition-none",
                    open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                  )}
                  style={{
                    transitionDuration: open ? "320ms" : `${DRAWER_LINK_CLOSE_MS}ms`,
                    transitionDelay: open
                      ? `${140 + index * 45}ms`
                      : `${(navCount - 1 - index) * DRAWER_LINK_CLOSE_STAGGER_MS}ms`,
                    transitionTimingFunction: DRAWER_EASE,
                  }}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    ) : null;

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <span className="relative size-4">
          <MenuIcon
            className={cn(
              "absolute inset-0 size-4 transition-[opacity,transform] duration-200 motion-reduce:transition-none",
              open
                ? "scale-95 opacity-0 rotate-90"
                : "scale-100 opacity-100 rotate-0",
            )}
            aria-hidden
          />
          <CloseIcon
            className={cn(
              "absolute inset-0 size-4 transition-[opacity,transform] duration-200 motion-reduce:transition-none",
              open
                ? "scale-100 opacity-100 rotate-0"
                : "scale-95 opacity-0 -rotate-90",
            )}
            aria-hidden
          />
        </span>
      </Button>

      {drawer ? createPortal(drawer, document.body) : null}
    </div>
  );
}
