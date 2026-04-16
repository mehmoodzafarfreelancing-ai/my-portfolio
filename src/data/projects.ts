import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  {
    id: "invoicetrackr",
    title: "InvoiceTrackr",
    concept: "Full-stack SaaS invoice tracker",
    description:
      "Magic links, Stripe and PayPal checkout, branded PDFs, reminders, and a dashboard that shows what's actually yours after tax—built for freelancers and small teams who've outgrown spreadsheets and scattered invoice threads.",
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://simple-invoice-tracker-nctn.vercel.app/",
    gridClass:
      "md:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-1",
  },
  {
    id: "detroit-architect",
    title: "Detroit Architect",
    concept: "Multi-page architecture studio site",
    description:
      "A multi-page marketing site for a Detroit architecture studio. It introduces the practice, lists services, highlights selected projects, explains how they work, and invites visitors to get in touch—with a clean, magazine-style layout and smooth motion (including a hero video).",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/mehmoodzafarfreelancing-ai/Detroit-Architect",
    liveUrl: "https://detroit-architect-concept.netlify.app/",
    gridClass:
      "md:col-span-1 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1",
  },
  {
    id: "localpulse",
    title: "LocalPulse",
    concept: "Mobile-first PWA for local businesses",
    description:
      "Offline-friendly bookings, push reminders, and a blazing storefront—built for owners who live on their phones.",
    tags: ["PWA", "Next.js", "Workbox", "IndexedDB"],
    githubUrl: "https://github.com/mehmoodzafar/localpulse",
    liveUrl: "https://localpulse.example.com",
    gridClass: "md:col-span-1 lg:col-span-1 lg:col-start-1 lg:row-start-2",
  },
];
