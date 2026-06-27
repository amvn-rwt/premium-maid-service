import { siteConfig } from "@/lib/site";

export type HowItWorksVisual =
  | "enquiry"
  | "shortlist"
  | "trial"
  | "support";

export type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
  /** Short accent chip shown on the step's visual mockup. */
  tag: string;
  /** Selects which bespoke mockup the card renders. */
  visual: HowItWorksVisual;
};

export const howItWorksContent = {
  title: "How it works",
  titleAccent: "four simple steps",
  description:
    "From first enquiry to placement — a clear process so you know what to expect.",
  steps: [
    {
      step: "1",
      title: "Share your requirement",
      description:
        "Fill the enquiry form or WhatsApp us with the help you need.",
      tag: "2-min enquiry",
      visual: "enquiry",
    },
    {
      step: "2",
      title: "We shortlist profiles",
      description:
        "Candidates matched to your service type, timing, and area in Delhi NCR.",
      tag: "Matched to you",
      visual: "shortlist",
    },
    {
      step: "3",
      title: "Interview & trial",
      description: "Meet at your home and try before you commit.",
      tag: "Try before hiring",
      visual: "trial",
    },
    {
      step: "4",
      title: "Hire with support",
      description: "We stay available after placement for any follow-up.",
      tag: "We stay in touch",
      visual: "support",
    },
  ] satisfies HowItWorksStep[],
  ctaLabel: "Start your enquiry",
  ctaNote: `Serving ${siteConfig.serviceArea}`,
} as const;
