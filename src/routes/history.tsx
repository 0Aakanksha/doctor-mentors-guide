import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History & Achievements — A Decade of Learning | NEETika" },
      {
        name: "description",
        content:
          "Ten years of NEET counselling experience: our milestones, the families we have guided, and the six-step admission journey NEETika walks every student through.",
      },
      { property: "og:title", content: "A Decade of Learning — NEETika" },
      {
        property: "og:description",
        content:
          "Milestones, achievements and the six-step admission journey from NEET score to secured seat.",
      },
      { property: "og:url", content: "/history" },
    ],
    links: [{ rel: "canonical", href: "/history" }],
  }),
  component: HistoryPage,
});

const TIMELINE = [
  {
    year: "2015",
    title: "The first cohort",
    copy: "A handful of junior doctors began helping their own juniors decode counselling schedules and choice filling — free of cost, after hospital hours.",
  },
  {
    year: "2017",
    title: "Beyond one state",
    copy: "Requests from outside Madhya Pradesh pushed us to build state-wise quota, domicile and fee databases for all-India counselling.",
  },
  {
    year: "2019",
    title: "Multi-stream expansion",
    copy: "BDS, BHMS and BAMS guidance was added so that students with every rank band had a credible medical pathway.",
  },
  {
    year: "2021",
    title: "Structured mentorship",
    copy: "The one-to-one mentor model was formalised: each student is paired with a practising doctor for the full counselling season.",
  },
  {
    year: "2023",
    title: "NEETika is born",
    copy: "The initiative took its name and identity — the masterstroke to empower your future.",
  },
  {
    year: "Today",
    title: "A trusted decade",
    copy: "Thousands of aspirants and parents guided through registration, mop-up and stray vacancy rounds with transparent, documented advice.",
  },
];

const JOURNEY = [
  { step: "01", title: "Submit NEET score", copy: "We assess your rank, category and domicile eligibility." },
  { step: "02", title: "Profile analysis", copy: "Budget, bond, location and stream preferences are mapped together." },
  { step: "03", title: "College shortlisting", copy: "A data-backed list built from previous years' closing ranks." },
  { step: "04", title: "Choice filling", copy: "Preference order finalised with your mentor, round by round." },
  { step: "05", title: "Document verification", copy: "Checklists, formats and deadlines handled before they become emergencies." },
  { step: "06", title: "Secure admission", copy: "Allotment review, reporting support and upgradation strategy." },
];

const ACHIEVEMENTS = [
  { value: "10+", label: "Years of counselling experience" },
  { value: "6", label: "Practising doctors on the mentor panel" },
  { value: "4", label: "Streams covered end to end" },
  { value: "100%", label: "Transparent, commission-free advice" },
];

function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="A decade of learning"
        title="Our history & achievements"
        subtitle="NEETika grew out of one recurring question from students: “I have my score — now what?” Here is how ten years of answering it turned into a structured mentorship."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="rounded-3xl border border-border/60 bg-card p-6 text-center shadow-soft">
                <p className="font-display text-3xl font-extrabold text-rose">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
            Our journey so far
          </h2>
        </Reveal>

        <ol className="mt-10 space-y-2 border-l-2 border-mint pl-6 sm:pl-8">
          {TIMELINE.map((item, i) => (
            <li key={item.year} className="relative pb-8">
              <span className="absolute -left-[2.1rem] top-1 inline-flex h-4 w-4 rounded-full border-4 border-background bg-rose sm:-left-[2.6rem]" />
              <Reveal delay={i * 60}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
                  {item.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-band-wash py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
              Your admission journey
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Six steps from submitting your NEET score to securing your seat — we stay
              with you at every one of them.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {JOURNEY.map((item, i) => (
              <Reveal key={item.step} delay={i * 70}>
                <div
                  className="h-full rounded-3xl bg-background/80 p-6 shadow-soft"
                  style={{ marginTop: `${(i % 3) * 8}px` }}
                >
                  <span className="font-display text-3xl font-extrabold text-mint-foreground/40">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <Reveal>
          <p className="mx-auto max-w-2xl font-display text-xl font-bold text-brand sm:text-2xl">
            Ten years of experience, applied to your rank.
          </p>
          <Link
            to="/team"
            className="mt-6 inline-flex rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-mint/60"
          >
            Meet the mentors
          </Link>
        </Reveal>
      </section>
    </>
  );
}
