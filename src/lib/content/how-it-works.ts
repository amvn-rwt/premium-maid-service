import { siteConfig } from "@/lib/site";

export const howItWorksContent = {
  title: "How it works",
  titleAccent: "four simple steps",
  description:
    "From first enquiry to placement — a clear process so you know what to expect.",
  steps: [
    {
      step: "1",
      title: "Share your requirement",
      description: "Fill the enquiry form or WhatsApp us with the help you need.",
    },
    {
      step: "2",
      title: "We shortlist profiles",
      description:
        "Candidates matched to your service type, timing, and area in Delhi NCR.",
    },
    {
      step: "3",
      title: "Interview & trial",
      description: "Meet at your home and try before you commit.",
    },
    {
      step: "4",
      title: "Hire with support",
      description: "We stay available after placement for any follow-up.",
    },
  ],
  ctaLabel: "Start your enquiry",
  ctaNote: `Serving ${siteConfig.serviceArea}`,
} as const;
