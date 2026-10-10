import Image from "next/image";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { OutlineButton } from "@/components/OutlineButton";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Pricing } from "@/components/Pricing";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Reveal } from "@/components/Reveal";
import { ScrollCard } from "@/components/ScrollCard";
import { ServiceCard } from "@/components/ServiceCard";
import { StickyIntro } from "@/components/StickyIntro";
import { StickyStack } from "@/components/StickyStack";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import {
  blog,
  home,
  images,
  portfolio,
  services,
  team,
} from "@/data/content";

export default function HomePage() {
  const featured = portfolio.slice(0, 3);
  const posts = blog.slice(0, 3);

  return (
    <>
      <Hero />

      <StickyIntro
        eyebrow={home.servicesIntro.eyebrow}
        title={home.servicesIntro.title}
        body={home.servicesIntro.body}
      >
        <div className="space-y-16 px-6 py-24 md:px-10">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              number={service.number}
              title={service.title}
              body={service.short}
              image={service.image}
              index={i}
            />
          ))}
          <Reveal className="flex justify-center pt-4">
            <OutlineButton href="/services">View Details</OutlineButton>
          </Reveal>
        </div>
      </StickyIntro>

      <StickyIntro
        eyebrow={home.processIntro.eyebrow}
        title={home.processIntro.title}
        body={home.processIntro.body}
      >
        <div className="pb-8">
          <ProcessTimeline />
          <Reveal className="mx-auto max-w-[520px] px-6 pt-16 pb-24 text-center md:pt-20">
            <p className="font-serif text-[16px] italic text-ink">
              {home.processIntro.quote}
            </p>
            <div className="mt-8 flex justify-center">
              <OutlineButton href="/inquire">Plan Your Wedding</OutlineButton>
            </div>
          </Reveal>
        </div>
      </StickyIntro>

      <StickyIntro
        eyebrow={home.portfolioIntro.eyebrow}
        quote={home.portfolioIntro.quote}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {featured.map((item, i) => (
              <PortfolioCard
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                title={item.title}
                image={item.image}
                index={i}
              />
            ))}
          </div>
          <Reveal className="mt-16 flex justify-center">
            <OutlineButton href="/portfolio">View Our Portfolio</OutlineButton>
          </Reveal>
        </div>
      </StickyIntro>

      <StickyIntro
        variant="about"
        eyebrow={home.aboutIntro.eyebrow}
        title={home.aboutIntro.title}
        body={home.aboutIntro.lead}
      >
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
              key: "team",
              content: (
                <div className="w-full max-w-[1200px]">
                  <div className="grid grid-cols-3 gap-[2px]">
                    {team.map((member, i) => (
                      <ScrollCard
                        key={member.name}
                        index={i}
                        className="text-center"
                      >
                        <div className="relative aspect-[226/495] overflow-hidden md:aspect-[395/927]">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 33vw, 400px"
                          />
                        </div>
                        <p className="mt-5 font-serif text-[18px] font-normal text-ink md:text-[22px]">
                          {member.name}
                        </p>
                        <p className="mt-1 text-[12px] font-light text-ink">
                          {member.role}
                        </p>
                      </ScrollCard>
                    ))}
                  </div>
                  <div className="mt-14 flex justify-center md:mt-16">
                    <OutlineButton href="/about-us">More about Us</OutlineButton>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </StickyIntro>

      <TestimonialSlider />

      <Pricing />

      <FAQ />

      <StickyIntro
        eyebrow={home.blogIntro.eyebrow}
        quote={home.blogIntro.quote}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            {posts.map((post, i) => (
              <PortfolioCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                title={post.title}
                image={post.image}
                index={i}
              />
            ))}
          </div>
          <Reveal className="mt-16 flex justify-center">
            <OutlineButton href="/blog">View all Articles</OutlineButton>
          </Reveal>
        </div>
      </StickyIntro>

      <section className="relative z-10 overflow-hidden bg-cream px-6 py-32 md:px-10">
        <div className="absolute inset-0">
          <Image
            src={images.sheeshMahal}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-cream/80" />
        </div>
        <Reveal className="relative mx-auto max-w-[640px] text-center">
          <h2 className="font-serif text-[36px] leading-tight text-ink md:text-[48px]">
            {home.cta.title}
          </h2>
          <p className="prose-body mx-auto mt-6 max-w-[520px]">{home.cta.body}</p>
          <div className="mt-10 flex justify-center">
            <OutlineButton href="/inquire">Plan Your Wedding</OutlineButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
