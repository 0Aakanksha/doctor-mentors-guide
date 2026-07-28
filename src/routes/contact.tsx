import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/enquiries.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NEETika — Plans, Packages & Counselling Enquiry" },
      {
        name: "description",
        content:
          "Share your NEET score and preferences with NEETika. A doctor mentor will call you back with college options, plan details and package pricing.",
      },
      { property: "og:title", content: "Contact NEETika" },
      {
        property: "og:description",
        content:
          "Fill the student enquiry form and get doctor-led counselling guidance plus plan and package details.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const EMPTY: EnquiryInput = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  neetScore: "",
  category: "",
  domicileState: "",
  preferredStream: "",
  message: "",
};

const CATEGORIES = ["General", "EWS", "OBC-NCL", "SC", "ST", "PwD"];
const STREAMS = ["MBBS", "BDS", "BHMS", "BAMS", "Not sure yet"];

function ContactPage() {
  const send = useServerFn(submitEnquiry);
  const [values, setValues] = useState<EnquiryInput>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key: keyof EnquiryInput) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((prev) => ({ ...prev, [key]: event.target.value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      await send({ data: parsed.data });
      setDone(true);
      setValues(EMPTY);
      toast.success("Thank you! A NEETika mentor will reach out shortly.");
    } catch {
      toast.error("Something went wrong. Please call us on 94798 76000.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-rose focus:ring-2 focus:ring-rose/25";

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Tell us your score. We’ll map your options."
        subtitle="Fill the form below and a doctor mentor will call you with college possibilities, plan details and package pricing tailored to your profile."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-soft sm:p-8">
            {done ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-sage-foreground" aria-hidden="true" />
                <h2 className="mt-4 font-display text-2xl font-bold text-brand">
                  Enquiry received
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  Thank you for reaching out to NEETika. One of our doctor mentors will
                  contact you within one working day with your options and plan details.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className="mt-6 rounded-full border border-brand/25 px-5 py-2.5 text-sm font-semibold text-brand"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h2 className="font-display text-xl font-bold text-brand">
                  Student enquiry form
                </h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" error={errors.fullName} required>
                    <input
                      className={inputClass}
                      value={values.fullName}
                      onChange={set("fullName")}
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Phone number" error={errors.phone} required>
                    <input
                      className={inputClass}
                      value={values.phone}
                      onChange={set("phone")}
                      maxLength={20}
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="10-digit mobile"
                    />
                  </Field>
                  <Field label="Email" error={errors.email} required>
                    <input
                      className={inputClass}
                      value={values.email}
                      onChange={set("email")}
                      maxLength={255}
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="NEET score / rank" error={errors.neetScore}>
                    <input
                      className={inputClass}
                      value={values.neetScore}
                      onChange={set("neetScore")}
                      maxLength={20}
                      placeholder="e.g. 520 or AIR 48000"
                    />
                  </Field>
                  <Field label="Category" error={errors.category}>
                    <select className={inputClass} value={values.category} onChange={set("category")}>
                      <option value="">Select category</option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred stream" error={errors.preferredStream}>
                    <select
                      className={inputClass}
                      value={values.preferredStream}
                      onChange={set("preferredStream")}
                    >
                      <option value="">Select stream</option>
                      {STREAMS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="City" error={errors.city}>
                    <input className={inputClass} value={values.city} onChange={set("city")} maxLength={80} />
                  </Field>
                  <Field label="State" error={errors.state}>
                    <input className={inputClass} value={values.state} onChange={set("state")} maxLength={80} />
                  </Field>
                  <Field label="Domicile state" error={errors.domicileState}>
                    <input
                      className={inputClass}
                      value={values.domicileState}
                      onChange={set("domicileState")}
                      maxLength={80}
                    />
                  </Field>
                </div>

                <Field label="Your question (plans, packages, colleges…)" error={errors.message}>
                  <textarea
                    className={`${inputClass} min-h-28 resize-y`}
                    value={values.message}
                    onChange={set("message")}
                    maxLength={1000}
                    placeholder="Tell us what you need help with."
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-rose px-6 py-3.5 text-sm font-semibold text-rose-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Submit enquiry"}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Your details are used only to contact you about counselling guidance.
                </p>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <aside className="space-y-5">
            <div className="rounded-[2rem] bg-mint/60 p-6 text-mint-foreground">
              <h2 className="font-display text-lg font-bold">Prefer to talk first?</h2>
              <p className="mt-2 text-sm">
                Plan and package details are shared personally so we can recommend what
                actually fits your rank and budget.
              </p>
              <div className="mt-5 space-y-3 text-sm font-semibold">
                <a href="tel:+919479876000" className="flex items-center gap-2 hover:text-rose">
                  <Phone className="h-4 w-4" aria-hidden="true" /> 94798 76000
                </a>
                <a href="mailto:neetika.org@gmail.com" className="flex items-center gap-2 hover:text-rose">
                  <Mail className="h-4 w-4" aria-hidden="true" /> neetika.org@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-soft">
              <h2 className="font-display text-lg font-bold text-brand">
                What happens next
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "A mentor reviews your score, category and domicile.",
                  "You get a call with realistic college options.",
                  "We share the counselling plan and package that fits.",
                ].map((line, i) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose/15 text-xs font-bold text-rose">
                      {i + 1}
                    </span>
                    {line}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand">
        {label}
        {required ? <span className="text-rose"> *</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
