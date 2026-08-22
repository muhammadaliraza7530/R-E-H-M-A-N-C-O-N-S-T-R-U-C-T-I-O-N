import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/site";
import { ProjectCard } from "@/components/ProjectCard";
import { PageHero, CtaBand } from "@/components/PageBits";
import { SectionHeading, Reveal } from "@/components/ui-bits";
import { PostsRail } from "@/components/PostsRail";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Recent Work | Rehman Construction & Enterprises" },
      {
        name: "description",
        content:
          "Completed and ongoing residential and commercial projects by Rehman Construction & Enterprises across Islamabad and Rawalpindi.",
      },
      { property: "og:title", content: "Projects — Rehman Construction & Enterprises" },
      {
        property: "og:description",
        content: "Villas, plazas and grey structures built by Rehman Construction & Enterprises.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Every project, from first drawing to final handover"
        intro="The homes we have completed, the ones under construction right now, and what is coming next."
        image={img.luxuryHouse}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Latest posts"
            title="Coming soon & on-site updates"
            intro="Our published announcements, shown complete — nothing cropped."
          />
        </div>
        <div className="mt-12">
          <PostsRail />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
