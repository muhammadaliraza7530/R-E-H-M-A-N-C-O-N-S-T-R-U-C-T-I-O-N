import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";
import { SectionHeading } from "@/components/ui-bits";
import { BlueprintTimeline } from "@/components/BlueprintTimeline";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Construction Process — Consultation to Handover | Rehman Construction" },
      {
        name: "description",
        content:
          "Six clear stages: consultation, planning and estimation, design coordination, execution, quality control and project completion by Rehman Construction & Enterprises.",
      },
      { property: "og:title", content: "Our Construction Process — Rehman Construction" },
      { property: "og:description", content: "How we take a project from first consultation to final handover." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Our Construction Process"
        intro="Six documented stages — so you always know what is happening on your plot and what comes next."
        image={img.greyClassic}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="center" eyebrow="Blueprint" title="From first consultation to handover" />
          <div className="mt-14">
            <BlueprintTimeline />
          </div>
        </div>
      </section>

      <CtaBand title="Start at step one" body="Book a free consultation and we will prepare your plan and estimate." />
    </>
  );
}
