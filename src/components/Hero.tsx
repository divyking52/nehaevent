"use client";

import { motion } from "framer-motion";
import { OutlineButton } from "@/components/OutlineButton";
import { home, images } from "@/data/content";

export function Hero() {
  const lines = home.hero.title.split("\n");

  return (
    <section className="relative h-[100svh] overflow-hidden">
      {/* ——— Mobile: full-bleed video + white overlay (Wedora) ——— */}
      <div className="absolute inset-0 lg:hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={images.hero}
          aria-label="Neha's Evento wedding celebration"
        >
          <source src={images.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/25" />

        <div className="relative z-10 flex h-full flex-col justify-between px-4 pb-10 pt-[84px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[38px] leading-[1.2] text-white"
          >
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[358px] text-[18px] font-light leading-[1.2] text-white"
            >
              {home.hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <OutlineButton
                href="/inquire"
                fullWidth
                className="border-0 bg-cream text-[18px] font-medium tracking-normal"
              >
                {home.hero.cta}
              </OutlineButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ——— Desktop: 600×100vh video | copy (Wedora 1200 grid) ——— */}
      <div className="mx-auto hidden h-full w-full max-w-[1200px] px-0 lg:grid lg:grid-cols-2">
        <div className="relative h-full min-h-0 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={images.hero}
              aria-hidden
            >
              <source src={images.heroVideo} type="video/mp4" />
            </video>
          </motion.div>
        </div>

        <div className="relative flex h-full min-h-0 flex-col justify-between pl-12 pr-0 pt-[132px] pb-12">
          <div className="max-w-[552px]">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-[44px] leading-[1.2] text-ink"
            >
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="prose-body mt-6 max-w-[420px]"
            >
              {home.hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <OutlineButton href="/inquire">{home.hero.cta}</OutlineButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="max-w-[360px] self-end"
          >
            <p className="font-serif text-[15px] leading-relaxed text-ink italic">
              {home.hero.quote}
            </p>
            <p className="mt-4 text-[13px] font-medium text-ink">
              {home.hero.founder}
            </p>
            <p className="text-[12px] text-ink-soft">{home.hero.role}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
