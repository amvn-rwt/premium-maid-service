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
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(new Map<T, HTMLButtonElement>());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const list = listRef.current;
    const activeTab = tabRefs.current.get(value);
    if (!list || !activeTab) return;

    setIndicator({
      left: activeTab.offsetLeft,
      width: activeTab.offsetWidth,
    });
  }, [value]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, items]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(list);
    tabRefs.current.forEach((tab) => resizeObserver.observe(tab));

    window.addEventListener("resize", updateIndicator);
    list.addEventListener("scroll", updateIndicator, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
      list.removeEventListener("scroll", updateIndicator);
    };
  }, [updateIndicator, items]);

  useEffect(() => {
    const activeTab = tabRefs.current.get(value);
    activeTab?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
    updateIndicator();
  }, [value, updateIndicator]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
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
        ref={listRef}
        role="tablist"
        aria-label={ariaLabel}
        className="relative flex gap-5 overflow-x-auto border-b border-border/70 [-ms-overflow-style:none] scrollbar-none sm:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const isActive = item.value === value;

          return (
            <button
              key={item.value}
              ref={(node) => {
                if (node) tabRefs.current.set(item.value, node);
                else tabRefs.current.delete(item.value);
              }}
              type="button"
              role="tab"
              id={`${tablistId}-${item.value}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(item.value)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "relative shrink-0 cursor-pointer pb-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 outline-none",
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
          className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-[transform,width] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none"
          style={{
            width: indicator.width,
            transform: `translateX(${indicator.left}px)`,
          }}
        />
      </div>
    </div>
  );
}

export { SlidingTabs, type SlidingTabItem };
