/**
 * Single source of truth for all site content.
 * Photography and branding live in /public.
 */
export const img = {
  logo: "/logo.png",
  ceo: "/team/ceo.jpg",
  license: "/PEC.png",
  certificate: "/SECP.pdf",
  secpCertificate: "/SECP.png",
  secpPdf: "/SECP.pdf",
  pecCertificate: "/PEC.png",
  pecPdf: "/PEC.pdf",

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
  linkedin: "https://linkedin.com/",
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
  { to: "/calculator", label: "Cost Calculator" },
  { to: "/process", label: "Process" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const founder = {
  name: "Sami Ur Rehman",
  role: "Founder & CEO",
  photo: img.ceo,
  credentials: [
    "BS Civil Engineering",
    "MS Construction Management",
    "3 Years Professional Field Experience",
  ],
  journey: [
    "I started on site as a young engineer, measuring steel, checking mixes and learning that a building is only as honest as the people who pour it. That experience became the foundation of Rehman Construction & Enterprises.",
    "My vision is simple: bring proper engineering discipline and modern construction management to ordinary homeowners — transparent quantities, documented quality checks and one accountable team from excavation to handover.",
  ],
};

export const whyChooseUs = [
  { title: "Quality", body: "Professional workmanship, certified materials and stage-by-stage sign-off." },
  { title: "Trust", body: "Transparent communication, honest quantities and no hidden costs." },
  { title: "Excellence", body: "Attention to detail in structure, elevation and finishing." },
  { title: "Professional Management", body: "Proper planning, procurement and daily site supervision." },
];

export const blogPosts = [
  { slug: "cost-of-5-marla-house", title: "Cost of building a 5 Marla house", excerpt: "A realistic breakdown of grey structure and finishing costs on a 5 Marla plot in Islamabad and Rawalpindi.", image: img.brickFront, category: "Budgeting" },
  { slug: "grey-structure-guide", title: "Grey structure construction guide", excerpt: "What happens between excavation and plaster, and the checks that matter at every pour.", image: img.greyClassic, category: "Guide" },
  { slug: "select-a-contractor", title: "How to select a construction contractor", excerpt: "Questions to ask, documents to demand and warning signs to walk away from.", image: img.modernVilla, category: "Advice" },
  { slug: "material-quality", title: "Construction material quality", excerpt: "Steel grades, cement brands and aggregate quality — what actually changes the life of your house.", image: img.classicMansion, category: "Materials" },
  { slug: "mistakes-to-avoid", title: "House construction mistakes to avoid", excerpt: "The eight costly mistakes we see most often on private residential sites.", image: img.completedVilla, category: "Advice" },
  { slug: "modern-trends", title: "Modern house construction trends", excerpt: "Facade materials, layouts and energy choices shaping new homes right now.", image: img.luxuryHouse, category: "Design" },
  { slug: "plan-your-budget", title: "How to plan your construction budget", excerpt: "A stage-wise cashflow plan so your project never stops halfway.", image: img.courtyard, category: "Budgeting" },
];

export const heroSlides = [
  {
    title: "Building Your Vision Into Reality",
    highlight:
      "Quality Construction. Professional Management. Trusted Execution.",
    image: img.luxuryVilla,
  },
  {
    title: "Engineered with Expertise. Built with Trust.",
    highlight:
      "A modern construction management company with engineering expertise.",
    image: img.spanishVilla,
  },
  {
    title: "We Don't Just Construct Buildings — We Build Trust.",
    highlight:
      "Certified steel, graded concrete and disciplined workmanship down to the rebar.",
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
  { image: "/posts/post1.jpeg", title: "Modern Facade Residence", location: "Islamabad", tag: "Coming Soon" },
  { image: "/posts/post2.jpeg", title: "Crafting Classic Beauty", location: "Rawalpindi", tag: "In Progress" },
  { image: "/posts/post3.jpeg", title: "Concept to Creation", location: "Islamabad", tag: "In Progress" },
  { image: "/posts/post4.jpeg", title: "Classical Grand Residence", location: "Bahria Town", tag: "Coming Soon" },
  { image: "/posts/post5.jpeg", title: "Turnkey Villa Handover", location: "Islamabad", tag: "Completed" },
  { image: "/posts/post6.jpeg", title: "Building Dreams", location: "Rawalpindi", tag: "Under Construction" },
  { image: "/posts/post7.jpeg", title: "Constructing Excellence", location: "Islamabad", tag: "Under Construction" },
  { image: "/posts/post8.jpeg", title: "Grey Structure — Night", location: "Bahria Town", tag: "Coming Soon" },
  { image: "/posts/post9.jpeg", title: "Premium Elevation", location: "Islamabad", tag: "Coming Soon" },
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
    short: "Custom homes and villas delivered end to end.",
    body: "Custom homes and villas delivered end to end — structure, elevation and interior finish. One contract, one supervisor and one rate sheet from excavation to handover keys.",
  },
  {
    slug: "commercial-projects",
    title: "Commercial Construction",
    image: img.classicMansion,
    short: "Plazas, offices and retail units built to commercial-grade codes.",
    body: "Plazas, offices and retail units built to commercial-grade codes and timelines, with procurement and labour planning that keeps a commercial programme on schedule.",
  },
  {
    slug: "grey-structure",
    title: "Grey Structure",
    image: img.brickFront,
    short: "Certified steel, graded concrete and disciplined workmanship.",
    body: "Certified steel, graded concrete and disciplined workmanship down to the rebar. Our own quality checks sign off every pour before the next stage begins.",
  },
  {
    slug: "finishing-works",
    title: "Complete Finishing Works",
    image: img.greyClassic,
    short: "Tiling, woodwork, false ceiling, lighting and paint.",
    body: "Tiling, woodwork, false ceiling, lighting and paint executed with a designer's eye — the detail stage where a building finally becomes a home.",
  },
  {
    slug: "renovation",
    title: "Renovation & Remodeling",
    image: img.completedVilla,
    short: "Structural upgrades and modern detailing for existing spaces.",
    body: "Structural upgrades and modern detailing that give existing spaces a second life — re-elevated, remodelled and finished without you leaving the neighbourhood you love.",
  },
  {
    slug: "project-management",
    title: "Project Management & Supervision",
    image: img.spanishVilla,
    short: "One point of accountability for budget, procurement, and labour.",
    body: "One point of accountability for budget, procurement, labour and quality control, so the client never has to arbitrate between contractors.",
  },
  {
    slug: "cost-estimation",
    title: "Cost Estimation & Planning",
    image: img.modernVilla,
    short: "Accurate budgeting and execution plans.",
    body: "Comprehensive and accurate budgeting based on current market rates. We provide a transparent execution plan so you know exactly what your project will cost.",
  },
  {
    slug: "construction-consultancy",
    title: "Construction Consultancy",
    image: img.courtyard,
    short: "Expert engineering and management advice.",
    body: "Leverage our BS Civil Engineering and MS Construction Management background to ensure your project is planned and executed flawlessly.",
  }
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
  { step: "01", title: "Consultation", body: "Understand client requirements — in person or on WhatsApp." },
  { step: "02", title: "Planning & Estimation", body: "Prepare budget and execution plan." },
  { step: "03", title: "Design & Coordination", body: "Finalize drawings and requirements." },
  { step: "04", title: "Construction Execution", body: "Professional site management and supervision." },
  { step: "05", title: "Quality Control", body: "Regular inspection of workmanship and materials." },
  { step: "06", title: "Project Completion", body: "Deliver the completed project." },
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
