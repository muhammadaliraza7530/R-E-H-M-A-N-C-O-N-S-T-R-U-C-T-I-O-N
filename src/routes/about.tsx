import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rehman Construction & Enterprises — Islamabad" },
      {
        name: "description",
        content:
          "Rehman Construction & Enterprises is a full-service construction company operating across Islamabad and Rawalpindi — quality, trust and excellence on every site.",
      },
      { property: "og:title", content: "About Rehman Construction & Enterprises" },
      {
        property: "og:description",
        content: "A full-service construction company operating across Islamabad and Rawalpindi.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Coming Soon"
        intro="Our company story and team details are being prepared. Please check back soon for updates."
        image={img.courtyard}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Our about section is on the way</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are updating this page with our story, our team and our certifications.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
