"use client";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  quote?: string;
  /** Content that scrolls over the pinned intro (Wedora pattern) */
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  /** Extra pin distance as viewport multiples (default ~ matches Wedora) */
  pinScreens?: number;
  /**
   * about — Wedora About Us type: sentence-case eyebrow, 40px title,
   * 18px light lead, wide measure
   */
  variant?: "default" | "about";
};

/**
 * Wedora-style sticky section:
 * full-viewport intro pins at top while following content scrolls over it.
 */
export function StickyIntro({
  eyebrow,
  title,
  body,
  quote,
  children,
  className = "",
  contentClassName = "",
  pinScreens = 0,
  variant = "default",
}: Props) {
  const isAbout = variant === "about";

  return (
    <section className={cn("relative", className)}>
      <div className="sticky top-0 z-0 flex h-[100svh] items-center justify-center px-6 py-24">
        <Reveal
          className={cn(
            "mx-auto text-center",
            isAbout ? "max-w-[1104px]" : "max-w-[640px]",
          )}
        >
          {eyebrow && (
            <p
              className={
                isAbout
                  ? "mb-6 text-[12px] font-light normal-case tracking-normal text-ink"
                  : "eyebrow mb-6"
              }
            >
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              className={cn(
                "font-serif font-normal text-ink",
                isAbout
                  ? "text-[36px] leading-[1.2] md:text-[40px] md:leading-[48px]"
                  : "text-[36px] leading-[1.15] md:text-[44px]",
              )}
            >
              {title}
            </h2>
          )}
          {quote && (
            <p className="font-serif text-[28px] leading-[1.35] text-ink italic md:text-[36px]">
              {quote}
            </p>
          )}
          {body && (
            <p
              className={cn(
                "mx-auto mt-6 text-ink",
                isAbout
                  ? "max-w-[590px] text-[17px] font-light leading-[1.2] md:text-[18px] md:leading-[21.6px]"
                  : "prose-body max-w-[520px]",
              )}
            >
              {body}
            </p>
          )}
        </Reveal>
      </div>

      {pinScreens > 0 && (
        <div
          aria-hidden
          className="pointer-events-none"
          style={{ height: `${pinScreens * 100}svh` }}
        />
      )}

      {children && (
        <div
          className={cn(
            "relative z-10 bg-cream",
            contentClassName,
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
