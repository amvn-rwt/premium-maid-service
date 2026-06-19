"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const MOVE_MS = 280;
const MOVE_EASE = "cubic-bezier(0.25, 1, 0.5, 1)";

function nearestIndex(
  items: (HTMLAnchorElement | null)[],
  clientX: number,
) {
  let nearest = 0;
  let minDist = Infinity;

  items.forEach((el, index) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const dist = Math.abs(clientX - center);
    if (dist < minDist) {
      minDist = dist;
      nearest = index;
    }
  });

  return nearest;
}

export function DesktopNav() {
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const isHoveringRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pill, setPill] = useState({ x: 0, w: 0 });
  const [pillInstant, setPillInstant] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const measure = useCallback((index: number) => {
    const el = itemRefs.current[index];
    const nav = navRef.current;
    if (!el || !nav) return null;

    const navRect = nav.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    return {
      x: rect.left - navRect.left,
      w: rect.width,
    };
  }, []);

  const goTo = useCallback(
    (index: number, instant = false) => {
      const rect = measure(index);
      if (!rect) return;

      activeIndexRef.current = index;
      setActiveIndex(index);
      setPill(rect);
      setPillInstant(instant || reducedMotion);
    },
    [measure, reducedMotion],
  );

  const engage = useCallback(
    (index: number, instant: boolean) => {
      isHoveringRef.current = true;
      setIsHovering(true);
      goTo(index, instant);
    },
    [goTo],
  );

  const onNavEnter = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      engage(nearestIndex(itemRefs.current, event.clientX), true);
    },
    [engage],
  );

  const onNavMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        goTo(nearestIndex(itemRefs.current, event.clientX), false);
      });
    },
    [goTo],
  );

  const onNavLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    isHoveringRef.current = false;
    setIsHovering(false);
  }, []);

  const onLinkEnter = useCallback(
    (index: number) => {
      engage(index, !isHoveringRef.current);
    },
    [engage],
  );

  const onLinkFocus = useCallback(
    (index: number) => {
      engage(index, true);
    },
    [engage],
  );

  const onNavBlur = useCallback((event: React.FocusEvent<HTMLElement>) => {
    if (navRef.current?.contains(event.relatedTarget as Node)) return;
    isHoveringRef.current = false;
    setIsHovering(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const remeasure = () => {
      if (!isHoveringRef.current) return;
      goTo(activeIndexRef.current, true);
    };

    const observer = new ResizeObserver(remeasure);
    observer.observe(nav);

    window.addEventListener("resize", remeasure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", remeasure);
    };
  }, [goTo]);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return (
    <nav
      ref={navRef}
      className="relative hidden items-center rounded-full border border-border/70 bg-muted/45 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] lg:flex"
      aria-label="Main"
      onMouseEnter={onNavEnter}
      onMouseMove={onNavMove}
      onMouseLeave={onNavLeave}
      onBlur={onNavBlur}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-1 bottom-1 left-0 rounded-full bg-background shadow-sm ring-1 ring-border/60",
          "motion-safe:transition-[transform,width,opacity] motion-reduce:transition-none",
          isHovering ? "opacity-100" : "opacity-0",
        )}
        style={{
          width: pill.w,
          transform: `translateX(${pill.x}px)`,
          transitionDuration: pillInstant ? "0ms" : `${MOVE_MS}ms`,
          transitionTimingFunction: MOVE_EASE,
        }}
      />

      {siteConfig.nav.map((item, index) => (
        <a
          key={item.href}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          href={item.href}
          onMouseEnter={() => onLinkEnter(index)}
          onFocus={() => onLinkFocus(index)}
          className={cn(
            "relative z-10 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
            isHovering && activeIndex === index
              ? "text-primary"
              : "text-muted-foreground",
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
