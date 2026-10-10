"use client";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

type Panel = {
  key: string;
  content: React.ReactNode;
};

type Props = {
  panels: Panel[];
  className?: string;
};

/**
 * Stacked full-viewport sticky panels — used for About storytelling
 * (Wedora pins successive content blocks as you scroll).
 */
export function StickyStack({ panels, className }: Props) {
  return (
    <section className={cn("relative", className)}>
      {panels.map((panel, i) => (
        <div
          key={panel.key}
          className="sticky top-0 flex min-h-[100svh] items-center justify-center bg-cream px-6 py-24"
          style={{ zIndex: i + 1 }}
        >
          <Reveal className="mx-auto w-full max-w-[720px]">{panel.content}</Reveal>
        </div>
      ))}
    </section>
  );
}
