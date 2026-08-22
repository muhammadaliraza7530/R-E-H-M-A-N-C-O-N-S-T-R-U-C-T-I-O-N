import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/PageBits";
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
        title="Coming Soon"
        intro="Our project gallery is being updated. Please check back soon to see our completed and ongoing work."
        image={img.luxuryHouse}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">New project showcase is on the way</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are preparing fresh photos and case studies from our recent sites.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
