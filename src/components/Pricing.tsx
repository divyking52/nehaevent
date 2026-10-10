"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { OutlineButton } from "@/components/OutlineButton";
import { Reveal } from "@/components/Reveal";
import { ScrollCard } from "@/components/ScrollCard";
import { StickyIntro } from "@/components/StickyIntro";
import { home, inclusions, pricing } from "@/data/content";

function PricingCard({
  pkg,
  index,
}: {
  pkg: (typeof pricing)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Soft lag parallax — image drifts down and eases in scale as the card rises.
  const imgY = useTransform(scrollYProgress, [0, 1], [48, -24]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <ScrollCard index={index}>
      <article
        ref={ref}
        className="relative flex min-h-[640px] flex-col justify-between overflow-hidden bg-white px-8 py-12 text-center md:min-h-[889px] md:px-12 md:py-12"
      >
        <CardArt src={pkg.image} scale={imgScale} y={imgY} />

        <div className="relative z-10 mx-auto flex max-w-[300px] flex-col items-center gap-6">
          <h3 className="font-serif text-[24px] font-normal text-ink">
            {pkg.title}
          </h3>
          <div>
            <p className="text-[12px] font-light text-ink">{pkg.label}</p>
            <p className="mt-1 font-serif text-[32px] font-normal italic leading-none text-ink">
              {pkg.price}
            </p>
          </div>
          <p className="text-[16px] font-light leading-[1.35] text-ink">
            {pkg.body}
          </p>
        </div>

        <div className="relative z-10 mt-16 w-full">
          <OutlineButton href="/inquire" fullWidth>
            Book a Consultation
          </OutlineButton>
        </div>
      </article>
    </ScrollCard>
  );
}

function CardArt({
  src,
  scale,
  y,
}: {
  src: string;
  scale: MotionValue<number>;
  y: MotionValue<number>;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-12%] will-change-transform"
        style={{ scale, y }}
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover object-bottom opacity-[0.28]"
          style={{
            maskImage:
              "linear-gradient(0deg, rgb(0,0,0) 5%, rgba(0,0,0,0) 58%)",
            WebkitMaskImage:
              "linear-gradient(0deg, rgb(0,0,0) 5%, rgba(0,0,0,0) 58%)",
          }}
          sizes="400px"
        />
      </motion.div>
    </div>
  );
}

export function Pricing() {
  return (
    <StickyIntro
      eyebrow={home.pricingIntro.eyebrow}
      title={home.pricingIntro.title}
      body={home.pricingIntro.body}
    >
      <section className="mx-auto max-w-[1200px] px-6 pt-24 pb-12 md:px-0 md:pt-[132px] md:pb-12">
        <div className="grid gap-[2px] md:grid-cols-3">
          {pricing.map((pkg, i) => (
            <PricingCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>

        <Reveal className="mx-auto mt-20 max-w-[560px] px-6 text-center md:mt-28">
          <p className="font-serif text-[16px] italic text-ink">
            Regardless of scale, each couple receives...
          </p>
          <ul className="mt-8 space-y-0 text-left">
            {inclusions.map((item) => (
              <li
                key={item}
                className="border-b border-line/40 py-3 font-serif text-[16px] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </StickyIntro>
  );
}
