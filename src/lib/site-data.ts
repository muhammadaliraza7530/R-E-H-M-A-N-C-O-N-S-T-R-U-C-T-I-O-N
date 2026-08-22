/**
 * Single source of truth for all site content.
 * Photography lives in /public; the brand mark is a CDN asset pointer.
 */
import logoAsset from "@/assets/rehman-logo.jpeg.asset.json";

export const img = {
  logo: logoAsset.url,

  // Photoreal hero / feature photography
  spanishVilla: "/homes/hero-spanish.jpg",
  luxuryVilla: "/homes/hero-villa.jpg",
  luxuryHouse: "/homes/hero-luxury.jpg",
  courtyard: "/homes/hero-courtyard.jpg",

  // Real house photography
  modernVilla: "/homes/home-1.jpg",
  classicMansion: "/homes/home-2.jpg",
  greyClassic: "/homes/home-3.jpg",
  completedVilla: "/homes/home-4.jpg",
  brickFront: "/homes/home-5.jpg",
};

export const site = {
  name: "Rehman Construction",
  short: "Rehman",
  fullName: "Rehman Construction & Enterprises — Quality, Trust, Excellence",
  tagline: "Quality · Trust · Excellence",
  logo: img.logo,
  address: "Islamabad, Pakistan — 44000",
  addressShort: "Islamabad & Rawalpindi",
  email: "rehmanconstruction87@gmail.com",
  phone: "+92 336 5949802",
  phoneTel: "+923365949802",
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
  whatsapp:
    "https://wa.me/923365949802?text=Hello%20Rehman%20Construction%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.",
  hours: [
    { day: "Monday to Thursday", time: "9am to 7pm" },
    { day: "Friday", time: "9am to 12pm & 3pm to 7pm" },
    { day: "Saturday", time: "9am to 5pm" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    title: "We build your dreams",
    highlight:
      "A construction house built on three words — quality, trust, excellence. Grey structure to final handover, executed by one accountable team.",
    image: img.luxuryVilla,
  },
  {
    title: "We build trust",
    highlight:
      "No subcontracted confusion, no hidden variations. Our own supervisors run the site and the client sees the same rate sheet we work from.",
    image: img.spanishVilla,
  },
  {
    title: "Built to outlast",
    highlight:
      "Certified steel, graded concrete and disciplined workmanship down to the rebar — buildings made to stand for generations.",
    image: img.luxuryHouse,
  },
  {
    title: "Concrete, steel and a promise",
    highlight:
      "Full-service construction across Islamabad and Rawalpindi — a plot, a drawing or a half-built shell handed back as a finished building.",
    image: img.courtyard,
  },
];

export const stats = [
  { value: "10+", label: "Years on site" },
  { value: "150+", label: "Projects delivered" },
  { value: "100%", label: "Client retention" },
];

/** Branded social posts — shown full-frame, never cropped. */
export const posts = [
  { image: "/posts/post-1.jpg", title: "Modern Facade Residence", location: "Islamabad", tag: "Coming Soon" },
  { image: "/posts/post-2.jpg", title: "Crafting Classic Beauty", location: "Rawalpindi", tag: "In Progress" },
  { image: "/posts/post-3.jpg", title: "Concept to Creation", location: "Islamabad", tag: "In Progress" },
  { image: "/posts/post-4.jpg", title: "Classical Grand Residence", location: "Bahria Town", tag: "Coming Soon" },
  { image: "/posts/post-5.jpg", title: "Turnkey Villa Handover", location: "Islamabad", tag: "Completed" },
  { image: "/posts/post-6.jpg", title: "Building Dreams", location: "Rawalpindi", tag: "Under Construction" },
  { image: "/posts/post-7.jpg", title: "Constructing Excellence", location: "Islamabad", tag: "Under Construction" },
  { image: "/posts/post-8.jpg", title: "Grey Structure — Night", location: "Bahria Town", tag: "Coming Soon" },
  { image: "/posts/post-9.jpg", title: "Premium Elevation", location: "Islamabad", tag: "Coming Soon" },
];

export const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner · DHA Phase 2, Islamabad",
    quote:
      "They handled drawings, material and labour themselves. I never had to chase three different people — the house looks exactly like the plan they showed me.",
  },
  {
    name: "Sana Iqbal",
    role: "Homeowner · Bahria Town, Rawalpindi",
    quote:
      "The elevation work is beautiful and the finishing is clean. Weekly site photos meant I always knew what was happening on my plot.",
  },
  {
    name: "Bilal Hussain",
    role: "Developer · Islamabad",
    quote:
      "Professional team, honest quantities and on-time slabs. We handed them a second plaza before the first one was even finished.",
  },
  {
    name: "Hira Nadeem",
    role: "Homeowner · G-13, Islamabad",
    quote:
      "Finishing was executed by the same team that built the structure, so nothing had to be broken and redone.",
  },
  {
    name: "Usman Tariq",
    role: "Homeowner · Gulraiz, Rawalpindi",
    quote:
      "Renovation of a 20-year-old house — new facade, new layout, finished in time and within the range they quoted.",
  },
];

