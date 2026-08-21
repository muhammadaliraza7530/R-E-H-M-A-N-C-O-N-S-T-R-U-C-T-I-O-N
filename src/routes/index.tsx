import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides, process, services, site, stats } from "@/lib/site-data";
import { projects } from "@/lib/site";
import { Counter, Reveal, SectionHeading } from "@/components/ui-bits";
import { AutoScroller } from "@/components/AutoScroller";
import { PostsRail } from "@/components/PostsRail";
import { TestimonialsRail } from "@/components/Testimonials";
import { CtaBand } from "@/components/PageBits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rehman Construction & Enterprises — Islamabad Construction Company" },
      {
        name: "description",
        content:
          "Rehman Construction & Enterprises builds homes, plazas and grey structures across Islamabad and Rawalpindi. Quality, trust and excellence from excavation to handover.",
      },
      { property: "og:title", content: "Rehman Construction & Enterprises — Build With Confidence" },
      {
        property: "og:description",
        content: "Residential, commercial, grey structure and finishing works delivered by one accountable team.",
      },
    ],
  }),
  component: HomePage,
});

function HeroWordmark() {
  const words = ["REHMAN", "CONSTRUCTION"];
  let n = 0;
  return (
    <h2 className="flex flex-wrap justify-center gap-x-[0.18em] gap-y-1 overflow-hidden text-[9vw] font-extrabold leading-none tracking-[0.05em] text-transparent sm:text-[6vw] lg:text-[5rem]">
      {words.map((word) => (
        <span key={word} className="flex gap-[0.06em]">
          {word.split("").map((c, i) => {
            const delay = 140 + n++ * 60;
            return (
              <span
                key={`${c}-${i}`}
                className="letter-in ember-text inline-block"
                style={{ animationDelay: `${delay}ms` }}
              >
                {c}
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
}


function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {heroSlides.map((s, i) => (
        <img
          key={s.image}
          src={s.image}
          alt={s.title}
          width={1920}
          height={1280}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ${
            i === index ? "animate-slow-drift opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-black/55" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pb-16 pt-32 text-center lg:px-8">
        <p className="hero-rise text-[10px] font-bold uppercase tracking-[0.4em] text-primary sm:text-xs">
          {site.tagline}
        </p>
        <HeroWordmark />
        <p className="mx-auto mt-1 text-[11px] font-semibold uppercase tracking-[0.5em] text-foreground/80 sm:text-sm">
          Homes
        </p>

        <h1
          key={slide.title}
          className="animate-wipe-in mx-auto mt-8 max-w-3xl text-2xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl"
        >
          {slide.title}
        </h1>
        <p key={slide.highlight} className="animate-rise-in mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          {slide.highlight}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/projects"
            className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
          >
            View our work <ArrowRight className="size-4" />
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="size-4" /> WhatsApp us
          </a>
        </div>

        <div className="mx-auto mt-12 flex max-w-lg justify-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-primary" : "w-4 bg-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="border-y border-border bg-card/30 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 text-center sm:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <Counter value={s.value} className="ember-text text-4xl font-extrabold sm:text-5xl" />
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services Section (Bottom space fixed) */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Six disciplines, one contract, one supervisor"
            intro="Everything a building needs from excavation to handover keys."
          />
          <div className="mt-12">
            <AutoScroller speed={180}>
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80} className="h-full">
                  <article className="lit-panel flex h-full w-[280px] shrink-0 flex-col overflow-hidden bg-card sm:w-[360px]">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      loading="lazy" 
                      className="aspect-16/10 w-full shrink-0 object-cover" 
                    />
                    <div className="flex flex-col p-5 sm:p-6">
                      <h3 className="text-base font-bold sm:text-lg">{s.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{s.short}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </AutoScroller>
          </div>
        </div>
      </section>

      {/* Project Rail Section (Bottom space fixed) */}
      <section className="overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our projects"
            title="Recent projects across Islamabad and Rawalpindi"
            intro="Drag with finger to scroll manually, or let it auto-play."
          />
        </div>
        <div className="mt-12">
          <AutoScroller speed={180}>
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="lit-panel flex h-full w-[280px] shrink-0 flex-col overflow-hidden bg-card sm:w-[360px]"
              >
                <img
                  src={p.image}
                  alt={`${p.title}, ${p.location}`}
                  loading="lazy"
                  draggable={false}
                  className="aspect-4/3 w-full shrink-0 object-cover"
                />
                <div className="flex flex-col p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{p.status}</span>
                  <h3 className="mt-1.5 text-base font-bold">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
                </div>
              </Link>
            ))}
          </AutoScroller>
        </div>
      </section>

      {/* Branded posts */}
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

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Our process" title="Four clear stages" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="lit-panel h-full bg-card p-7">
                  <div className="text-4xl font-extrabold text-primary/25">{p.step}</div>
                  <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            intro="Families and developers who trusted us with their plot."
          />
        </div>
        <div className="mt-12">
          <TestimonialsRail />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
