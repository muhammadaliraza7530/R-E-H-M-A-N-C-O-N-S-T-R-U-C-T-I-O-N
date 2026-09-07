import { Reveal, SectionHeading } from "@/components/ui-bits";

// Logos live in /public/partners so they ship with the project and work on any
// host (Vercel, Netlify, Lovable) without external CDN dependencies.
const partners = [
  { name: "Berger Paints", url: "/partners/berger-paint-logo.jpg" },
  { name: "Kansai Paint", url: "/partners/kansai-paint-logo.jpg" },
  { name: "Pakistan Cables", url: "/partners/pakistan-cables-logo.jpg" },
  { name: "GM Cables", url: "/partners/gm-cables-logo.png" },
  { name: "Master Sanitary", url: "/partners/master-sanitory-logo.jpg" },
  { name: "Faisal Sanitary", url: "/partners/faisal-sanitory-logo.jpg" },
  { name: "Ghani Ceramics Tiles", url: "/partners/ghani-ceramics-tiles-logo.jpg" },
  { name: "Oreal Ceramics Tiles", url: "/partners/oreal-ceramics-tiles.jpg" },
  { name: "S Tiles Company", url: "/partners/s-tiles-company-logo.png" },
  { name: "Dura Flow", url: "/partners/dura-flow-logo.png" },
  { name: "Turck Plast", url: "/partners/turck-plast-logo-pic.png" },
  { name: "Porta", url: "/partners/porta-company.png" },
  { name: "ZRK", url: "/partners/zrk-logo.jpg" },
];

export function TrustedPartners() {
  return (
    <section className="border-y border-border bg-card/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our trusted partners"
          intro="We build with genuine, premium-grade products from these trusted brands — no substitutes, no compromise."
        />

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={(i % 5) * 70}>
              <div className="lit-panel flex h-full flex-col items-center justify-between gap-4 bg-card p-5">
                <div className="flex h-24 w-full items-center justify-center overflow-hidden rounded-md bg-background/60 p-3">
                  <img
                    src={p.url}
                    alt={`${p.name} logo`}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-center text-sm font-semibold leading-tight">{p.name}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
          100% original products · Premium quality guaranteed
        </p>
      </div>
    </section>
  );
}
