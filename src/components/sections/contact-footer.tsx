"use client";

import { initialContactState, submitContact } from "@/actions/contact";
import { siteConfig } from "@/config/site";
import { motion, useReducedMotion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brands";
import { useActionState, useEffect, useRef } from "react";

function XIcon(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={props.className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ContactFooter() {
  const reduceMotion = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitContact, initialContactState);

  useEffect(() => {
    if (state.ok && formRef.current) {
      formRef.current.reset();
    }
  }, [state.ok]);

  return (
    <footer className="border-t border-border">
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-24 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Let&apos;s build something exceptional
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Share a short brief—timeline, stack preferences, and links— and I&apos;ll reply
                with next steps. Prefer email? Reach{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <form
                ref={formRef}
                action={formAction}
                noValidate
                className="space-y-5 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-md"
              >
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-invalid={state.fieldErrors?.name ? true : undefined}
                    aria-describedby={
                      state.fieldErrors?.name ? "contact-name-error" : undefined
                    }
                    className="w-full rounded-lg border border-border bg-background/80 px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card"
                    placeholder="Your name"
                  />
                  {state.fieldErrors?.name ? (
                    <p id="contact-name-error" className="text-sm text-red-400" role="alert">
                      {state.fieldErrors.name}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={state.fieldErrors?.email ? true : undefined}
                    aria-describedby={
                      state.fieldErrors?.email ? "contact-email-error" : undefined
                    }
                    className="w-full rounded-lg border border-border bg-background/80 px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card"
                    placeholder="you@company.com"
                  />
                  {state.fieldErrors?.email ? (
                    <p id="contact-email-error" className="text-sm text-red-400" role="alert">
                      {state.fieldErrors.email}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    aria-invalid={state.fieldErrors?.message ? true : undefined}
                    aria-describedby={
                      state.fieldErrors?.message ? "contact-message-error" : undefined
                    }
                    className="w-full resize-y rounded-lg border border-border bg-background/80 px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card"
                    placeholder="Project goals, timeline, and any links…"
                  />
                  {state.fieldErrors?.message ? (
                    <p id="contact-message-error" className="text-sm text-red-400" role="alert">
                      {state.fieldErrors.message}
                    </p>
                  ) : null}
                </div>

                {state.formError ? (
                  <p className="text-sm text-red-400" role="alert">
                    {state.formError}
                  </p>
                ) : null}

                {state.ok ? (
                  <p className="text-sm font-medium text-accent" role="status" aria-live="polite">
                    Thanks—your message is on its way. I&apos;ll be in touch shortly.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-[0_0_24px_-4px_var(--accent-glow)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  {isPending ? "Sending…" : "Send message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-card/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Crafted with Next.js &amp; Framer Motion.
          </p>
          <nav aria-label="Social profiles" className="flex flex-wrap items-center gap-2">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="X (Twitter) profile (opens in a new tab)"
            >
              <XIcon className="size-5" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
