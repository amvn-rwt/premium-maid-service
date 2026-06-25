import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  getServiceEnquireHref,
  type ServiceItem,
} from "@/lib/content/services";
import { cn } from "@/lib/utils";

type ServiceVisualCardProps = {
  service: ServiceItem;
  className?: string;
};

export function ServiceVisualCard({ service, className }: ServiceVisualCardProps) {
  const isFeatured = Boolean(service.featured);

  return (
    <Link
      href={getServiceEnquireHref(service.id)}
      className={cn(
        "group relative flex w-70 shrink-0 snap-start flex-col overflow-hidden rounded-[1.35rem] sm:w-75",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label={`Enquire about ${service.name}`}
    >
      <div
        className={cn(
          "relative aspect-4/5 w-full overflow-hidden",
          isFeatured && "ring-1 ring-inset ring-primary/35",
        )}
      >
        <Image
          src={service.image.src}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 640px) 70vw, 300px"
          className={cn(
            "object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]",
            isFeatured ? "brightness-[0.92]" : "brightness-[0.97]",
          )}
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/55 to-foreground/10"
        />

        {service.featured ? (
          <span className="absolute top-4 left-4 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground">
            {service.featured.label}
          </span>
        ) : null}

        <span
          aria-hidden
          className={cn(
            "absolute top-4 right-4 flex size-9 items-center justify-center rounded-full transition-colors duration-200",
            isFeatured
              ? "bg-primary text-primary-foreground"
              : "bg-background/90 text-foreground group-hover:bg-background",
          )}
        >
          <ArrowUpRight className="size-4" strokeWidth={2.25} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-lg font-semibold tracking-tight text-background sm:text-xl">
            {service.name}
          </h3>

          <ul className="mt-3 flex flex-wrap gap-2">
            {service.highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-background/12 px-2.5 py-1 text-background/90"
              >
                <Icon className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="text-xs font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
