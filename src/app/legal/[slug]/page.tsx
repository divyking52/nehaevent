import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/content";

const pages: Record<
  string,
  { title: string; intro: string; sections: { h: string; p: string }[] }
> = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro:
      "We treat your personal information with the same care we bring to every celebration.",
    sections: [
      {
        h: "What we collect",
        p: "When you inquire or subscribe, we may collect your name, email, phone number, and details about your event so we can respond meaningfully.",
      },
      {
        h: "How we use it",
        p: "Information is used only to communicate with you about planning services, newsletters you’ve opted into, and related follow-ups.",
      },
      {
        h: "Contact",
        p: `Questions about privacy may be sent to ${site.email}.`,
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    intro:
      "This site may use essential cookies to ensure smooth browsing and basic analytics.",
    sections: [
      {
        h: "Essential cookies",
        p: "Required for core site functionality such as navigation and form state.",
      },
      {
        h: "Analytics",
        p: "If enabled, anonymized analytics help us understand how visitors experience the site so we can improve it.",
      },
    ],
  },
  "terms-and-conditions": {
    title: "Terms and Conditions",
    intro:
      "By using this website, you agree to the following terms of use for Neha’s Evento.",
    sections: [
      {
        h: "Content",
        p: "All text, imagery, and design on this site are owned by Neha’s Evento unless otherwise credited. Please do not reproduce without permission.",
      },
      {
        h: "Inquiries",
        p: "Submitting an inquiry does not constitute a booking. Engagement terms are confirmed in a separate planning agreement.",
      },
      {
        h: "Updates",
        p: "We may update these terms from time to time. Continued use of the site constitutes acceptance of the revised terms.",
      },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title ?? "Legal" };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <section className="mx-auto max-w-[720px] px-6 pt-36 pb-32 md:px-10">
      <Reveal>
        <h1 className="font-serif text-[40px] text-ink md:text-[48px]">
          {page.title}
        </h1>
        <p className="prose-body mt-6">{page.intro}</p>
      </Reveal>
      <div className="mt-14 space-y-10">
        {page.sections.map((section) => (
          <Reveal key={section.h}>
            <h2 className="font-serif text-[24px] text-ink">{section.h}</h2>
            <p className="prose-body mt-3">{section.p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
