"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  /** Alternates slight tilt direction */
  index?: number;
};

/**
 * Wedora-style scroll motion: cards scale up + fade in as they enter,
 * then ease down + fade out as they leave the viewport.
 */
export function ScrollCard({ children, className, index = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const tilt = index % 2 === 0 ? 0.85 : -0.85;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.7, 1],
    [0.9, 0.97, 1, 0.96, 0.9],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.5, 0.72, 1],
    [0.35, 0.9, 1, 0.85, 0.3],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [tilt, 0, -tilt * 0.45],
  );
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [56, 0, -28]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, rotate, y }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
