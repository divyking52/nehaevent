"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollCard } from "@/components/ScrollCard";

type Props = {
  href: string;
  title: string;
  image: string;
  index?: number;
};

export function PortfolioCard({ href, title, image, index = 0 }: Props) {
  return (
    <ScrollCard index={index} className="group">
      <Link href={href} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-paper">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
        </div>
        <h3 className="mt-5 font-serif text-[22px] text-ink transition-opacity group-hover:opacity-70">
          {title}
        </h3>
      </Link>
    </ScrollCard>
  );
}
