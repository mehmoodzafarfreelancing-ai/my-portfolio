"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { sandboxCard, skills } from "@/data/skills";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const viewport = { once: true, amount: 0.2 };

export function Expertise() {
  const reduceMotion = useReducedMotion();
  const SandboxIcon = sandboxCard.icon;

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="expertise-heading"
          eyebrow="Stack & craft"
          title="Technical expertise"
          description="Core technologies I ship with daily—plus a sandbox for cutting-edge experiments."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-md transition hover:border-accent/30 hover:shadow-[0_0_32px_-16px_var(--accent-glow)]",
                  skill.gridClass,
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card/80 to-accent-secondary/15 p-6 shadow-[0_0_40px_-20px_var(--accent-glow)] sm:col-span-2 lg:col-span-3"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-background/50 text-accent">
                  <SandboxIcon className="size-5" aria-hidden />
                  <span className="sr-only">{sandboxCard.title}</span>
                </span>
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {sandboxCard.title}
                  </h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                    {sandboxCard.description}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-lg border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                Collaborate
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Sandbox focus areas">
              {sandboxCard.highlights.map((line) => (
                <li key={line}>
                  <span className="inline-flex rounded-md border border-border/80 bg-background/50 px-2.5 py-1 text-xs font-medium text-foreground">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
