import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Home,
  Building2,
  Layers,
  Paintbrush,
  Hammer,
  ClipboardList,
  Calculator,
  Compass,
} from "lucide-react";
import { img, services } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";
import { Reveal, SectionHeading } from "@/components/ui-bits";

const icons: Record<string, typeof Home> = {
  "residential-construction": Home,
  "commercial-projects": Building2,
  "grey-structure": Layers,
  "finishing-works": Paintbrush,
  renovation: Hammer,
  "project-management": ClipboardList,
  "cost-estimation": Calculator,
  "construction-consultancy": Compass,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Construction, Grey Structure & Finishing | Rehman Construction" },
      {
        name: "description",
        content:
          "Residential and commercial construction, grey structure, renovation, finishing works, cost estimation and project management by Rehman Construction & Enterprises, Islamabad.",
      },
      { property: "og:title", content: "Services — Rehman Construction & Enterprises" },
      { property: "og:description", content: "Eight disciplines, one contract, one supervisor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Services"
        intro="Everything a building needs — from the first estimate to the handover keys — delivered by one accountable team."
        image={img.spanishVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="What we do"
            title="Eight disciplines, one contract"
            intro="Each service is delivered with engineered planning, documented quality checks and transparent quantities."
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = icons[s.slug] ?? Home;
              return (
                <Reveal key={s.slug} delay={i * 70} className="h-full">
                  <article className="lit-panel flex h-full flex-col overflow-hidden bg-card">
                    <img src={s.image} alt={s.title} loading="lazy" className="aspect-16/10 w-full object-cover" />
                    <div className="flex flex-1 flex-col p-6">
                      <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                      <Link
                        to="/contact"
                        className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-primary/50 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Request consultation <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us your plot size and budget"
        body="We will come back with a plan, a timeline and an honest cost range."
      />
    </>
  );
}
