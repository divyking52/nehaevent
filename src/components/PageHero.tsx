"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  showArrow?: boolean;
};

export function PageHero({ title, subtitle, showArrow = true }: Props) {
  return (
    <section className="flex min-h-[88svh] flex-col items-center justify-center px-6 pt-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[780px] font-serif text-[36px] font-normal leading-[1.2] text-ink md:text-[44px] md:leading-[52.8px]"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[420px] text-[16px] font-light leading-[19.2px] text-ink"
        >
          {subtitle}
        </motion.p>
      )}
      {showArrow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-ink-soft"
          aria-hidden
        >
          <span className="inline-block animate-bounce text-lg">↓</span>
        </motion.div>
      )}
    </section>
  );
}
