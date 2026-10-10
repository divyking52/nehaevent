"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/content";

function StepImage({
  src,
  alt,
  tilt,
}: {
  src: string;
  alt: string;
  tilt: number;
}) {
  return (
    <motion.div
      className="relative size-[214px] shrink-0 shadow-[0_10px_20px_rgba(51,51,51,0.05)] md:size-[234px]"
      initial={{ opacity: 0, scale: 0.85, rotate: tilt * 3, y: 72 }}
      whileInView={{ opacity: 1, scale: 0.9, rotate: tilt, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative size-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="234px"
        />
      </div>
    </motion.div>
  );
}

function StepCopy({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      className="w-full max-w-[360px]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="font-serif text-[24px] leading-tight text-ink">{title}</h3>
      <p className="mt-3 text-[16px] font-light leading-[1.2] text-ink/80">
        {body}
      </p>
    </motion.div>
  );
}

function StepRow({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const imageLeft = index % 2 === 0;
  const tilt = imageLeft ? 1 : -1;

  return (
    <div className="relative flex min-h-[300px] flex-col items-center gap-6 py-12 md:min-h-[360px] md:flex-row md:items-center md:py-0">
      {/* Image */}
      <div
        className={`flex justify-center md:w-[calc(50%-1.25rem)] ${
          imageLeft
            ? "order-1 md:justify-start"
            : "order-1 md:order-3 md:justify-end"
        }`}
      >
        <StepImage src={step.image} alt={step.title} tilt={tilt} />
      </div>

      {/* Number */}
      <motion.div
        className="order-2 z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-cream md:size-[48px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-serif text-[28px] leading-none italic text-ink md:text-[32px]">
          {step.number}
        </span>
      </motion.div>

      {/* Copy */}
      <div
        className={`flex justify-center text-center md:w-[calc(50%-1.25rem)] md:text-left ${
          imageLeft
            ? "order-3 md:justify-start md:pl-[100px]"
            : "order-3 md:order-1 md:justify-end md:pr-[100px]"
        }`}
      >
        <StepCopy title={step.title} body={step.body} />
      </div>
    </div>
  );
}

export function ProcessTimeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.5"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
      <div className="pointer-events-none absolute top-0 bottom-4 left-1/2 hidden w-px -translate-x-1/2 md:block">
        <div className="absolute inset-0 bg-line/30" />
        <motion.div
          className="absolute top-0 left-0 h-full w-px origin-top bg-ink/70"
          style={{ scaleY: lineScale }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 size-[9px] -translate-x-1/2 translate-y-1/2 rounded-full bg-ink/70"
          style={{ opacity: lineScale }}
        />
      </div>

      <div>
        {processSteps.map((step, i) => (
          <StepRow key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
