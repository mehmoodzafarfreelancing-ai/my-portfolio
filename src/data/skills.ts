import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Code2,
  FileCode2,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";

export type SkillItem = Readonly<{
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  gridClass: string;
}>;

export const skills: readonly SkillItem[] = [
  {
    id: "react",
    name: "React",
    description:
      "Composable UIs, server/client boundaries, and performance-minded patterns for complex product surfaces.",
    icon: Code2,
    gridClass: "sm:col-span-1",
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "App Router, streaming, and edge-ready deployments for SaaS and marketing sites that need to scale.",
    icon: Boxes,
    gridClass: "sm:col-span-1",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "End-to-end type safety from API contracts to UI—fewer regressions as products grow.",
    icon: FileCode2,
    gridClass: "sm:col-span-1",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description:
      "Token-driven design systems, dark mode, and rapid iteration without sacrificing consistency.",
    icon: Palette,
    gridClass: "sm:col-span-1",
  },
  {
    id: "node",
    name: "Node.js",
    description:
      "APIs, background jobs, and integrations—Stripe webhooks, auth, and data pipelines included.",
    icon: Server,
    gridClass: "sm:col-span-1 md:col-span-2",
  },
];

export const sandboxCard: Readonly<{
  title: string;
  description: string;
  highlights: readonly string[];
  icon: LucideIcon;
}> = {
  title: "Sandbox & experiments",
  description:
    "Exploring quantized LLMs and small language models that run locally—wired into Next.js UIs with streaming responses, tool use, and privacy-first architecture.",
  highlights: [
    "WebGPU / WASM inference paths",
    "Chunked streaming to the client",
    "RAG over private documents",
  ],
  icon: Sparkles,
};
