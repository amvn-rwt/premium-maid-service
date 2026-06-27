import {
  CalendarCheck,
  Check,
  CheckCheck,
  ListChecks,
  Phone,
  ThumbsUp,
  User,
} from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { type HowItWorksVisual } from "@/lib/content/how-it-works";
import { cn } from "@/lib/utils";

type Profile = {
  role: string;
  arrangement: string;
};

const PROFILES: Profile[] = [
  { role: "Cook", arrangement: "Full-time" },
  { role: "House maid", arrangement: "Part-time" },
  { role: "Nanny", arrangement: "Live-in" },
];

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className="mt-4 flex min-h-[172px] flex-1 flex-col justify-center rounded-2xl bg-muted/55 p-3.5 ring-1 ring-inset ring-foreground/8"
    >
      {children}
    </div>
  );
}

function ProfileAvatar({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary",
        className,
      )}
    >
      <User className="size-4" strokeWidth={2} />
    </span>
  );
}

function ProfileRow({ profile }: { profile: Profile }) {
  return (
    <li className="flex items-center gap-2.5 rounded-xl bg-background px-2.5 py-2 ring-1 ring-foreground/8">
      <ProfileAvatar />
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold leading-tight text-foreground">
          {profile.role}
        </span>
        <span className="block text-[11px] leading-tight text-muted-foreground">
          {profile.arrangement}
        </span>
      </span>
      <span className="flex size-4 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Check className="size-2.5" strokeWidth={3} />
      </span>
    </li>
  );
}

function EnquiryVisual() {
  return (
    <Frame>
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <WhatsAppIcon className="size-3.5 text-emerald-600" />
        <span>WhatsApp</span>
        <span className="ml-auto flex items-center gap-1 text-emerald-600">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          online
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <p className="ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs leading-snug font-medium text-primary-foreground">
          Need a full-time cook 🙏
        </p>
        <p className="mr-auto flex max-w-[88%] items-end gap-1.5 rounded-2xl rounded-bl-sm bg-background px-3 py-2 text-xs leading-snug text-foreground ring-1 ring-foreground/8">
          On it — sharing matched profiles!
          <CheckCheck className="size-3 shrink-0 text-emerald-600" />
        </p>
      </div>
    </Frame>
  );
}

function ShortlistVisual() {
  return (
    <Frame>
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <ListChecks className="size-3.5 text-primary" strokeWidth={2.25} />
        <span>Shortlisted for you</span>
      </div>

      <ul className="mt-2.5 flex flex-col gap-1.5">
        {PROFILES.map((profile) => (
          <ProfileRow key={profile.role} profile={profile} />
        ))}
      </ul>
    </Frame>
  );
}

function TrialVisual() {
  return (
    <Frame>
      <div className="flex items-center gap-2.5 rounded-xl bg-background px-2.5 py-2 ring-1 ring-foreground/8">
        <ProfileAvatar />
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold leading-tight text-foreground">
            {PROFILES[0].role}
          </span>
          <span className="block text-[11px] leading-tight text-muted-foreground">
            {PROFILES[0].arrangement} · Trial day
          </span>
        </span>
        <span className="flex items-center gap-1 rounded-full bg-primary/12 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
          <ThumbsUp className="size-2.5" strokeWidth={2.5} />
          Liked
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-xl bg-primary/10 px-2.5 py-2 text-primary">
        <CalendarCheck className="size-4 shrink-0" strokeWidth={2.25} />
        <span className="text-xs font-semibold">Home visit booked</span>
      </div>
    </Frame>
  );
}

function SupportVisual() {
  return (
    <Frame>
      <div className="flex items-center gap-2 rounded-xl bg-primary/12 px-2.5 py-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-3.5" strokeWidth={3} />
        </span>
        <span className="text-xs font-semibold text-primary">
          Helper placed
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2.5 rounded-xl bg-background px-2.5 py-2 ring-1 ring-foreground/8">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Phone className="size-3.5" strokeWidth={2.25} />
        </span>
        <span className="min-w-0 flex-1 text-xs font-medium leading-tight text-foreground">
          Follow-up support
          <span className="block text-[11px] font-normal text-muted-foreground">
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
