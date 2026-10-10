"use client";

import { FormEvent, useState } from "react";
import { OutlineButton } from "@/components/OutlineButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export default function InquirePage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        title="Plan Your Wedding"
        subtitle="Share a few details about your celebration. We’ll reply with availability and a gentle next step."
        showArrow={false}
      />

      <section className="mx-auto max-w-[640px] px-6 pb-32 md:px-10">
        <Reveal>
          {sent ? (
            <div className="border border-line px-8 py-16 text-center">
              <p className="font-serif text-[28px] text-ink">
                Your inquiry is received.
              </p>
              <p className="prose-body mt-4">
                We’ll be in touch within 2–3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" name="name" required />
                <Field label="Partner’s Name" name="partner" />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred Date" name="date" />
                <Field label="Guest Count" name="guests" />
              </div>
              <Field label="Venue / City" name="venue" />
              <label className="block">
                <span className="mb-2 block text-[12px] tracking-[0.1em] uppercase text-ink-soft">
                  Tell us about your vision
                </span>
                <textarea
                  required
                  name="vision"
                  rows={6}
                  className="w-full border border-ink bg-transparent px-4 py-3 text-[14px] text-ink outline-none"
                />
              </label>
              <OutlineButton type="submit" className="w-full sm:w-auto">
                Submit Inquiry
              </OutlineButton>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] tracking-[0.1em] uppercase text-ink-soft">
        {label}
      </span>
      <input
        required={required}
        type={type}
        name={name}
        className="h-12 w-full border border-ink bg-transparent px-4 text-[14px] text-ink outline-none"
      />
    </label>
  );
}
