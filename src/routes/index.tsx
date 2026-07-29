import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  HeartHandshake,
  Mail,
  Phone,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { LogoImage } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEETika — Doctor-Led NEET Counselling & Admission Guidance" },
      {
        name: "description",
        content:
          "From the doctors to the future doctors. NEETika offers doctor-led NEET counselling for MBBS, BDS, BHMS and BAMS — profile assessment, college shortlisting and round-by-round mentorship.",
      },
      { property: "og:title", content: "NEETika — From the doctors to the future doctors" },
      {
        property: "og:description",
        content:
          "Doctor-led NEET counselling with over a decade of medical admission expertise. Explore our motive, journey, mentors and get in touch.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const DASHBOARD = [
  {
    to: "/motive" as const,
    label: "Our Motive & Goals",
    copy: "Why we exist, what we promise, and the seven things that set us apart.",
    icon: Target,
    tone: "bg-mint/70",
  },
  {
    to: "/history" as const,
    label: "History & Achievements",
    copy: "A decade of learning, milestones, and your step-by-step admission journey.",
    icon: Trophy,
    tone: "bg-sand/50",
  },
  {
    to: "/team" as const,
    label: "Our Team of Experts",
    copy: "Meet the practising doctors who personally mentor every aspirant.",
    icon: Users,
    tone: "bg-sage/50",
  },
  {
    to: "/contact" as const,
    label: "Contact Us",
    copy: "Share your NEET details and get plan, package and seat guidance.",
    icon: HeartHandshake,
    tone: "bg-rose/15",
  },
];

const STATS = [
  { value: "2M+", label: "NEET-UG candidates every year" },
  { value: "1,18,000", label: "MBBS seats available" },
  { value: "775+", label: "Accredited medical institutions" },
  { value: "10+", label: "Years of admission expertise" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-wash">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-sand/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <div className="relative mx-auto mb-6 flex items-center justify-center">
            <span className="animate-float">
              <LogoImage className="h-36 w-auto sm:h-44" />
            </span>
          </div>

          <h1 className="animate-rise">
            <span className="sr-only">NEETika</span>
            <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.3em] text-brand/70 sm:text-base">
              From the doctors to the future doctors
            </span>
          </h1>


          <p
            className="animate-rise mt-3 text-xs uppercase tracking-[0.25em] text-rose"
            style={{ animationDelay: "120ms" }}
          >
            The masterstroke to empower your future
          </p>

          <p
            className="animate-rise mx-auto mt-8 max-w-2xl font-display text-2xl font-bold leading-snug text-brand sm:text-4xl"
            style={{ animationDelay: "200ms" }}
          >
            NEET was tough. Choosing your college shouldn&rsquo;t be.
          </p>

          <p
            className="animate-rise mx-auto mt-5 max-w-2xl text-base text-muted-foreground"
            style={{ animationDelay: "280ms" }}
          >
            Medical counselling is more than filling forms — it&rsquo;s about making the
            right choices at the right time. With NEETika you get structured,
            doctor-led support to make every decision with confidence.
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-rose-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Book a free consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/motive"
              className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-background/70 px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-mint/60"
            >
              What we stand for
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
            {["MBBS", "BDS", "BHMS", "BAMS"].map((stream) => (
              <li
                key={stream}
                className="rounded-full border border-brand/15 bg-background/70 px-4 py-2"
              >
                {stream}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold text-brand sm:text-3xl">
            Your NEETika dashboard
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Everything you need, one tap away.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {DASHBOARD.map((card, i) => (
            <Reveal key={card.to} delay={i * 90}>
              <Link
                to={card.to}
                className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.tone} text-brand`}
                >
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-brand">
                  {card.label}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{card.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-rose">
                  Open
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-band-wash py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="rounded-3xl bg-background/70 p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-rose sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why counselling */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[2.5rem] bg-sand/60 p-8 text-sand-foreground sm:p-10">
              <p className="font-display text-lg font-bold">The numbers</p>
              <p className="mt-3 text-sm leading-relaxed">
                Over 2 million candidates take the NEET-UG examination every year,
                competing for the limited 1,18,000 MBBS seats offered by more than 775
                accredited medical institutions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2.5rem] bg-sage/60 p-8 text-sage-foreground sm:p-10">
              <h2 className="font-display text-2xl font-bold">Why choose counselling?</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Choosing the right college requires accurate information and strategic
                planning. Without professional guidance, aspirants risk:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Incorrect preference order",
                  "Missed deadlines",
                  "Misunderstanding of quotas and reservations",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <Reveal>
          <div className="rounded-[2.5rem] border border-border/60 bg-card p-8 text-center shadow-soft sm:p-12">
            <CalendarClock className="mx-auto h-9 w-9 text-rose" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-bold text-brand sm:text-3xl">
              Counselling rounds move fast. Your plan shouldn&rsquo;t wait.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Tell us your score and preferences — a NEETika doctor will walk you through
              the plans and packages that fit your profile.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Get plan details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+919479876000"
                className="inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> 94798 76000
              </a>
              <a
                href="mailto:neetika.org@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Email us
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
