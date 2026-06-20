import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type PillCtaButtonProps = React.ComponentProps<typeof Button>;

function PillCtaButton({
  children = "Get Started Now",
  className,
  ...props
}: PillCtaButtonProps) {
  return (
    <Button
      className={cn(
        "group h-12 cursor-pointer rounded-full bg-foreground pl-6 pr-1.5 text-base font-medium text-background hover:bg-foreground/90",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-[1.04]"
      >
        <ArrowUpRight
          className="size-4 text-primary-foreground motion-safe:animate-pill-cta-icon motion-safe:group-hover:[animation-duration:3.25s]"
          strokeWidth={2.25}
        />
      </span>
    </Button>
  );
}

export { PillCtaButton };
