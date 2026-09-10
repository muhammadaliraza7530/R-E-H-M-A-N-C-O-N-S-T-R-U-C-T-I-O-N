import { r as __toESM } from "../_runtime.mjs";
import { a as img, c as process, d as stats, f as testimonials, i as heroSlides, l as services, n as cn, s as posts, u as site } from "./utils-DDQnUUa-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, T as CircleCheck, b as Eye, f as MapPin, g as HardHat, k as Award, o as Quote, p as Mail, r as ShieldCheck, s as Phone, x as Download } from "../_libs/lucide-react.mjs";
import { a as Reveal, n as CtaBand, o as SectionHeading, t as Counter } from "./PageBits-DvXAwY8g.mjs";
import { t as CostCalculatorPanel } from "./CostCalculatorPanel-DB-_t_Ek.mjs";
import { r as projects } from "./site-CGdEMu5M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DH3wVjfi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Continuously moving rail that can also be dragged with a finger or the mouse.
* Children are duplicated once so the loop is seamless.
*/
function AutoScroller({ children, speed = 60, className }) {
	const trackRef = (0, import_react.useRef)(null);
	const offset = (0, import_react.useRef)(0);
	const dragging = (0, import_react.useRef)(false);
	const lastX = (0, import_react.useRef)(0);
	const paused = (0, import_react.useRef)(false);
	const startX = (0, import_react.useRef)(0);
	const moved = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const track = trackRef.current;
		if (!track) return;
		let raf = 0;
		let prev = performance.now();
		const half = () => track.scrollWidth / 2 || 1;
		const tick = (now) => {
			const dt = (now - prev) / 1e3;
			prev = now;
			if (!paused.current && !dragging.current) offset.current -= speed * dt;
			const h = half();
			if (offset.current <= -h) offset.current += h;
			if (offset.current > 0) offset.current -= h;
			track.style.transform = `translate3d(${offset.current}px,0,0)`;
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [speed]);
	const onDown = (e) => {
		dragging.current = true;
		lastX.current = e.clientX;
		startX.current = e.clientX;
		moved.current = false;
		e.currentTarget.setPointerCapture(e.pointerId);
	};
	const onMove = (e) => {
		if (!dragging.current) return;
		const diff = e.clientX - lastX.current;
		offset.current += diff;
		lastX.current = e.clientX;
		if (Math.abs(e.clientX - startX.current) > 5) moved.current = true;
	};
	const onUp = (e) => {
		dragging.current = false;
		try {
			e.currentTarget.releasePointerCapture(e.pointerId);
		} catch {}
	};
	const onClickCapture = (e) => {
		if (moved.current) {
			e.preventDefault();
			e.stopPropagation();
			moved.current = false;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative w-full overflow-hidden", className),
		onPointerDown: onDown,
		onPointerMove: onMove,
		onPointerUp: onUp,
		onPointerCancel: onUp,
		onClickCapture,
		onMouseEnter: () => paused.current = true,
		onMouseLeave: () => paused.current = false,
		style: { touchAction: "pan-y" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: trackRef,
			className: "flex w-max gap-6 will-change-transform select-none",
			children: [children, children]
		})
	});
}
/**
* Branded social posts. Images are shown complete (object-contain) inside a
* fixed portrait frame so nothing is ever cropped or cut.
*/
function PostsRail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoScroller, {
		speed: 180,
		children: posts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "lit-panel flex h-full w-[260px] shrink-0 flex-col overflow-hidden bg-card sm:w-[320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/5] w-full overflow-hidden bg-black/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: `${p.title}, ${p.location}`,
					loading: "lazy",
					draggable: false,
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold uppercase tracking-[0.22em] text-primary",
						children: p.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 line-clamp-2 text-sm font-bold sm:text-base",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground sm:text-sm",
						children: p.location
					})
				]
			})]
		}, `${p.image}-${i}`))
	});
}
/**
* Client testimonials in a continuously moving, draggable rail — same motion
* language as the posts rail.
*/
function TestimonialsRail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoScroller, {
		speed: 45,
		children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "lit-panel flex h-full w-[300px] shrink-0 flex-col justify-between bg-card p-6 sm:w-[380px] sm:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
				className: "h-6 w-6 text-primary/60",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base",
				children: [
					"“",
					t.quote,
					"”"
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-6 border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-bold",
					children: t.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 text-xs text-muted-foreground",
					children: t.role
				})]
			})]
		}, `${t.name}-${i}`))
	});
}
var partners = [
	{
		name: "Berger Paints",
		url: "/partners/berger-paint-logo.jpg"
	},
	{
		name: "Kansai Paint",
		url: "/partners/kansai-paint-logo.jpg"
	},
	{
		name: "Pakistan Cables",
		url: "/partners/pakistan-cables-logo.jpg"
	},
	{
		name: "GM Cables",
		url: "/partners/gm-cables-logo.png"
	},
	{
		name: "Master Sanitary",
		url: "/partners/master-sanitory-logo.jpg"
	},
	{
		name: "Faisal Sanitary",
		url: "/partners/faisal-sanitory-logo.jpg"
	},
	{
		name: "Ghani Ceramics Tiles",
		url: "/partners/ghani-ceramics-tiles-logo.jpg"
	},
	{
		name: "Oreal Ceramics Tiles",
		url: "/partners/oreal-ceramics-tiles.jpg"
	},
	{
		name: "S Tiles Company",
		url: "/partners/s-tiles-company-logo.png"
	},
	{
		name: "Dura Flow",
		url: "/partners/dura-flow-logo.png"
	},
	{
		name: "Turck Plast",
		url: "/partners/turck-plast-logo-pic.png"
	},
	{
		name: "Porta",
		url: "/partners/porta-company.png"
	},
	{
		name: "ZRK",
		url: "/partners/zrk-logo.jpg"
	}
];
function TrustedPartners() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-card/30 py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our trusted partners",
					intro: "We build with genuine, premium-grade products from these trusted brands — no substitutes, no compromise."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
					children: partners.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 5 * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lit-panel flex h-full flex-col items-center justify-between gap-4 bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-24 w-full items-center justify-center overflow-hidden rounded-md bg-background/60 p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.url,
									alt: `${p.name} logo`,
									loading: "lazy",
									draggable: false,
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm font-semibold leading-tight",
								children: p.name
							})]
						})
					}, p.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: "100% original products · Premium quality guaranteed"
				})
			]
		})
	});
}
function HeroWordmark() {
	const words = ["REHMAN", "CONSTRUCTION"];
	let n = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "flex flex-wrap justify-center gap-x-[0.18em] gap-y-1 overflow-hidden text-[7vw] font-extrabold leading-none tracking-[0.05em] text-transparent sm:text-[7vw] lg:text-[5rem]",
		children: words.map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex gap-[0.06em]",
			children: word.split("").map((c, i) => {
				const delay = 140 + n++ * 60;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "letter-in ember-text inline-block",
					style: { animationDelay: `${delay}ms` },
					children: c
				}, `${c}-${i}`);
			})
		}, word))
	});
}
function Hero() {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6e3);
		return () => clearInterval(id);
	}, []);
	const slide = heroSlides[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[100svh] items-center overflow-hidden",
		children: [
			heroSlides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s.image,
				alt: s.title,
				width: 1920,
				height: 1280,
				fetchPriority: i === 0 ? "high" : "low",
				loading: i === 0 ? "eager" : "lazy",
				decoding: "async",
				className: `absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ${i === index ? "animate-slow-drift opacity-100" : "opacity-0"}`
			}, s.image)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "light-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-5xl px-5 pb-16 pt-32 text-center lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroWordmark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-primary/40 bg-background/60 px-6 py-3 backdrop-blur-sm",
						children: [
							"Quality",
							"Trust",
							"Excellence"
						].map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-4",
							children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-extrabold uppercase tracking-[0.3em] text-foreground sm:text-base",
								children: word
							})]
						}, word))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "animate-wipe-in mx-auto mt-8 max-w-3xl text-2xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl",
						children: slide.title
					}, slide.title),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-rise-in mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: slide.highlight
					}, slide.highlight),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects",
								className: "btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent",
								children: ["View our work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " WhatsApp us"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
								children: "View Our Services"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-12 flex max-w-lg justify-center gap-2",
						children: heroSlides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Show slide ${i + 1}`,
							onClick: () => setIndex(i),
							className: `h-1 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-primary" : "w-4 bg-foreground/25"}`
						}, s.image))
					})
				]
			})
		]
	});
}
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8 flex flex-col md:flex-row gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:w-1/2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Company Introduction",
						title: "Building More Than Structures — Building Trust",
						intro: "Rehman Construction is a modern construction management company with engineering expertise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are on a mission to redefine construction standards by providing transparent, high-quality, and professionally managed construction services. Our vision is to be the most trusted construction partner for residential and commercial projects." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Our Core Values:" }), " Quality commitment, professional execution, and unwavering trust. We don't just construct buildings, we build lasting relationships with our clients."] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent",
							children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:w-1/2 grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img.modernVilla,
					alt: "Modern Villa",
					className: "rounded-xl object-cover h-48 w-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img.completedVilla,
					alt: "Completed Villa",
					className: "rounded-xl object-cover h-48 w-full mt-8"
				})]
			})]
		})
	});
}
function WhyChooseUsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-20 lg:py-28 relative overflow-hidden border-y border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[url('/homes/hero-luxury.jpg')] opacity-15 bg-cover bg-center" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "light-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold sm:text-5xl text-foreground",
						children: "Why Choose Us?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-primary font-medium tracking-widest uppercase",
						children: "Engineered with Expertise. Built with Trust."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							title: "QUALITY",
							icon: Award,
							desc: "Professional workmanship."
						},
						{
							title: "TRUST",
							icon: ShieldCheck,
							desc: "Transparent communication."
						},
						{
							title: "EXCELLENCE",
							icon: CircleCheck,
							desc: "Attention to detail."
						},
						{
							title: "PROFESSIONAL MANAGEMENT",
							icon: HardHat,
							desc: "Proper planning and supervision."
						}
					].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center p-6 border border-border rounded-2xl bg-card backdrop-blur-sm hover:bg-card/90 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-12 text-primary mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold mb-2",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: r.desc
								})
							]
						})
					}, r.title))
				})]
			})
		]
	});
}
function CeoSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28 bg-card/30 border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 lg:px-8 flex flex-col md:flex-row items-center gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:w-1/3 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -inset-3 rounded-[2rem] bg-primary/15 blur-2xl",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-64 overflow-hidden rounded-[1.75rem] border border-primary/40 bg-card p-2 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.ceo,
							alt: "Sami Ur Rehman, Founder & CEO of Rehman Construction & Enterprises",
							width: 600,
							height: 750,
							loading: "lazy",
							className: "aspect-4/5 w-full rounded-[1.35rem] object-cover object-top"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-lg",
							children: "Founder & CEO"
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:w-2/3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold mb-2",
						children: "Sami Ur Rehman"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-bold tracking-widest uppercase text-sm mb-6",
						children: "Founder & CEO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 mb-6 text-sm sm:text-base text-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-primary" }), " BS Civil Engineering"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-primary" }), " MS Construction Management"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-primary" }), " 3 Years Professional Field Experience"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "border-l-4 border-primary pl-4 italic text-muted-foreground leading-relaxed",
						children: "\"My vision is to bridge the gap between engineering excellence and field execution. We bring professional management to every site, ensuring that every project is built to the highest standards of quality and trust.\""
					})
				]
			})]
		})
	});
}
function LicenseSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden border-y border-border py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs",
					children: "Company Registration & Licensing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-extrabold sm:text-4xl",
					children: "Corporate Compliance & Professional Registration"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 md:grid-cols-2",
				children: [{
					title: "SECP Registration (Securities and Exchange Commission of Pakistan)",
					caption: "Rehman Construction & Enterprises (SMC-Private) Limited is officially incorporated and registered under the Companies Act, 2017 with SECP, ensuring full corporate compliance, transparency, and business accountability.",
					image: "/public/SECP.png",
					link: "/SECP.pdf",
					label: "SECP"
				}, {
					title: "PEC License & Registration (Pakistan Engineering Council)",
					caption: "Registered with the Pakistan Engineering Council (PEC), demonstrating structural engineering expertise, certified standards, and professional site supervision.",
					image: "/PEC.png",
					link: "/PEC.pdf",
					label: "PEC"
				}].map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex h-full flex-col rounded-[2rem] border border-primary/30 bg-card p-6 shadow-xl transition-transform duration-500 hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary",
									children: card.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-7 text-primary" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-h-[170px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-extrabold leading-tight text-foreground",
									children: card.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
									children: card.caption
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 rounded-[1.5rem] border border-primary/30 bg-background p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: card.link,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group block overflow-hidden rounded-[1.1rem]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: card.image,
										alt: `${card.title} certificate`,
										width: 900,
										height: 1270,
										loading: "lazy",
										className: "w-full rounded-[1.1rem] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: card.link,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-primary/40 bg-background px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), "View"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: card.link,
									download: true,
									className: "inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground shadow transition-colors hover:bg-primary/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download"]
								})]
							})
						]
					})
				}, card.title))
			})]
		})
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28 bg-background relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact Us",
				title: "Request a Consultation",
				intro: "Fill out the form below or reach us directly."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col lg:flex-row gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:w-1/3 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "font-bold text-lg mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-primary" }), " Direct Contact"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: site.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-primary text-sm font-bold mt-2 inline-block",
								children: "WhatsApp Us →"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "font-bold text-lg mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-primary" }), " Email"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: site.email
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "font-bold text-lg mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-primary" }), " Location"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: site.address
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:w-2/3 bg-card p-8 rounded-2xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
						onSubmit: (e) => e.preventDefault(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary",
									placeholder: "Your Name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Phone / WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary",
									placeholder: "Your Phone Number"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Project Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary",
									placeholder: "E.g. DHA Phase 2"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Plot Size"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary",
									placeholder: "E.g. 10 Marla, 1 Kanal"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Type of Construction"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Residential" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Commercial" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Renovation" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Scope"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Grey Structure" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Complete Construction" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Estimated Budget (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-primary",
									placeholder: "E.g. 1 Crore - 2 Crore"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2 mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-accent transition-colors",
									children: "Submit Inquiry"
								})
							})
						]
					})
				})]
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card/30 py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 text-center sm:grid-cols-3 lg:px-8",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
					value: s.value,
					className: "ember-text text-4xl font-extrabold sm:text-5xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
					children: s.label
				})] }, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "What we do",
					title: "Six disciplines, one contract, one supervisor",
					intro: "Everything a building needs from excavation to handover keys."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoScroller, {
						speed: 180,
						children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 80,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "lit-panel flex h-full w-[280px] shrink-0 flex-col overflow-hidden bg-card sm:w-[360px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: s.title,
									loading: "lazy",
									className: "aspect-16/10 w-full shrink-0 object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col p-5 sm:p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold sm:text-lg",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm",
										children: s.short
									})]
								})]
							})
						}, s.slug))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28 border-y border-border bg-card/30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Cost estimate",
					title: "Estimate your build cost",
					intro: "Pick a plot size or enter your covered area for an indicative architecture + grey structure + finishing estimate."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostCalculatorPanel, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CeoSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LicenseSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our projects",
					title: "Recent projects across Islamabad and Rawalpindi",
					intro: "Drag with finger to scroll manually, or let it auto-play."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoScroller, {
					speed: 180,
					children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects/$slug",
						params: { slug: p.slug },
						className: "lit-panel flex h-full w-[280px] shrink-0 flex-col overflow-hidden bg-card sm:w-[360px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: `${p.title}, ${p.location}`,
							loading: "lazy",
							draggable: false,
							className: "aspect-4/3 w-full shrink-0 object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-[0.22em] text-primary",
									children: p.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1.5 text-base font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: p.location
								})
							]
						})]
					}, p.slug))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Latest posts",
					title: "Coming soon & on-site updates",
					intro: "Our published announcements, shown complete — nothing cropped."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostsRail, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our process",
					title: "Four clear stages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lit-panel h-full bg-card p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-4xl font-extrabold text-primary/25",
									children: p.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-lg font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.body
								})
							]
						})
					}, p.step))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Testimonials",
					title: "What our clients say",
					intro: "Families and developers who trusted us with their plot."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsRail, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedPartners, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { HomePage as component };
