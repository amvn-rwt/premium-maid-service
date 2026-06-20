"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { navLinks } from "@/lib/content/nav";
import { durationForDistance } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PillRect = {
  left: number;
  width: number;
  duration: number;
};

export function NavbarLinks() {
  const listRef = useRef<HTMLUListElement>(null);
  const previousLeftRef = useRef(0);
  const [pill, setPill] = useState<PillRect | null>(null);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  function movePill(target: HTMLElement, href: string) {
    const list = listRef.current;
    if (!list) return;

    const listRect = list.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const left = targetRect.left - listRect.left;
    const width = targetRect.width;
    const distance = Math.abs(left - previousLeftRef.current);

    previousLeftRef.current = left;

    setPill({
      left,
      width,
      duration: durationForDistance(distance, { min: 180, max: 320 }),
    });
    setHoveredHref(href);
  }

  function hidePill() {
    setPill(null);
    setHoveredHref(null);
  }

  return (
    <ul
      ref={listRef}
      className="relative hidden items-center lg:flex"
      onMouseLeave={hidePill}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-1/2 left-0 h-8 -translate-y-1/2 rounded-full bg-primary",
          "motion-safe:transition-[left,width] motion-safe:ease-move",
          "motion-safe:transition-opacity motion-safe:duration-150",
          pill ? "opacity-100" : "opacity-0",
        )}
        style={{
          width: pill?.width ?? 0,
          left: pill?.left ?? 0,
          transitionDuration: pill
            ? `${pill.duration}ms, 150ms`
            : undefined,
        }}
      />

      {navLinks.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className={cn(
              "relative z-10 block rounded-full px-3.5 py-1.5 text-sm font-medium",
              "transition-colors duration-200",
              "motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-enter motion-safe:active:scale-[0.97]",
              hoveredHref === href
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            onMouseEnter={(event) => movePill(event.currentTarget, href)}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
