import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { OutlineButton } from "@/components/OutlineButton";
import { Reveal } from "@/components/Reveal";
import { ScrollCard } from "@/components/ScrollCard";
import { portfolio } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return portfolio.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolio.find((p) => p.slug === slug);
  return { title: item?.title ?? "Portfolio" };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = portfolio.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <>
      <section className="pt-28">
        <div className="relative mx-auto aspect-[16/10] max-w-[1400px] overflow-hidden md:aspect-[21/9]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-6 py-20 text-center md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">
            {item.theme} · {item.venue}
          </p>
          <h1 className="font-serif text-[40px] text-ink md:text-[48px]">
            {item.title}
          </h1>
          <p className="mt-3 text-[14px] text-ink-soft">{item.couple}</p>
          <p className="prose-body mx-auto mt-8 max-w-[560px]">{item.story}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-16 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {item.gallery.map((src, i) => (
            <ScrollCard key={src} index={i}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={`${item.title} gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </ScrollCard>
          ))}
        </div>
      </section>

      <Reveal className="mx-auto max-w-[640px] px-6 pb-28 text-center">
        <p className="font-serif text-[24px] italic text-ink md:text-[28px]">
          “{item.testimonial}”
        </p>
        <div className="mt-12 flex justify-center">
          <OutlineButton href="/inquire">Plan Your Wedding</OutlineButton>
        </div>
      </Reveal>
    </>
  );
}
