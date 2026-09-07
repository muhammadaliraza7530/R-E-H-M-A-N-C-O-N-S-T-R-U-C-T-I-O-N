import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero } from "@/components/PageBits";
import { SectionHeading, Reveal } from "@/components/ui-bits";
import { CostCalculatorPanel } from "@/components/CostCalculatorPanel";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Construction Cost Calculator — Rehman Construction | Islamabad" },
      {
        name: "description",
        content:
          "Instant house construction cost estimate for 5 Marla to 2 Kanal plots in Islamabad & Rawalpindi — architecture, grey structure and finishing rates per sq.ft by Rehman Construction & Enterprises.",
      },
      { property: "og:title", content: "Construction Cost Calculator — Rehman Construction & Enterprises" },
      { property: "og:description", content: "Transparent per-sq.ft rates for architecture, grey structure and finishing across all plot sizes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Cost Calculator"
        title="Construction Cost Estimate"
        intro="Transparent per-sq.ft rates for Bahria Town, DHA and CDA sectors — pick your plot size and see a complete architecture + grey structure + finishing estimate."
        image={img.luxuryVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Residential project feasibility"
            title="Select your plot size"
            intro="Standard grade rates, updated for the current market. Click any plot to see its full cost breakdown."
          />

          <Reveal className="mt-14">
            <CostCalculatorPanel />
          </Reveal>
        </div>
      </section>
    </>
  );
}