export const services = [
  {
    slug: "residential-construction",
    title: "Residential Construction",
    image: img.luxuryHouse,
    short: "Custom homes and villas delivered end to end — structure, elevation, interior finish.",
    body: "Custom homes and villas delivered end to end — structure, elevation and interior finish. One contract, one supervisor and one rate sheet from excavation to handover keys.",
  },
  {
    slug: "commercial-projects",
    title: "Commercial Projects",
    image: img.classicMansion,
    short: "Plazas, offices and retail units built to commercial-grade codes and timelines.",
    body: "Plazas, offices and retail units built to commercial-grade codes and timelines, with procurement and labour planning that keeps a commercial programme on schedule.",
  },
  {
    slug: "renovation",
    title: "Renovation & Remodeling",
    image: img.completedVilla,
    short: "Structural upgrades and modern detailing that give existing spaces a second life.",
    body: "Structural upgrades and modern detailing that give existing spaces a second life — re-elevated, remodelled and finished without you leaving the neighbourhood you love.",
  },
  {
    slug: "grey-structure",
    title: "Grey Structure",
    image: img.brickFront,
    short: "Certified steel, graded concrete and disciplined workmanship down to the rebar.",
    body: "Certified steel, graded concrete and disciplined workmanship down to the rebar. Our own quality checks sign off every pour before the next stage begins.",
  },
  {
    slug: "finishing-works",
    title: "Finishing Works",
    image: img.greyClassic,
    short: "Tiling, woodwork, false ceiling, lighting and paint executed with a designer's eye.",
    body: "Tiling, woodwork, false ceiling, lighting and paint executed with a designer's eye — the detail stage where a building finally becomes a home.",
  },
  {
    slug: "project-management",
    title: "Project Management",
    image: img.spanishVilla,
    short: "One point of accountability for budget, procurement, labour and quality control.",
    body: "One point of accountability for budget, procurement, labour and quality control, so the client never has to arbitrate between contractors.",
  },
];

export const registrations = [
  "Islamabad",
  "Rawalpindi",
  "Residential Construction",
  "Commercial Projects",
  "Grey Structure",
  "Finishing Works",
];

export const process = [
  { step: "01", title: "Consultation", body: "We discuss your plot, budget and requirements — in person or on WhatsApp." },
  { step: "02", title: "Costing", body: "A realistic costing and construction schedule, free of charge, before anything starts." },
  { step: "03", title: "Execution", body: "Grey structure and finishing delivered by our own supervised site teams." },
  { step: "04", title: "Handover", body: "Final finishing, cleaning and a walk-through before your keys are handed over." },
];

export const galleryImages = [
  img.luxuryVilla,
  img.spanishVilla,
  img.luxuryHouse,
  img.courtyard,
  img.modernVilla,
  img.classicMansion,
  img.greyClassic,
  img.completedVilla,
  img.brickFront,
];
