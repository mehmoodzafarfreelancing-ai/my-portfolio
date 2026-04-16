import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-[0_0_24px_-4px_var(--accent-glow)] hover:brightness-110",
  secondary:
    "border border-border bg-card/60 text-foreground backdrop-blur-sm hover:border-accent/40 hover:bg-card",
  ghost: "text-muted hover:text-foreground hover:bg-white/5",
};

type Shared = Readonly<{
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}>;

export type ButtonProps =
  | (Shared &
      Omit<ComponentPropsWithoutRef<"button">, keyof Shared> & {
        href?: undefined;
      })
  | (Shared &
      Omit<ComponentPropsWithoutRef<typeof Link>, keyof Shared> & {
        href: string;
      });

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const styles = cn(
    "inline-flex min-h-11 min-w-[44px] items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantStyles[variant],
    props.className,
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, children, variant: _variant, className: _className, ...linkProps } = props;
    void _variant;
    void _className;

    const useNativeAnchor =
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (useNativeAnchor) {
      const {
        prefetch: _prefetch,
        replace: _replace,
        scroll: _scroll,
        ...anchorProps
      } = linkProps as typeof linkProps & {
        prefetch?: unknown;
        replace?: unknown;
        scroll?: unknown;
      };
      void _prefetch;
      void _replace;
      void _scroll;
      return (
        <a href={href} className={styles} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, variant: _variant, className: _className, type = "button", ...buttonProps } =
    props;
  void _variant;
  void _className;
  return (
    <button type={type} className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
