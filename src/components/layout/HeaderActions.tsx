import Link from "next/link";
import { CallDropdown } from "@/components/layout/CallDropdown";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { buttonVariants } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { cn } from "@/lib/utils";

type HeaderActionsProps = {
  className?: string;
};

export function HeaderActions({ className = "" }: HeaderActionsProps) {
  const { primaryCta } = heroContent;

  return (
    <div className={cn("flex shrink-0 items-center gap-1.5", className)}>
      <CallDropdown />
      <WhatsAppButton />
      <Link
        href={primaryCta.href}
        className={buttonVariants({ variant: "default", size: "lg" })}
      >
        {primaryCta.label}
      </Link>
    </div>
  );
}
