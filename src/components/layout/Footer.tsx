import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { telHref, whatsappHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="border-t border-primary/20 bg-primary text-primary-foreground">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <SiteLogo inverted />
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-primary-foreground/70">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-primary-foreground/70">
              Contact
            </h2>
            <ul className="mt-4 space-y-3">
              {siteConfig.phones.map((phone) => (
                <li key={phone.tel} className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/60">
                    {phone.label}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={telHref(phone.tel)}
                      className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                    >
                      {phone.display}
                    </a>
                    <a
                      href={whatsappHref(phone.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                      aria-label={`WhatsApp ${phone.display}`}
                    >
                      <WhatsAppIcon className="size-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            {footer.email ? (
              <p className="mt-4 text-sm text-primary-foreground/90">
                <a
                  href={`mailto:${footer.email}`}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {footer.email}
                </a>
              </p>
            ) : null}

            {footer.address ? (
              <p className="mt-2 text-sm text-primary-foreground/80">
                {footer.address}
              </p>
            ) : null}

            {footer.hours ? (
              <p className="mt-2 text-sm text-primary-foreground/80">
                {footer.hours}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Serving {siteConfig.serviceArea}.
          </p>
          <p>English + Hindi site — translations coming soon.</p>
        </div>
      </Container>
    </footer>
  );
}
