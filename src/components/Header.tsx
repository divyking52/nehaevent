"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/data/content";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto border-b border-ink/5 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-5 md:px-10 lg:px-14 lg:py-6">
          <Link
            href="/"
            className="font-serif text-[15px] tracking-[0.18em] text-ink uppercase transition-opacity hover:opacity-70"
          >
            {site.shortName}
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[11px] tracking-[0.16em] text-ink transition-opacity hover:opacity-55",
                    active && "opacity-55",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-full bg-ink transition-transform duration-300",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-ink transition-transform duration-300",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-auto fixed inset-0 z-40 bg-cream lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
