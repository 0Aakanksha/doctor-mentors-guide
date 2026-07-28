import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team of Experts — Doctor Mentors | NEETika" },
      {
        name: "description",
        content:
          "Meet the NEETika mentor panel: Dr. Shantanu Pardhi, Dr. Sheetal Singhal, Dr. Saloni Rathi, Dr. Rishabh Patle, Dr. Priya Rahangdale and Dr. Harsh Shivhare.",
      },
      { property: "og:title", content: "Our Team of Experts — NEETika" },
      {
        property: "og:description",
        content:
          "Practising doctors who personally mentor NEET aspirants through counselling, from choice filling to final admission.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const TEAM = [
  {
    name: "Dr. Shantanu Pardhi",
    role: "Founder & Lead Counselling Mentor",
    focus: "All-India quota strategy, MBBS choice filling",
  },
  {
    name: "Dr. Sheetal Singhal",
    role: "Senior Admission Advisor",
    focus: "State quota, domicile and reservation guidance",
  },
  {
    name: "Dr. Saloni Rathi",
    role: "Counselling Mentor",
    focus: "BDS pathways and college comparison",
  },
  {
    name: "Dr. Rishabh Patle",
    role: "Counselling Mentor",
    focus: "Rank analysis and cut-off trend modelling",
  },
  {
    name: "Dr. Priya Rahangdale",
    role: "Student Mentor",
    focus: "BHMS & BAMS career counselling",
  },
  {
    name: "Dr. Harsh Shivhare",
    role: "Documentation & Process Lead",
    focus: "Verification, deadlines and reporting support",
  },
];

function initials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team of experts"
        title="Mentored by doctors who have walked the same path"
        subtitle="Every NEETika mentor is a practising doctor. They have sat through the same counselling rounds, filled the same forms and now guide the next generation through them."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 70}>
              <article className="group h-full rounded-3xl border border-border/60 bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mint/70 font-display text-2xl font-bold text-brand ring-4 ring-background transition-colors group-hover:bg-rose/20">
                  {initials(member.name)}
                </span>
                <h2 className="mt-5 font-display text-lg font-bold text-brand">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-rose">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-band-wash py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
              One student, one mentor, one full season
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              You are not passed between executives. The doctor who studies your profile
              on day one is the same person guiding your final round decision.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a mentor call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
