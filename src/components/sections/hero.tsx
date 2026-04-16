"use client";

import { Spotlight } from "@/components/effects/spotlight";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 28 },
  },
};

const itemReduced = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const child = reduceMotion ? itemReduced : item;

  return (
    <header className="relative isolate overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_oklab,var(--accent-secondary)_22%,transparent),transparent)]"
        aria-hidden
      />
      <Spotlight className="pointer-events-none absolute inset-0 opacity-90" />
      <div className="relative mx-auto flex min-h-[min(92vh,880px)] max-w-6xl flex-col justify-center gap-10 px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl space-y-6"
          variants={reduceMotion ? undefined : container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={child}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-accent"
          >
            Fullstack · Freelance · SaaS
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={child}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
            <span className="mt-2 block text-2xl font-medium text-muted sm:text-3xl md:text-4xl">
              Building scalable SaaS products &amp; high-end web solutions.
            </span>
          </motion.h1>
          <motion.p
            variants={child}
            className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            I partner with business owners and independent professionals to build high-end
            digital experiences—from sleek marketing sites and portfolios to robust operational
            dashboards—with performance and accessibility baked in.
          </motion.p>
          <motion.div
            variants={child}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button href="#projects" variant="primary" aria-label="Scroll to featured projects">
              View projects
            </Button>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              aria-label={`Hire Mehmood via email at ${siteConfig.email}`}
            >
              Hire Me
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-wrap gap-3 text-xs text-muted-foreground"
        >
          <span className="rounded-full border border-border bg-card/40 px-3 py-1 backdrop-blur-sm">
            Next.js App Router
          </span>
          <span className="rounded-full border border-border bg-card/40 px-3 py-1 backdrop-blur-sm">
            TypeScript-first
          </span>
          <span className="rounded-full border border-border bg-card/40 px-3 py-1 backdrop-blur-sm">
            Stripe · Supabase
          </span>
        </motion.div>
      </div>
    </header>
  );
}
