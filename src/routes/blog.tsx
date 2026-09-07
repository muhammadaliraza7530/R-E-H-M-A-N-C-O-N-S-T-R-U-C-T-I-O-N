import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { img, blogPosts } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";
import { Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Construction Knowledge & Guides | Rehman Construction & Enterprises" },
      {
        name: "description",
        content:
          "Practical construction guides for Pakistani homeowners: 5 Marla house cost, grey structure guide, material quality, budget planning and mistakes to avoid.",
      },
      { property: "og:title", content: "Construction Knowledge — Rehman Construction" },
      { property: "og:description", content: "Guides on cost, materials, contractors and modern construction trends." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge"
        title="Construction Knowledge"
        intro="Straight answers on cost, materials and planning — written from real site experience."
        image={img.brickFront}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="center" eyebrow="Guides" title="Learn before you build" />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70} className="h-full">
                <article className="lit-panel flex h-full flex-col overflow-hidden bg-card">
                  <img src={p.image} alt={p.title} loading="lazy" className="aspect-16/10 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{p.category}</span>
                    <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-[0.16em] text-primary"
                    >
                      Ask us about this <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Have a question about your project?" body="Send us your plot details and we will answer with real numbers." />
    </>
  );
}
