import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, HardHat, ShieldCheck, Target, Eye } from "lucide-react";
import { img, founder, whyChooseUs, stats } from "@/lib/site-data";
import { PageHero, CtaBand, Prose } from "@/components/PageBits";
import { Reveal, SectionHeading, Counter } from "@/components/ui-bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rehman Construction & Enterprises — Islamabad" },
      {
        name: "description",
        content:
          "Rehman Construction & Enterprises is a modern construction management company in Islamabad and Rawalpindi — our mission, vision, core values and founder.",
      },
      { property: "og:title", content: "Building More Than Structures — Building Trust" },
      {
        property: "og:description",
        content: "A full-service construction company operating across Islamabad and Rawalpindi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building More Than Structures — Building Trust"
        intro="A modern construction management company with engineering expertise, working across Islamabad and Rawalpindi."
        image={img.courtyard}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Company introduction"
              title="Engineered with Expertise. Built with Trust."
            />
            <div className="mt-8">
              <Prose>
                <p>
                  Rehman Construction & Enterprises is a full-service construction company delivering
                  residential and commercial projects from excavation to handover. We combine formal
                  engineering training with day-to-day site discipline, so every stage is planned,
                  measured and documented.
                </p>
                <p>
                  One contract, one supervisor and one rate sheet — our clients never have to arbitrate
                  between a contractor, a labour team and a finishing crew.
                </p>
              </Prose>
            </div>
            <Link
              to="/contact"
              className="sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
            >
              Request a consultation <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={img.modernVilla} alt="Completed modern residence" loading="lazy" className="h-56 w-full rounded-2xl object-cover" />
            <img src={img.classicMansion} alt="Classic facade residence" loading="lazy" className="mt-10 h-56 w-full rounded-2xl object-cover" />
            <img src={img.greyClassic} alt="Grey structure work in progress" loading="lazy" className="h-40 w-full rounded-2xl object-cover" />
            <img src={img.completedVilla} alt="Delivered villa" loading="lazy" className="mt-10 h-40 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8">
          {[
            { icon: Target, title: "Our mission", body: "To raise construction standards with transparent pricing, engineered planning and professionally managed sites." },
            { icon: Eye, title: "Our vision", body: "To be the most trusted construction partner for homeowners and developers across Islamabad and Rawalpindi." },
            { icon: ShieldCheck, title: "Quality commitment", body: "Certified steel, graded concrete and a documented inspection before every stage is signed off." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="lit-panel h-full bg-card p-8">
                <v.icon className="size-9 text-primary" />
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="center" eyebrow="Core values" title="Quality • Trust • Excellence" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="lit-panel h-full bg-card p-7 text-center">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-border bg-card/60 py-20 text-foreground lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[320px_1fr] lg:px-8">
          <Reveal>
            <div className="mx-auto w-64 overflow-hidden rounded-3xl border border-primary/30 bg-card p-3">
              <img src={founder.photo} alt={`${founder.name}, ${founder.role}`} className="aspect-4/5 w-full rounded-2xl object-cover object-top" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">Founder & CEO</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">{founder.name}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {founder.credentials.map((c) => (
                <li key={c} className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  <GraduationCap className="size-3.5" /> {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {founder.journey.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 text-center sm:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <Counter value={s.value} className="ember-text text-4xl font-extrabold sm:text-5xl" />
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-5 lg:px-8">
          {[
            { icon: HardHat, label: "Professional site management" },
            { icon: Award, label: "Engineering-led planning" },
            { icon: ShieldCheck, label: "Documented quality control" },
          ].map((b) => (
            <span key={b.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <b.icon className="size-4 text-primary" /> {b.label}
            </span>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
