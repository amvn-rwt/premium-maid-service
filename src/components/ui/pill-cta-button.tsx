import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const pillCtaButtonVariants = cva(
  "group cursor-pointer rounded-full bg-foreground font-medium text-background hover:bg-foreground/90",
  {
    variants: {
      size: {
        default: "h-12 pl-6 pr-1.5 text-base",
        sm: "h-9 pl-4 pr-1 text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const pillCtaIconVariants = cva(
  "flex shrink-0 items-center justify-center rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-[1.04]",
  {
    variants: {
      size: {
        default: "size-9",
        sm: "size-7",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const pillCtaArrowVariants = cva(
  "text-primary-foreground motion-safe:animate-pill-cta-icon motion-safe:group-hover:[animation-duration:3.25s]",
  {
    variants: {
      size: {
        default: "size-4",
        sm: "size-3.5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type PillCtaButtonProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof pillCtaButtonVariants>;

function PillCtaButton({
  children = "Get Started Now",
  className,
  size = "default",
  ...props
}: PillCtaButtonProps) {
  return (
    <Button
      className={cn(pillCtaButtonVariants({ size }), className)}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden className={pillCtaIconVariants({ size })}>
        <ArrowUpRight
          className={pillCtaArrowVariants({ size })}
          strokeWidth={2.25}
        />
      </span>
    </Button>
  );
}

export { PillCtaButton };
