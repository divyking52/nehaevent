import type { Metadata } from "next";
import Image from "next/image";
import { OutlineButton } from "@/components/OutlineButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ScrollCard } from "@/components/ScrollCard";
import { StickyStack } from "@/components/StickyStack";
import { home, images, team, values } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Behind every quiet detail, a deeper purpose."
        subtitle="Meet the team who believes weddings should breathe — honest, soulful, and made to linger."
      />

      <StickyStack
        panels={[
          {
            key: "p1",
            content: (
              <p className="mx-auto max-w-[1113px] text-center font-serif text-[28px] font-normal leading-[1.2] text-ink italic md:text-[42px] md:leading-[50.4px]">
                {home.aboutIntro.p1}
              </p>
            ),
          },
          {
            key: "p2",
            content: (
              <p className="mx-auto max-w-[1113px] text-center font-serif text-[28px] font-normal leading-[1.2] text-ink italic md:text-[42px] md:leading-[50.4px]">
                {home.aboutIntro.p2}
              </p>
            ),
          },
          {
            key: "quote",
            content: (
              <p className="mx-auto max-w-[600px] text-center font-serif text-[36px] font-normal leading-[1.2] text-ink italic md:text-[60px] md:leading-[72px]">
                “We Are Listeners, Makers, Stewards of Meaning”
              </p>
            ),
          },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-28 md:px-0">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-[2px]">
          {team.map((member, i) => (
            <ScrollCard key={member.name} index={i} className="text-center">
              <div className="relative mx-auto aspect-[226/495] max-w-[395px] overflow-hidden sm:max-w-none md:aspect-[395/927]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, 400px"
                />
              </div>
              <h3 className="mt-6 font-serif text-[22px] font-normal text-ink md:text-[24px]">
                {member.name}
              </h3>
              <p className="mt-1 text-[12px] font-light text-ink">{member.role}</p>
              <p className="mx-auto mt-4 max-w-[320px] text-[15px] font-light leading-[1.7] text-ink-soft">
                {member.bio}
              </p>
            </ScrollCard>
          ))}
        </div>
      </section>

      <section className="bg-white/50 px-6 py-28 md:px-10">
        <Reveal className="mx-auto mb-16 max-w-[560px] text-center">
          <p className="mb-6 text-[12px] font-light text-ink">Values</p>
          <h2 className="font-serif text-[36px] font-normal leading-[1.2] text-ink md:text-[40px] md:leading-[48px]">
            Our principles
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[16px] font-light leading-[1.5] text-ink">
            These are the quiet truths we build everything on — the way we work,
            the way we design, and the way we care.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-[1000px] gap-10 md:grid-cols-2">
          {values.map((value, i) => (
            <ScrollCard key={value.title} index={i}>
              <p className="font-serif text-[28px] font-normal text-ink italic">
                {value.number}
              </p>
              <h3 className="mt-3 font-serif text-[24px] font-normal text-ink">
                {value.title}
              </h3>
              <p className="mt-4 text-[15px] font-light leading-[1.7] text-ink-soft">
                {value.body}
              </p>
            </ScrollCard>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-32 md:px-10">
        <div className="absolute inset-0">
          <Image
            src={images.behindScenes}
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-cream/75" />
        </div>
        <Reveal className="relative mx-auto max-w-[560px] text-center">
          <p className="mb-6 text-[12px] font-light text-ink">Behind the Scenes</p>
          <h2 className="font-serif text-[36px] font-normal leading-[1.2] text-ink md:text-[40px] md:leading-[48px]">
            The Beauty Before the Beauty
          </h2>
          <p className="mt-5 text-[16px] font-light leading-[1.5] text-ink">
            Here’s where the magic begins — slow hands, quiet rooms, thoughtful
            touch. The unseen hours that shape everything.
          </p>
          <div className="mt-10 flex justify-center">
            <OutlineButton href="/inquire">Plan Your Wedding</OutlineButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
