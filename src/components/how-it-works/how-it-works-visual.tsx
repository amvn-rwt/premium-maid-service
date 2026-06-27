import {
  CalendarCheck,
  Check,
  CheckCheck,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { type HowItWorksVisual } from "@/lib/content/how-it-works";
import { cn } from "@/lib/utils";

type Candidate = {
  initials: string;
  name: string;
  role: string;
  tint: string;
};

const CANDIDATES: Candidate[] = [
  { initials: "SD", name: "Sunita D.", role: "Cook", tint: "bg-primary/15 text-primary" },
  { initials: "MK", name: "Meena K.", role: "Maid", tint: "bg-foreground/10 text-foreground" },
  { initials: "RP", name: "Reena P.", role: "Nanny", tint: "bg-emerald-500/15 text-emerald-700" },
];

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className="mt-5 flex-1 rounded-2xl bg-muted/55 p-3.5 ring-1 ring-inset ring-foreground/8"
    >
      {children}
    </div>
  );
}

function Avatar({ candidate }: { candidate: Candidate }) {
  return (
    <span
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold tracking-tight",
        candidate.tint,
      )}
    >
      {candidate.initials}
    </span>
  );
}

function EnquiryVisual() {
  return (
    <Frame>
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
        <WhatsAppIcon className="size-3.5 text-emerald-600" />
        <span>WhatsApp</span>
        <span className="ml-auto flex items-center gap-1 text-emerald-600">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          online
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-[11px] leading-snug font-medium text-primary-foreground">
          Need a full-time cook in Saket 🙏
        </p>
        <p className="mr-auto flex max-w-[85%] items-end gap-1.5 rounded-2xl rounded-bl-sm bg-background px-3 py-2 text-[11px] leading-snug text-foreground ring-1 ring-foreground/8">
          On it — sharing profiles today!
          <CheckCheck className="size-3 shrink-0 text-emerald-600" />
        </p>
      </div>
    </Frame>
  );
}

function ShortlistVisual() {
  return (
    <Frame>
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
        <Search className="size-3.5 text-primary" strokeWidth={2.25} />
        <span>3 profiles matched</span>
      </div>

      <ul className="mt-3 flex flex-col gap-1.5">
        {CANDIDATES.map((candidate, index) => (
          <li
            key={candidate.initials}
            className={cn(
              "flex items-center gap-2.5 rounded-xl bg-background px-2.5 py-2 ring-1 ring-foreground/8",
              index === 2 && "opacity-55",
            )}
          >
            <Avatar candidate={candidate} />
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-semibold leading-tight text-foreground">
                {candidate.name}
              </span>
              <span className="block text-[10px] leading-tight text-muted-foreground">
                {candidate.role}
              </span>
            </span>
            <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
              <Check className="size-2.5" strokeWidth={3} />
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function TrialVisual() {
  return (
    <Frame>
      <div className="flex items-center gap-2.5 rounded-xl bg-background px-2.5 py-2 ring-1 ring-foreground/8">
        <Avatar candidate={CANDIDATES[0]} />
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-semibold leading-tight text-foreground">
            {CANDIDATES[0].name}
          </span>
          <span className="block text-[10px] leading-tight text-muted-foreground">
            {CANDIDATES[0].role} · Trial day
          </span>
        </span>
        <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
          <Sparkles className="size-2.5" strokeWidth={2.5} />
          Liked
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-xl bg-primary/10 px-2.5 py-2 text-primary">
        <CalendarCheck className="size-4 shrink-0" strokeWidth={2.25} />
        <span className="text-[11px] font-semibold">Home visit · Today, 4 PM</span>
      </div>
    </Frame>
  );
}

function SupportVisual() {
  return (
    <Frame>
      <div className="flex items-center gap-2 rounded-xl bg-emerald-500/12 px-2.5 py-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="size-3.5" strokeWidth={3} />
        </span>
        <span className="text-[11px] font-semibold text-emerald-800">
          Helper placed
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2.5 rounded-xl bg-background px-2.5 py-2 ring-1 ring-foreground/8">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Phone className="size-3.5" strokeWidth={2.25} />
        </span>
        <span className="min-w-0 flex-1 text-[11px] font-medium leading-tight text-foreground">
          Follow-up support
          <span className="block text-[10px] font-normal text-muted-foreground">
            Call or WhatsApp anytime
          </span>
        </span>
        <WhatsAppIcon className="size-4 shrink-0 text-emerald-600" />
      </div>
    </Frame>
  );
}

const VISUALS: Record<HowItWorksVisual, () => React.ReactElement> = {
  enquiry: EnquiryVisual,
  shortlist: ShortlistVisual,
  trial: TrialVisual,
  support: SupportVisual,
};

export function HowItWorksVisual({ visual }: { visual: HowItWorksVisual }) {
  const Visual = VISUALS[visual];
  return <Visual />;
}
