import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolio } from "@/data/content";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Weddings that still take your breath away."
        subtitle="A selection of celebrations crafted in Jaipur and beyond — each one a story, not a spectacle."
      />

      <section className="mx-auto max-w-[1200px] px-6 pb-32 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <PortfolioCard
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              title={item.title}
              image={item.image}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
