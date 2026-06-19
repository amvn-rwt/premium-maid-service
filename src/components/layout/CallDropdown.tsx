"use client";

import { CallIcon, ChevronDown } from "@/components/icons";
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
  iconOnly?: boolean;
};

export function CallDropdown({
  className = "",
  iconOnly = false,
}: CallDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Choose a number to call"
        className={cn(
          buttonVariants({
            variant: "pill",
            size: iconOnly ? "icon-lg" : "lg",
          }),
          "cursor-pointer",
          className,
        )}
      >
        <CallIcon className="size-3.5 shrink-0" aria-hidden />
        {!iconOnly ? (
          <>
            Call
            <ChevronDown className="size-3.5 opacity-70" aria-hidden />
          </>
        ) : null}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select a number</DropdownMenuLabel>
          {siteConfig.phones.map((phone) => (
            <DropdownMenuItem
              key={phone.tel}
              className="cursor-pointer py-2"
              onClick={() => {
                window.location.href = telHref(phone.tel);
              }}
            >
              <span className="flex flex-col gap-0.5">
                <span className="text-xs text-muted-foreground">{phone.label}</span>
                <span className="font-medium">{phone.display}</span>
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
