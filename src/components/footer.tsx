import Link from "next/link";

import { FooterCopyright } from "@/components/footer-copyright";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Logo } from "@/components/logo";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { buttonVariants } from "@/components/ui/button";
import { getPrimaryWhatsAppHref, telHref } from "@/lib/contact";
import {
  footerContent,
  footerNavLinks,
  footerServiceLinks,
} from "@/lib/content/footer";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type FooterLinkColumnProps = {
  heading: string;
  links: readonly { label: string; href: string }[];
  "aria-label"?: string;
};

function FooterLinkColumn({
  heading,
  links,
  "aria-label": ariaLabel,
}: FooterLinkColumnProps) {
  return (
    <nav aria-label={ariaLabel ?? heading}>
      <h3 className="text-sm font-semibold text-background">{heading}</h3>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-background/70 transition-colors hover:text-background"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const {
    cta,
    linksHeading,
    servicesHeading,
    contactHeading,
    hoursLabel,
    emailLabel,
    servingLabel,
    descriptionLines,
  } = footerContent;

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            {cta.tagline}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-background/70 text-pretty sm:text-base">
            {cta.supporting}
          </p>
          <div className="mt-8 flex w-full flex-nowrap items-center justify-center gap-2 px-4 sm:gap-3 sm:px-0">
            <PillCtaButton
              href={cta.primaryHref}
              size="sm"
              className="shrink-0 bg-background text-foreground hover:bg-background/90 sm:h-12 sm:pl-6 sm:pr-1.5 sm:text-base [&_span:last-child]:sm:size-9 [&_svg]:sm:size-4"
            >
              {cta.primaryLabel}
            </PillCtaButton>
            <a
              href={getPrimaryWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "inline-flex h-9 shrink-0 items-center gap-2 rounded-full border-background/25 bg-transparent px-4 text-sm font-medium text-background hover:bg-background/10 hover:text-background sm:h-12 sm:px-6 sm:text-base",
              )}
            >
              <WhatsAppIcon className="size-3.5 shrink-0 sm:size-4" aria-hidden />
              {cta.whatsappLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-x-14">
          <div className="max-w-md">
            <Logo onDark className="inline-flex" />
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              {descriptionLines[0]}
              <br />
              {descriptionLines[1]}
            </p>
            <p className="mt-3 text-sm font-medium text-background">
              {servingLabel}
            </p>
          </div>

          <div className="grid w-full min-w-0 grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-y-8">
            <FooterLinkColumn
              heading={linksHeading}
              links={footerNavLinks}
              aria-label="Footer navigation"
            />

            <FooterLinkColumn
              heading={servicesHeading}
              links={footerServiceLinks}
              aria-label="Footer services"
            />

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-background">
                {contactHeading}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {siteConfig.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={telHref(phone.tel)}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${emailLabel}`}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {emailLabel}
                  </a>
                </li>
                <li className="text-sm text-background/70">{hoursLabel}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/12">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-background/60">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
