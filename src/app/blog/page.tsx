import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { blog } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Slow reflections from a life spent honoring the unforgettable."
        subtitle="Notes on design, ritual, and the quiet craft of celebration."
      />

      <section className="mx-auto max-w-[1200px] px-6 pb-32 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {blog.map((post, i) => (
            <PortfolioCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              image={post.image}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
