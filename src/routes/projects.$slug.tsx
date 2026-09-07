import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Ruler, Clock, HardHat } from "lucide-react";
import { PageHero, CtaBand, Prose } from "@/components/PageBits";
import { img } from "@/lib/site-data";
import { projects } from "@/lib/site";
import { Reveal } from "@/components/ui-bits";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project unavailable | Rehman Construction" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — ${project.location} | Rehman Construction` },
        { name: "description", content: project.blurb },
        { property: "og:title", content: `${project.title} — Rehman Construction` },
        { property: "og:description", content: project.blurb },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={project.status} title={project.title} intro={project.blurb} image={project.image || img.luxuryVilla} />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <ArrowLeft className="size-4" /> All projects
          </Link>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, label: "Location", value: project.location },
              { icon: Ruler, label: "Project type", value: project.projectType },
              { icon: HardHat, label: "Scope of work", value: project.scope },
              { icon: Clock, label: "Duration", value: project.duration },
            ].map((d, i) => (
              <Reveal key={d.label} delay={i * 70}>
                <div className="lit-panel h-full bg-card p-6">
                  <d.icon className="size-5 text-primary" />
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">{d.label}</p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed">{d.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="text-xl font-bold sm:text-2xl">Progress gallery</h2>
            <p className="mt-2 text-sm text-muted-foreground">Before, during and after — photographed on site.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.gallery.map((g, i) => (
                <Reveal key={g + i} delay={i * 80}>
                  <figure className="lit-panel overflow-hidden bg-card">
                    <img src={g} alt={`${project.title} — stage ${i + 1}`} loading="lazy" className="aspect-4/3 w-full object-cover" />
                    <figcaption className="p-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {["Before", "In progress", "After"][i] ?? "On site"}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 max-w-3xl">
            <Prose>
              <p>{project.blurb}</p>
              <p>
                Every stage on this project was supervised by our own team, with material approvals and
                inspection sign-off before the next stage began.
              </p>
            </Prose>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
