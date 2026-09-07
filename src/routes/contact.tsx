import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Facebook, Clock } from "lucide-react";
import { img, site } from "@/lib/site-data";
import { PageHero } from "@/components/PageBits";
import { SectionHeading, Reveal } from "@/components/ui-bits";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rehman Construction — Call +92 336 5949802, Islamabad" },
      {
        name: "description",
        content:
          "Request a quote from Rehman Construction & Enterprises. Call +92 336 5949802, message us on WhatsApp or email rehmanconstruction87@gmail.com.",
      },
      { property: "og:title", content: "Request a Quote — Rehman Construction & Enterprises" },
      { property: "og:description", content: "Call +92 336 5949802 or message us on WhatsApp to start your project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Quote"
        intro="Share your plot size, location and budget — we will prepare a free consultation and an honest estimate."
        image={img.luxuryVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.6fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Talk to us" title="Contact & WhatsApp" />
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={`tel:${site.phoneTel}`} className="text-muted-foreground hover:text-primary">{site.phone}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    Message us directly
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-primary">{site.email}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Facebook className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Facebook</p>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    Rehman Construction & Enterprises
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Service area</p>
                  <p className="text-muted-foreground">{site.addressShort}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Working hours</p>
                  <ul className="mt-1 space-y-1 text-muted-foreground">
                    {site.hours.map((h) => (
                      <li key={h.day}>{h.day}: {h.time}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
            >
              <MessageCircle className="size-4" /> WhatsApp us
            </a>
          </div>

          <Reveal>
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
