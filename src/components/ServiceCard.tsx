"use client";

import Image from "next/image";
import { ScrollCard } from "@/components/ScrollCard";

type Props = {
  number: string;
  title: string;
  body: string;
  image: string;
  index?: number;
};

export function ServiceCard({
  number,
  title,
  body,
  image,
  index = 0,
}: Props) {
  return (
    <ScrollCard index={index} className="mx-auto w-full max-w-[600px]">
      <article className="overflow-hidden rounded-[3px] bg-white shadow-[0_10px_20px_rgba(51,51,51,0.05)]">
        <div className="relative aspect-[600/714] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white font-serif text-[18px] text-ink">
            {number}
          </span>
        </div>
        <div className="px-8 py-8 md:px-10 md:py-10">
          <h3 className="font-serif text-[24px] text-ink">{title}</h3>
          <p className="prose-body mt-4 max-w-[480px]">{body}</p>
        </div>
      </article>
    </ScrollCard>
  );
}
