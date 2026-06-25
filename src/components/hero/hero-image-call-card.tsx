import { Phone } from "lucide-react";

import { telHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HeroImageCallCard() {
  return (
    <div className="w-fit rounded-xl bg-foreground p-1 shadow-[0_16px_48px_-10px_rgba(26,33,31,0.45)]">
      <ul className="flex w-fit flex-col gap-1">
        {siteConfig.phones.map((phone) => {
          const isPrimary = phone.label === "Primary";

          return (
            <li key={phone.tel} className="w-full">
              <a
                href={telHref(phone.tel)}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2 py-2 sm:gap-3 sm:px-2.5 sm:py-2.5",
                  "transition-colors duration-200 ease-out hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/30 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground",
                )}
              >
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary sm:size-9"
                >
                  <Phone className="size-3.5 sm:size-4" strokeWidth={2.25} />
                </span>

                <span className="flex shrink-0 flex-col gap-0.5">
                  <span
                    className={cn(
                      "whitespace-nowrap text-[10px] leading-tight font-medium sm:text-[11px]",
                      isPrimary ? "text-primary" : "text-background/55",
                    )}
                  >
                    {phone.label}
                    <span className="font-normal text-background/45">
                      {" · "}
                      {phone.channels.whatsapp
                        ? "Call & WhatsApp"
                        : "Call only"}
                    </span>
                  </span>
                  <span className="whitespace-nowrap text-xs font-semibold leading-tight tracking-tight text-background sm:text-sm">
                    {phone.display}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
