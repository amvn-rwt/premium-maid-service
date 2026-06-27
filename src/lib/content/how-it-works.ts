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
  /** Short benefit chip shown under the step copy. */
  tag: string;
  /** Plain-text summary of the step's visual, for screen readers. */
  srSummary: string;
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
      tag: "Quick & easy",
      srSummary:
        "Send your requirement by form or WhatsApp and we reply with the next steps.",
      visual: "enquiry",
    },
    {
      step: "2",
      title: "We shortlist profiles",
      description:
        "Candidates matched to your service type, timing, and area in Delhi NCR.",
      tag: "Matched to you",
      srSummary:
        "We share a shortlist of profiles matched to your service, timing, and locality.",
      visual: "shortlist",
    },
    {
      step: "3",
      title: "Interview & trial",
      description: "Meet the candidate at your home and try before you commit.",
      tag: "Try before hiring",
      srSummary:
        "Meet shortlisted candidates at home, run a trial, and confirm the one you like.",
      visual: "trial",
    },
    {
      step: "4",
      title: "Hire with support",
      description: "Once you confirm, we stay available for any follow-up.",
      tag: "We stay in touch",
      srSummary:
        "After you hire, we remain reachable by call or WhatsApp for any follow-up.",
      visual: "support",
    },
  ] satisfies HowItWorksStep[],
  ctaLabel: "Start your enquiry",
  ctaNote: `Serving ${siteConfig.serviceArea}`,
} as const;
