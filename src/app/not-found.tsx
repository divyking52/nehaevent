import { OutlineButton } from "@/components/OutlineButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="max-w-[520px] font-serif text-[40px] text-ink md:text-[48px]">
        This page seems to have wandered off.
      </h1>
      <p className="prose-body mt-5 max-w-[400px]">
        The celebration you’re looking for isn’t here — let’s guide you home.
      </p>
      <div className="mt-10">
        <OutlineButton href="/">Return Home</OutlineButton>
      </div>
    </section>
  );
}
