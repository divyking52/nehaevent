"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { testimonials } from "@/data/content";

export function TestimonialSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [70, -90]);

  const go = (dir: -1 | 1) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return count - 1;
      if (next >= count) return 0;
      return next;
    });
  };

  return (
    <section ref={sectionRef} className="relative z-10 h-[200svh]">
      <div className="sticky top-0 flex h-[100svh] justify-center overflow-hidden bg-cream md:px-12">
        <div className="relative mx-auto h-full w-full max-w-[1200px] overflow-hidden">
          <motion.div
            className="flex h-full"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {testimonials.map((item, i) => (
              <article
                key={item.name}
                className="relative h-full w-full shrink-0 md:grid md:grid-cols-2"
              >
                {/* Photo — full-bleed on mobile, right column on desktop */}
                <div className="absolute inset-0 overflow-hidden md:relative md:order-2 md:h-full">
                  <motion.div
                    className="absolute inset-x-0 top-[-11%] h-[122%] w-full"
                    style={{ y: imageY }}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority={i === 0}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-ink/20 md:hidden" />
                </div>

                {/* Mobile overlay copy */}
                <div className="relative z-10 flex h-full flex-col justify-between px-4 pt-[132px] pb-12 text-white md:hidden">
                  <p className="max-w-[358px] font-serif text-[32px] leading-[1.2] italic sm:text-[42px]">
                    “{item.quote}”
                  </p>
                  <p className="pl-16 font-serif text-[18px] leading-[1.2]">
                    {item.name}
                  </p>
                </div>

                {/* Desktop quote column */}
                <div className="relative order-1 hidden h-full flex-col justify-between pb-12 pt-[132px] pr-12 md:flex">
                  <div className="flex flex-1 items-center pl-6">
                    <p className="max-w-[552px] font-serif text-[48px] leading-[1.2] text-ink italic lg:text-[60px] lg:leading-[72px]">
                      “{item.quote}”
                    </p>
                  </div>
                  <p className="self-end font-serif text-[24px] leading-[28.8px] text-ink">
                    {item.name}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>

          {/* Arrows — white on mobile over photo, ink on desktop */}
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="pointer-events-auto absolute bottom-12 left-4 flex items-center gap-6 md:left-0">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous"
                className="flex size-7 items-center justify-center text-white transition-opacity hover:opacity-50 md:text-ink"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next"
                className="flex size-7 items-center justify-center text-white transition-opacity hover:opacity-50 md:text-ink"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
      <path
        d="M6 1L1 6l5 5M1 6h18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
      <path
        d="M14 1l5 5-5 5M19 6H1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
