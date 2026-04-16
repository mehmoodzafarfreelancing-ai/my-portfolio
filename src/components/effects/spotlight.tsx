"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SpotlightProps = Readonly<{
  className?: string;
}>;

export function Spotlight({ className }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 50, y: 40 });
  const frame = useRef<number | undefined>(undefined);
  const pending = useRef({ x: 50, y: 40 });

  const flush = useCallback(() => {
    frame.current = undefined;
    setPosition((prev) => {
      const next = pending.current;
      if (prev.x === next.x && prev.y === next.y) return prev;
      return next;
    });
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      pending.current = { x, y };
      if (frame.current === undefined) {
        frame.current = window.requestAnimationFrame(flush);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame.current !== undefined) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, [flush]);

  return (
    <div
      className={className}
      aria-hidden
      style={{
        background: `radial-gradient(600px circle at ${position.x}% ${position.y}%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 55%)`,
      }}
    />
  );
}
