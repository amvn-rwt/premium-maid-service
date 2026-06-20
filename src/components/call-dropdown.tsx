"use client";

import { Smartphone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { telHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type CallDropdownProps = {
  className?: string;
};

export function CallDropdown({ className }: CallDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Choose a number to call"
        className={cn(
          buttonVariants({ size: "icon-lg" }),
          "border-transparent bg-foreground text-primary-foreground hover:bg-foreground/90",
          className,
        )}
      >
        <Smartphone className="size-4 shrink-0" aria-hidden strokeWidth={2} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="min-w-56 border-white/10 bg-foreground p-2 text-background shadow-xl ring-white/10"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2.5 py-1 text-xs font-medium text-background/55">
            Select a number
          </DropdownMenuLabel>
          {siteConfig.phones.map((phone) => (
            <DropdownMenuItem
              key={phone.tel}
              className="cursor-pointer rounded-xl px-2.5 py-2.5 focus:bg-white/10 focus:text-background"
              onSelect={() => {
                window.location.href = telHref(phone.tel);
              }}
            >
              <span className="flex w-full items-center gap-3">
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background/15 text-background"
                >
                  <Smartphone className="size-3.5 text-background" strokeWidth={2} />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      phone.label === "Primary"
                        ? "text-primary"
                        : "text-background/55",
                    )}
                  >
                    {phone.label}
                  </span>
                  <span className="font-semibold tracking-tight text-background">
                    {phone.display}
                  </span>
                </span>
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
