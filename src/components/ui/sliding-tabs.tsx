"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type SlidingTabItem<T extends string> = {
  value: T;
  label: string;
};

type SlidingTabsProps<T extends string> = {
  items: readonly SlidingTabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  "aria-label"?: string;
};

function SlidingTabs<T extends string>({
  items,
  value,
  onChange,
  className,
  "aria-label": ariaLabel = "Tabs",
}: SlidingTabsProps<T>) {
  const tablistId = useId();
  const scrollRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(new Map<T, HTMLButtonElement>());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const list = listRef.current;
    const activeTab = tabRefs.current.get(value);
    if (!list || !activeTab) {
      setIndicator({ left: 0, width: 0 });
      return;
    }

    setIndicator({
      left: activeTab.offsetLeft,
      width: activeTab.offsetWidth,
    });
  }, [value]);

  const registerTabRef = useCallback(
    (itemValue: T, node: HTMLButtonElement | null) => {
      if (node) {
        tabRefs.current.set(itemValue, node);
        if (itemValue === value) {
          requestAnimationFrame(updateIndicator);
        }
        return;
      }

      tabRefs.current.delete(itemValue);
    },
    [updateIndicator, value],
  );

  useLayoutEffect(() => {
    updateIndicator();
    const frame = requestAnimationFrame(updateIndicator);
    return () => cancelAnimationFrame(frame);
  }, [updateIndicator]);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const list = listRef.current;
    if (!scrollEl || !list) return;

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(list);
    tabRefs.current.forEach((tab) => resizeObserver.observe(tab));

    scrollEl.addEventListener("scroll", updateIndicator, { passive: true });
    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      scrollEl.removeEventListener("scroll", updateIndicator);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator, items]);

  useEffect(() => {
    const activeTab = tabRefs.current.get(value);
    const scrollEl = scrollRef.current;
    if (!activeTab || !scrollEl) return;

    activeTab.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    updateIndicator();
    const frame = requestAnimationFrame(updateIndicator);
    const timeout = window.setTimeout(updateIndicator, 320);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [value, updateIndicator]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % items.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + items.length) % items.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = items.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    const nextItem = items[nextIndex];
    onChange(nextItem.value);
    tabRefs.current.get(nextItem.value)?.focus();
  };

  return (
    <div className={cn("min-w-0", className)}>
      <div
        ref={scrollRef}
        className="overflow-x-auto [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        <div
          ref={listRef}
          role="tablist"
          aria-label={ariaLabel}
          className="relative inline-flex max-w-full gap-5 sm:gap-6"
        >
          {items.map((item, index) => {
            const isActive = item.value === value;

            return (
              <button
                key={item.value}
                ref={(node) => registerTabRef(item.value, node)}
                type="button"
                role="tab"
                id={`${tablistId}-${item.value}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onChange(item.value)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={cn(
                  "relative z-10 shrink-0 cursor-pointer pb-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 outline-none",
                  "focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            );
          })}

          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-border/70"
          />

          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute bottom-0 left-0 z-10 h-0.5 rounded-full bg-primary transition-[left,width,opacity] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none",
              indicator.width === 0 && "opacity-0",
            )}
            style={{
              width: indicator.width,
              left: indicator.left,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export { SlidingTabs, type SlidingTabItem };
