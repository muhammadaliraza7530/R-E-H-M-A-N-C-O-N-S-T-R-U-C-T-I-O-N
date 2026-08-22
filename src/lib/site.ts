import { img, process as processSteps, services as serviceList } from "@/lib/site-data";

export const logoUrl = img.logo;

export const company = {
  name: "Rehman Construction & Enterprises",
  tagline: "Quality · Trust · Excellence",
  since: "Concrete, steel and a promise",
  phoneDisplay: "+92 336 5949802",
  phoneTel: "+923365949802",
  whatsapp:
    "https://wa.me/923365949802?text=Hello%20Rehman%20Construction%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.",
  email: "rehmanconstruction87@gmail.com",
  addressShort: "Islamabad & Rawalpindi",
  address: "Islamabad, Pakistan — 44000",
  hours: "Mon–Sat, 9am to 7pm",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "Completed" | "Under Construction" | "Upcoming";
  category: "Modern" | "Classic" | "Spanish" | "Grey Structure";
  image: string;
  gallery: string[];
  blurb: string;
};

export const projects: Project[] = [
  {
    slug: "modern-luxury-villa",
    title: "Modern Luxury Villa",
    location: "Residential — Islamabad",
    status: "Completed",
    category: "Modern",
    image: img.luxuryVilla,
    gallery: [img.luxuryVilla, img.luxuryHouse, img.modernVilla],
    blurb:
      "A turnkey villa delivered from excavation to handover — structure, elevation and full interior finish by one team.",
  },
  {
    slug: "contemporary-residence",
    title: "Contemporary Residence",
    location: "Turnkey — 1 Kanal",
    status: "Completed",
    category: "Modern",
    image: img.luxuryHouse,
    gallery: [img.luxuryHouse, img.modernVilla, img.brickFront],
    blurb:
      "A 1 Kanal turnkey residence with a travertine-and-graphite facade, black-framed glazing and a glass balcony.",
  },
  {
    slug: "classic-facade-home",
    title: "Classic Facade Home",
    location: "Residential — 10 Marla",
    status: "Completed",
    category: "Classic",
    image: img.classicMansion,
    gallery: [img.classicMansion, img.courtyard, img.completedVilla],
    blurb:
      "Columns, arched glazing and a double-height entrance foyer executed on a 10 Marla plot.",
  },
  {
    slug: "premium-elevation",
    title: "Premium Elevation",
    location: "Design & Build",
    status: "Under Construction",
    category: "Modern",
    image: img.spanishVilla,
    gallery: [img.spanishVilla, img.courtyard, img.classicMansion],
    blurb:
      "A design-and-build elevation package — stone, stucco and layered facade lighting detailed and installed in-house.",
  },
  {
    slug: "gate-and-facade-detail",
    title: "Gate & Facade Detail",
    location: "Finishing Works",
    status: "Completed",
    category: "Modern",
    image: img.brickFront,
    gallery: [img.brickFront, img.greyClassic, img.luxuryHouse],
    blurb:
      "Tiling, woodwork, lighting and paint on the entrance elevation — the detail stage done with a designer's eye.",
  },
  {
    slug: "grey-structure-handover",
    title: "Grey Structure Handover",
    location: "Structure — Bahria",
    status: "Under Construction",
    category: "Grey Structure",
    image: img.modernVilla,
    gallery: [img.modernVilla, img.greyClassic, img.brickFront],
    blurb:
      "Certified steel and graded concrete, poured and signed off stage by stage, handed over ready for finishing.",
  },
];

export const services = serviceList.map((s) => ({ title: s.title, body: s.body }));
export const process = processSteps;
