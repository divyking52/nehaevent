"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { OutlineButton } from "@/components/OutlineButton";
import { Reveal } from "@/components/Reveal";
import { home, site } from "@/data/content";

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="relative z-10 border-t border-line/60 bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
        <Reveal className="mx-auto max-w-[520px] text-center">
          <h2 className="font-serif text-[40px] leading-tight text-ink md:text-[48px]">
            {home.newsletter.title}
          </h2>
          <p className="prose-body mx-auto mt-5 max-w-[380px]">
            {home.newsletter.body}
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <input
              required
              type="email"
              name="email"
              placeholder="you@email.com"
              disabled={submitted}
              className="h-[56px] flex-1 border border-ink bg-transparent px-5 text-[13px] text-ink outline-none placeholder:text-ink-soft/70 sm:max-w-[280px]"
            />
            <OutlineButton type="submit" className="!h-[56px] !px-6">
              {submitted ? "Subscribed" : "Subscribe to Newsletter"}
            </OutlineButton>
          </form>

          <p className="mt-10 font-serif text-[15px] italic text-ink">
            {home.newsletter.quote}
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-line/50 pt-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-[0.14em] uppercase text-ink-soft">
            <Link href="/legal/privacy-policy" className="hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/legal/cookie-policy" className="hover:text-ink">
              Cookie Policy
            </Link>
            <Link href="/legal/terms-and-conditions" className="hover:text-ink">
              Terms and Conditions
            </Link>
          </div>

          <div className="flex gap-5 text-[12px] text-ink-soft">
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={site.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>

          <p className="text-[12px] text-ink-soft">
            © {new Date().getFullYear()} {site.name} — {site.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
