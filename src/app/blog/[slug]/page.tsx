import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { OutlineButton } from "@/components/OutlineButton";
import { Reveal } from "@/components/Reveal";
import { blog } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  return { title: post?.title ?? "Blog" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="pt-28">
      <div className="relative mx-auto aspect-[16/10] max-w-[1200px] overflow-hidden px-0 md:px-10">
        <div className="relative h-full min-h-[420px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[680px] px-6 py-16 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">
            {post.date} · {post.author}
          </p>
          <h1 className="font-serif text-[36px] leading-tight text-ink md:text-[44px]">
            {post.title}
          </h1>
          <p className="mt-8 font-serif text-[22px] italic text-ink">
            “{post.quote}”
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {post.content.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 24)}>
              <p className="prose-body text-[16px]">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <OutlineButton href="/inquire">Plan Your Wedding</OutlineButton>
        </Reveal>
      </div>
    </article>
  );
}
