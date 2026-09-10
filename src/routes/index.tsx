import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, CheckCircle2, Award, ShieldCheck, HardHat, Mail, MapPin, Maximize, Ruler, Download, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides, img, process, services, site, stats } from "@/lib/site-data";
import { projects } from "@/lib/site";
import { Counter, Reveal, SectionHeading } from "@/components/ui-bits";
import { AutoScroller } from "@/components/AutoScroller";
import { PostsRail } from "@/components/PostsRail";
import { TestimonialsRail } from "@/components/Testimonials";
import { CtaBand } from "@/components/PageBits";
import { TrustedPartners } from "@/components/TrustedPartners";
import { CostCalculatorPanel } from "@/components/CostCalculatorPanel";

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
    <h2 className="flex flex-wrap justify-center gap-x-[0.18em] gap-y-1 overflow-hidden text-[7vw] font-extrabold leading-none tracking-[0.05em] text-transparent sm:text-[7vw] lg:text-[5rem]">
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
      <div className="light-scrim absolute inset-0" />
      

      <div className="relative mx-auto w-full max-w-5xl px-5 pb-16 pt-32 text-center lg:px-8">
        <HeroWordmark />

        <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-primary/40 bg-background/60 px-6 py-3 backdrop-blur-sm">
          {["Quality", "Trust", "Excellence"].map((word, i) => (
            <span key={word} className="flex items-center gap-4">
              {i > 0 && <span className="size-1.5 rounded-full bg-primary" />}
              <span className="text-sm font-extrabold uppercase tracking-[0.3em] text-foreground sm:text-base">{word}</span>
            </span>
          ))}
        </div>

        <h1
          key={slide.title}
          className="animate-wipe-in mx-auto mt-8 max-w-3xl text-2xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl"
        >
          {slide.title}
        </h1>
        <p key={slide.highlight} className="animate-rise-in mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
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
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View Our Services
          </Link>
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

