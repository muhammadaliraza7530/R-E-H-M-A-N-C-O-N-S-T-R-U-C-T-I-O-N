import { a as img } from "./utils-DDQnUUa-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as Clock, a as Ruler, f as MapPin, g as HardHat, j as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as Reveal, i as Prose, n as CtaBand, r as PageHero } from "./PageBits-DvXAwY8g.mjs";
import { t as Route } from "./projects._slug-FkR3WvH4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-BjIeUibq.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { project } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: project.status,
			title: project.title,
			intro: project.blurb,
			image: project.image || img.luxuryVilla
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All projects"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								icon: MapPin,
								label: "Location",
								value: project.location
							},
							{
								icon: Ruler,
								label: "Project type",
								value: project.projectType
							},
							{
								icon: HardHat,
								label: "Scope of work",
								value: project.scope
							},
							{
								icon: Clock,
								label: "Duration",
								value: project.duration
							}
						].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lit-panel h-full bg-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "size-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground",
										children: d.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold leading-relaxed",
										children: d.value
									})
								]
							})
						}, d.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold sm:text-2xl",
								children: "Progress gallery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Before, during and after — photographed on site."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-3",
								children: project.gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
										className: "lit-panel overflow-hidden bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: g,
											alt: `${project.title} — stage ${i + 1}`,
											loading: "lazy",
											className: "aspect-4/3 w-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
											className: "p-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
											children: [
												"Before",
												"In progress",
												"After"
											][i] ?? "On site"
										})]
									})
								}, g + i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.blurb }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every stage on this project was supervised by our own team, with material approvals and inspection sign-off before the next stage began." })] })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { ProjectDetail as component };
