import type { Metadata } from "next";
import { OutlineButton } from "@/components/OutlineButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ScrollCard } from "@/components/ScrollCard";
import { ServiceCard } from "@/components/ServiceCard";
import { celebrations, guestExperience, services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Every Celebration, Thoughtfully Curated"
        subtitle="From intimate pre-wedding festivities to grand destination weddings, we design experiences that reflect your story, style and vision."
      />

      <section className="space-y-16 px-6 pb-24 md:px-10">
        {services.map((service, i) => (
          <div key={service.slug}>
            <ServiceCard
              number={service.number}
              title={service.title}
              body={service.short}
              image={service.image}
              index={i}
            />
            <Reveal className="mx-auto mt-4 max-w-[596px] px-2">
              <p className="text-[12px] tracking-[0.1em] uppercase text-ink-soft">
                Best for · {service.bestFor}
              </p>
              <p className="prose-body mt-3">{service.full}</p>
            </Reveal>
          </div>
        ))}
      </section>

      <section className="bg-white/40 px-6 py-28 md:px-10">
        <Reveal className="mx-auto mb-16 max-w-[560px] text-center">
          <p className="eyebrow mb-6">Celebration Types</p>
          <h2 className="font-serif text-[36px] text-ink md:text-[44px]">
            Rituals We Love to Shape
          </h2>
        </Reveal>
        <div className="mx-auto grid max-w-[1000px] gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {celebrations.map((item, i) => (
            <ScrollCard key={item.title} index={i}>
              <h3 className="font-serif text-[24px] text-ink">{item.title}</h3>
              <p className="prose-body mt-3">{item.body}</p>
            </ScrollCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-28 md:px-10">
        <Reveal className="mb-16 text-center">
          <p className="eyebrow mb-6">Guest Experience</p>
          <h2 className="font-serif text-[36px] text-ink md:text-[44px]">
            Every Guest Feels Celebrated
          </h2>
          <p className="prose-body mx-auto mt-5 max-w-[520px]">
            From the moment your guests arrive until the final farewell, we
            ensure every touchpoint is thoughtfully planned and beautifully
            executed.
          </p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {guestExperience.map((item, i) => (
            <ScrollCard key={item.title} index={i}>
              <article className="border border-line/70 px-8 py-8">
                <h3 className="font-serif text-[22px] text-ink">{item.title}</h3>
                <p className="prose-body mt-3">{item.body}</p>
              </article>
            </ScrollCard>
          ))}
        </div>
        <Reveal className="mt-16 flex justify-center">
          <OutlineButton href="/inquire">Book a Consultation</OutlineButton>
        </Reveal>
      </section>
    </>
  );
}
