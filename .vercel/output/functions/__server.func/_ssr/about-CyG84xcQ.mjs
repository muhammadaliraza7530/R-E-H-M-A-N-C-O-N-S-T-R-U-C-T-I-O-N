import { a as img, d as stats, p as whyChooseUs, r as founder } from "./utils-DDQnUUa-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, b as Eye, g as HardHat, k as Award, n as Target, r as ShieldCheck, v as GraduationCap } from "../_libs/lucide-react.mjs";
import { a as Reveal, i as Prose, n as CtaBand, o as SectionHeading, r as PageHero, t as Counter } from "./PageBits-DvXAwY8g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CyG84xcQ.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About us",
			title: "Building More Than Structures — Building Trust",
			intro: "A modern construction management company with engineering expertise, working across Islamabad and Rawalpindi.",
			image: img.courtyard
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Company introduction",
						title: "Engineered with Expertise. Built with Trust."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rehman Construction & Enterprises is a full-service construction company delivering residential and commercial projects from excavation to handover. We combine formal engineering training with day-to-day site discipline, so every stage is planned, measured and documented." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One contract, one supervisor and one rate sheet — our clients never have to arbitrate between a contractor, a labour team and a finishing crew." })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent",
						children: ["Request a consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.modernVilla,
							alt: "Completed modern residence",
							loading: "lazy",
							className: "h-56 w-full rounded-2xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.classicMansion,
							alt: "Classic facade residence",
							loading: "lazy",
							className: "mt-10 h-56 w-full rounded-2xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.greyClassic,
							alt: "Grey structure work in progress",
							loading: "lazy",
							className: "h-40 w-full rounded-2xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.completedVilla,
							alt: "Delivered villa",
							loading: "lazy",
							className: "mt-10 h-40 w-full rounded-2xl object-cover"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/60 py-20 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8",
				children: [
					{
						icon: Target,
						title: "Our mission",
						body: "To raise construction standards with transparent pricing, engineered planning and professionally managed sites."
					},
					{
						icon: Eye,
						title: "Our vision",
						body: "To be the most trusted construction partner for homeowners and developers across Islamabad and Rawalpindi."
					},
					{
						icon: ShieldCheck,
						title: "Quality commitment",
						body: "Certified steel, graded concrete and a documented inspection before every stage is signed off."
					}
				].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lit-panel h-full bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "size-9 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-bold",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: v.body
							})
						]
					})
				}, v.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "Core values",
					title: "Quality • Trust • Excellence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: whyChooseUs.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lit-panel h-full bg-card p-7 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold uppercase tracking-[0.2em] text-primary",
								children: r.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: r.body
							})]
						})
					}, r.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card/60 py-20 text-foreground lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[320px_1fr] lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-64 overflow-hidden rounded-3xl border border-primary/30 bg-card p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: founder.photo,
						alt: `${founder.name}, ${founder.role}`,
						className: "aspect-4/5 w-full rounded-2xl object-cover object-top"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs",
							children: "Founder & CEO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl font-extrabold sm:text-4xl",
							children: founder.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-2",
							children: founder.credentials.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-3.5" }),
									" ",
									c
								]
							}, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: founder.journey.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t }, t.slice(0, 24)))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-5 lg:px-8",
				children: [
					{
						icon: HardHat,
						label: "Professional site management"
					},
					{
						icon: Award,
						label: "Engineering-led planning"
					},
					{
						icon: ShieldCheck,
						label: "Documented quality control"
					}
				].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "size-4 text-primary" }),
						" ",
						b.label
					]
				}, b.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { AboutPage as component };
