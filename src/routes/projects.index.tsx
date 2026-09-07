import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Ruler, Clock } from "lucide-react";
import { PageHero, CtaBand } from "@/components/PageBits";
import { img } from "@/lib/site-data";
import { projects, projectCategories, type ProjectCategory } from "@/lib/site";
import { Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Completed, Ongoing & Renovation Work | Rehman Construction" },
      {
        name: "description",
        content:
          "Completed, ongoing, renovation and residential projects by Rehman Construction & Enterprises across Islamabad and Rawalpindi, with location, scope and duration.",
      },
      { property: "og:title", content: "Featured Projects — Rehman Construction & Enterprises" },
      { property: "og:description", content: "Villas, plazas and grey structures built across Islamabad and Rawalpindi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("All Projects");
  const list = filter === "All Projects" ? projects : projects.filter((p) => p.tags.includes(filter as never));

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Featured Projects"
        intro="Completed, ongoing and renovation work — with the location, scope and timeline behind every build."
        image={img.luxuryHouse}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="center" eyebrow="Our projects" title="Browse by category" />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {projectCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`reg-chip rounded-full border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] ${
                  filter === c ? "is-on border-primary text-primary" : "border-border text-muted-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70} className="h-full">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="lit-panel flex h-full flex-col overflow-hidden bg-card"
                >
                  <img src={p.image} alt={`${p.title}, ${p.location}`} loading="lazy" className="aspect-4/3 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{p.status}</span>
                    <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                    <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2"><MapPin className="size-3.5 text-primary" /> {p.location}</li>
                      <li className="flex items-center gap-2"><Ruler className="size-3.5 text-primary" /> {p.projectType}</li>
                      <li className="flex items-center gap-2"><Clock className="size-3.5 text-primary" /> {p.duration}</li>
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              No projects in this category yet — new work is added as it completes.
            </p>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
