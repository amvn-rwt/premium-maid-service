"use client";

import { PhoneCall } from "lucide-react";

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
          buttonVariants({ variant: "outline", size: "icon-lg" }),
          "border-border/70 hover:border-primary/25 hover:bg-primary/5",
          className,
        )}
      >
        <PhoneCall className="size-4 shrink-0" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2.5 py-1 text-xs font-medium text-muted-foreground">
            Select a number
          </DropdownMenuLabel>
          {siteConfig.phones.map((phone) => (
            <DropdownMenuItem
              key={phone.tel}
              className="cursor-pointer rounded-xl px-2.5 py-2.5 focus:bg-primary/10"
              onSelect={() => {
                window.location.href = telHref(phone.tel);
              }}
            >
              <span className="flex w-full items-center gap-3">
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                >
                  <PhoneCall className="size-3.5" strokeWidth={2.25} />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      phone.label === "Primary"
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {phone.label}
                  </span>
                  <span className="font-semibold tracking-tight text-foreground">
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
