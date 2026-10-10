"use client";

import { FormEvent, useState } from "react";
import { OutlineButton } from "@/components/OutlineButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/content";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        title="Let’s begin with a conversation."
        subtitle="Tell us a little about your celebration — we’ll respond with care and next steps."
        showArrow={false}
      />

      <section className="mx-auto grid max-w-[1100px] gap-16 px-6 pb-32 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="eyebrow mb-6">Visit & Connect</p>
          <h2 className="font-serif text-[32px] text-ink">Jaipur Studio</h2>
          <div className="prose-body mt-8 space-y-4">
            <p>{site.address}</p>
            <p>
              <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="underline-offset-4 hover:underline">
                {site.phone}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex min-h-[360px] items-center justify-center border border-line px-8 text-center">
              <div>
                <p className="font-serif text-[28px] text-ink">Thank you.</p>
                <p className="prose-body mt-4">
                  We’ve received your note and will be in touch shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Wedding Date" name="date" />
              <label className="block">
                <span className="mb-2 block text-[12px] tracking-[0.1em] uppercase text-ink-soft">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full border border-ink bg-transparent px-4 py-3 text-[14px] text-ink outline-none"
                />
              </label>
              <OutlineButton type="submit">Send Message</OutlineButton>
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
