"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type Common = {
  children: string;
  className?: string;
  variant?: "outline" | "solid";
  fullWidth?: boolean;
};

type LinkProps = Common & { href: string; type?: never; onClick?: never };
type ButtonProps = Common & {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function OutlineButton(props: LinkProps | ButtonProps) {
  const { children, className, variant = "outline", fullWidth } = props;

  const classes = cn(
    "group relative h-[72px] items-center justify-center overflow-hidden border border-ink px-9 text-[12px] font-medium tracking-[0.08em]",
    fullWidth ? "flex w-full" : "inline-flex",
    "transition-[letter-spacing,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "hover:tracking-[0.14em] active:scale-[0.985]",
    variant === "outline" ? "bg-cream text-ink" : "bg-ink text-cream",
    className,
  );

  const label = (
    <>
      {/* Ink wipe */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100",
          variant === "outline" ? "bg-ink" : "bg-cream",
        )}
      />

      {/* Soft edge gleam */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
      />

      <span className="relative block h-[1.15em] overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          <span
            className={cn(
              "block transition-colors duration-500",
              variant === "outline"
                ? "text-ink group-hover:text-cream"
                : "text-cream group-hover:text-ink",
            )}
          >
            {children}
          </span>
        </span>
        <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          <span
            className={cn(
              "block",
              variant === "outline" ? "text-cream" : "text-ink",
            )}
          >
            {children}
          </span>
        </span>
      </span>
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {label}
    </button>
  );
}
