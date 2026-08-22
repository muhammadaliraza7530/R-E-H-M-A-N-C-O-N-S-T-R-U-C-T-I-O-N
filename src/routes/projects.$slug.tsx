import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/PageBits";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title: "Project — Coming Soon | Rehman Construction" },
      { name: "description", content: "This project page is being updated. Please check back soon." },
      { property: "og:title", content: "Project — Coming Soon" },
      { property: "og:description", content: "This project page is being updated." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  return (
    <>
      <PageHero
        eyebrow="Project"
        title="Coming Soon"
        intro="Details for this project are being prepared. Please check back soon."
        image={img.luxuryVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Project details are on the way</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Photos, scope and timeline for this project will be published shortly.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
