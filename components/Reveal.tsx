"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades content into place the first time it scrolls into view.
 * Used sparingly: metrics band and project cards only, so motion marks
 * the two moments that carry proof. Respects prefers-reduced-motion,
 * and content stays visible if JavaScript never runs (the hidden state
 * is only applied here on the client).
 */
export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    el.classList.add("reveal");
    if (delay > 0) el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
