"use client";

import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { GithubIcon } from "@/components/icons/brands";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = Readonly<{
  project: Project;
}>;

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      layout
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 24 } }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      className={cn(
        "group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md transition-[box-shadow] duration-300 hover:border-accent/35 hover:shadow-[0_0_40px_-12px_var(--accent-glow)] focus-within:border-accent/45 focus-within:shadow-[0_0_40px_-12px_var(--accent-glow)]",
        project.gridClass,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
      <div className="relative flex flex-1 flex-col gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {project.concept}
          </p>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        </div>

        <div
          className={cn(
            "mt-auto flex flex-col gap-4 transition-opacity duration-300",
            "opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100",
          )}
        >
          <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-[44px] items-center gap-2 rounded-lg border border-border bg-background/70 px-3 py-2 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                aria-label={`${project.title} source on GitHub (opens in a new tab)`}
              >
                <GithubIcon className="size-4 shrink-0" />
                GitHub
              </a>
            ) : null}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-[44px] items-center gap-2 rounded-lg border border-transparent bg-accent/15 px-3 py-2 text-sm font-semibold text-accent transition hover:bg-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              aria-label={`${project.title} live demo (opens in a new tab)`}
            >
              <ExternalLink className="size-4 shrink-0" aria-hidden />
              Live demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
