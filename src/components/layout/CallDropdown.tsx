"use client";

import { CallIcon } from "@/components/icons";
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

export function CallDropdown({ className = "" }: CallDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Choose a number to call"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-lg" }),
          "cursor-pointer",
          className,
        )}
      >
        <CallIcon className="size-4 shrink-0" aria-hidden />
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
