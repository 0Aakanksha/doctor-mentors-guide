import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-hero-wash">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-rose">
          {eyebrow}
        </p>
        <h1 className="animate-rise mt-4 text-3xl font-bold text-brand sm:text-5xl">
          {title}
        </h1>
        <p className="animate-rise mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
