"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { faqs, home } from "@/data/content";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-[900px] px-6 py-28 md:px-10">
      <Reveal className="mb-16 text-center">
        <p className="eyebrow mb-6">{home.faqIntro.eyebrow}</p>
        <h2 className="font-serif text-[36px] leading-tight text-ink md:text-[44px]">
          {home.faqIntro.title}
        </h2>
        <p className="prose-body mx-auto mt-5 max-w-[480px]">
          {home.faqIntro.lead}
          <br />
          {home.faqIntro.sub}
        </p>
      </Reveal>

      <div className="divide-y divide-line/70 border-y border-line/70">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-[20px] text-ink md:text-[22px]">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "mt-1 text-[20px] leading-none text-ink transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="prose-body max-w-[640px] pb-7">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
