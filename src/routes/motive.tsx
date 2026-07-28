import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BookOpenCheck,
  Compass,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/motive")({
  head: () => ({
    meta: [
      { title: "Our Motive & Goals — NEETika" },
      {
        name: "description",
        content:
          "NEETika exists to make medical admissions transparent and stress-free: doctor-led mentorship, multi-stream expertise, ethical guidance and personalised counselling for every NEET aspirant.",
      },
      { property: "og:title", content: "Our Motive & Goals — NEETika" },
      {
        property: "og:description",
        content:
          "Doctor-led, ethics-first NEET counselling. Read the values and goals that guide every NEETika mentorship.",
      },
      { property: "og:url", content: "/motive" },
    ],
    links: [{ rel: "canonical", href: "/motive" }],
  }),
  component: MotivePage,
});

const WHY = [
  {
    icon: Award,
    title: "Legacy of trust",
    copy: "A decade of consistent, transparent counselling has earned us the confidence of thousands of families across India.",
  },
  {
    icon: Stethoscope,
    title: "Doctor-led initiative",
    copy: "Every mentor is a practising doctor who has personally navigated NEET counselling — not a call-centre agent.",
  },
  {
    icon: Layers,
    title: "Multi-stream expertise",
    copy: "MBBS, BDS, BHMS and BAMS — we map every viable route to a medical career, not just the obvious one.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to ethics",
    copy: "No inflated promises, no hidden commissions. You get honest probabilities and clear reasoning.",
  },
  {
    icon: Compass,
    title: "Strategy over guesswork",
    copy: "Preference orders built on cut-off trends, quotas, domicile rules and your own risk appetite.",
  },
  {
    icon: HeartHandshake,
    title: "Family-first support",
    copy: "Parents sit in on every discussion — decisions of this size should never be made alone.",
  },
  {
    icon: BookOpenCheck,
    title: "End-to-end handholding",
    copy: "From registration and document verification to final reporting at your allotted college.",
  },
];

const GOALS = [
  {
    title: "Demystify counselling",
    copy: "Turn a confusing, deadline-driven process into a clear checklist every student can follow.",
  },
  {
    title: "Maximise every rank",
    copy: "Ensure no aspirant loses a deserved seat to a preventable mistake in choice filling.",
  },
  {
    title: "Guide beyond MBBS",
    copy: "Help students see BDS, BHMS and BAMS as respected careers, chosen intentionally rather than by default.",
  },
  {
    title: "Protect families from fraud",
    copy: "Counter misinformation and donation-driven agents with verified, documented data.",
  },
];

function MotivePage() {
  return (
    <>
      <PageHero
        eyebrow="Our motive"
        title="Guidance that a doctor would give their own student"
        subtitle="NEETika was founded on a simple belief — the hardest part of becoming a doctor should be the exam, not the paperwork that follows it."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="rounded-[2.5rem] bg-mint/50 p-8 text-mint-foreground sm:p-12">
            <Sparkles className="h-8 w-8 text-rose" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              Our mission
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed">
              To make medical admission counselling accurate, ethical and accessible —
              so that every NEET aspirant converts their score into the best possible
              seat, with full understanding of quotas, budgets, bonds and long-term
              career outcomes.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
            Why choose us?
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Seven commitments that shape every conversation you have with NEETika.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="h-full rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/70 text-brand">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-band-wash py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
              Our goals
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {GOALS.map((goal, i) => (
              <Reveal key={goal.title} delay={i * 80}>
                <div className="h-full rounded-3xl bg-background/75 p-6">
                  <p className="font-display text-lg font-bold text-brand">
                    {goal.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{goal.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
            Ready to plan your seat strategy?
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-rose-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Talk to a NEETika doctor
          </Link>
        </Reveal>
      </section>
    </>
  );
}