function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <SectionHeading
            eyebrow="Company Introduction"
            title="Building More Than Structures — Building Trust"
            intro="Rehman Construction is a modern construction management company with engineering expertise."
          />
          <div className="mt-8 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              We are on a mission to redefine construction standards by providing transparent, 
              high-quality, and professionally managed construction services. Our vision is to 
              be the most trusted construction partner for residential and commercial projects.
            </p>
            <p>
              <strong>Our Core Values:</strong> Quality commitment, professional execution, 
              and unwavering trust. We don't just construct buildings, we build lasting 
              relationships with our clients.
            </p>
          </div>
          <div className="mt-8">
             <Link
                to="/about"
                className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
              >
                Learn More <ArrowRight className="size-4" />
             </Link>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
           <img src={img.modernVilla} alt="Modern Villa" className="rounded-xl object-cover h-48 w-full" />
           <img src={img.completedVilla} alt="Completed Villa" className="rounded-xl object-cover h-48 w-full mt-8" />
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    { title: "QUALITY", icon: Award, desc: "Professional workmanship." },
    { title: "TRUST", icon: ShieldCheck, desc: "Transparent communication." },
    { title: "EXCELLENCE", icon: CheckCircle2, desc: "Attention to detail." },
    { title: "PROFESSIONAL MANAGEMENT", icon: HardHat, desc: "Proper planning and supervision." },
  ];
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-[url('/homes/hero-luxury.jpg')] opacity-15 bg-cover bg-center" />
      <div className="light-scrim absolute inset-0" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-foreground">Why Choose Us?</h2>
          <p className="mt-4 text-primary font-medium tracking-widest uppercase">Engineered with Expertise. Built with Trust.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <div className="flex flex-col items-center text-center p-6 border border-border rounded-2xl bg-card backdrop-blur-sm hover:bg-card/90 transition-colors">
                <r.icon className="size-12 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CeoSection() {
  return (
    <section className="py-20 lg:py-28 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/15 blur-2xl" aria-hidden />
            <div className="relative w-64 overflow-hidden rounded-[1.75rem] border border-primary/40 bg-card p-2 shadow-xl">
              <img
                src={img.ceo}
                alt="Sami Ur Rehman, Founder & CEO of Rehman Construction & Enterprises"
                width={600}
                height={750}
                loading="lazy"
                className="aspect-4/5 w-full rounded-[1.35rem] object-cover object-top"
              />
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-lg">
                Founder &amp; CEO
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-extrabold mb-2">Sami Ur Rehman</h2>
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-6">Founder & CEO</p>
          <ul className="space-y-3 mb-6 text-sm sm:text-base text-foreground/80">
            <li className="flex items-center gap-3"><CheckCircle2 className="size-5 text-primary" /> BS Civil Engineering</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="size-5 text-primary" /> MS Construction Management</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="size-5 text-primary" /> 3 Years Professional Field Experience</li>
          </ul>
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground leading-relaxed">
            "My vision is to bridge the gap between engineering excellence and field execution. 
            We bring professional management to every site, ensuring that every project is built 
            to the highest standards of quality and trust."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function LicenseSection() {
  return (
    <section className="relative overflow-hidden border-y border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_420px] lg:px-8">
        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">Company Registration</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Rehman Construction &amp; Enterprises (SMC-Private) Limited
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Rehman Construction &amp; Enterprises (SMC-Private) Limited is a formally incorporated company
            registered with the Securities and Exchange Commission of Pakistan (SECP) under the Companies Act,
            2017.
          </p>
          <div className="mt-6 max-w-2xl rounded-2xl border border-primary/30 bg-card/70 p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
              Security Exchange and Commission of Pakistan
            </div>
            <div className="mt-2 text-lg font-extrabold text-foreground">SECP Registration</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Officially registered and licensed under the Securities and Exchange Commission of Pakistan,
              maintaining legal standing and professional accountability.
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our incorporation reflects our commitment to operating with professionalism, transparency and
            accountability while delivering quality construction and enterprise solutions to our clients.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { k: "Entity", v: "SMC-Private Limited" },
              { k: "Authority", v: "SECP" },
              { k: "Legal Framework", v: "Companies Act, 2017" },
              { k: "Business Focus", v: "Construction & Enterprise" },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl border border-primary/30 bg-card p-5">
                <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{item.k}</dt>
                <dd className="mt-2 text-lg font-extrabold text-primary">{item.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Award className="size-4 text-primary" /> Registered and operating with professional accountability
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-[1.5rem] border border-primary/40 bg-card p-3 shadow-xl">
              <div className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                Official Certificate
              </div>
              <a href={img.certificate} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-[1.1rem]">
                <img
                  src={img.license}
                  alt="Official certificate and company registration document of Rehman Construction & Enterprises"
                  width={900}
                  height={1270}
                  loading="lazy"
                  className="w-full rounded-[1.1rem] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href={img.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-primary/40 bg-background px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/5"
              >
                <Eye className="size-4" />
                View
              </a>
              <a
                href={img.certificate}
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                <Download className="size-4" />
                Download
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
            eyebrow="Contact Us"
            title="Request a Consultation"
            intro="Fill out the form below or reach us directly."
          />
        <div className="mt-12 flex flex-col lg:flex-row gap-12">
           <div className="lg:w-1/3 space-y-8">
              <div>
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Phone className="size-5 text-primary"/> Direct Contact</h4>
                 <p className="text-muted-foreground">{site.phone}</p>
                 <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-bold mt-2 inline-block">WhatsApp Us &rarr;</a>
              </div>
              <div>
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Mail className="size-5 text-primary"/> Email</h4>
                 <p className="text-muted-foreground">{site.email}</p>
              </div>
              <div>
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><MapPin className="size-5 text-primary"/> Location</h4>
                 <p className="text-muted-foreground">{site.address}</p>
              </div>
           </div>
           <div className="lg:w-2/3 bg-card p-8 rounded-2xl border border-border">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold">Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary" placeholder="Your Name" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold">Phone / WhatsApp</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary" placeholder="Your Phone Number" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold">Project Location</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary" placeholder="E.g. DHA Phase 2" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold">Plot Size</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary" placeholder="E.g. 10 Marla, 1 Kanal" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold">Type of Construction</label>
                    <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary">
                       <option>Residential</option>
                       <option>Commercial</option>
                       <option>Renovation</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold">Scope</label>
                    <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary">
                       <option>Grey Structure</option>
                       <option>Complete Construction</option>
                    </select>
                 </div>
                 <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-semibold">Estimated Budget (Optional)</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary" placeholder="E.g. 1 Crore - 2 Crore" />
                 </div>
                 <div className="sm:col-span-2 mt-4">
                    <button type="submit" className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-accent transition-colors">
                       Submit Inquiry
                    </button>
                 </div>
              </form>
           </div>
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

      {/* About Us Section */}
      <AboutSection />

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

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Construction Cost Calculator */}
      <section className="py-20 lg:py-28 border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Cost estimate"
            title="Estimate your build cost"
            intro="Pick a plot size or enter your covered area for an indicative architecture + grey structure + finishing estimate."
          />
          <div className="mt-12">
            <CostCalculatorPanel />
          </div>
        </div>
      </section>

      {/* Meet CEO */}
      <CeoSection />

      {/* PEC Licence */}
      <LicenseSection />

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

      {/* Contact Section */}
      <ContactSection />

      <TrustedPartners />

      <CtaBand />
    </>
  );
}
