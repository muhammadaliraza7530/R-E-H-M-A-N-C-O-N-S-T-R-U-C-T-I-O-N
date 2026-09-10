import { r as __toESM } from "../_runtime.mjs";
import { a as img } from "./utils-DDQnUUa-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as Clock, a as Ruler, f as MapPin } from "../_libs/lucide-react.mjs";
import { a as Reveal, n as CtaBand, o as SectionHeading, r as PageHero } from "./PageBits-DvXAwY8g.mjs";
import { n as projectCategories, r as projects } from "./site-CGdEMu5M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects.index-BxacNZpy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const [filter, setFilter] = (0, import_react.useState)("All Projects");
	const list = filter === "All Projects" ? projects : projects.filter((p) => p.tags.includes(filter));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Portfolio",
			title: "Featured Projects",
			intro: "Completed, ongoing and renovation work — with the location, scope and timeline behind every build.",
			image: img.luxuryHouse
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "center",
						eyebrow: "Our projects",
						title: "Browse by category"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-3",
						children: projectCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(c),
							className: `reg-chip rounded-full border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] ${filter === c ? "is-on border-primary text-primary" : "border-border text-muted-foreground"}`,
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3",
						children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects/$slug",
								params: { slug: p.slug },
								className: "lit-panel flex h-full flex-col overflow-hidden bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: `${p.title}, ${p.location}`,
									loading: "lazy",
									className: "aspect-4/3 w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-bold uppercase tracking-[0.22em] text-primary",
											children: p.status
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-lg font-bold",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-3 space-y-1.5 text-xs text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary" }),
														" ",
														p.location
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { className: "size-3.5 text-primary" }),
														" ",
														p.projectType
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-primary" }),
														" ",
														p.duration
													]
												})
											]
										})
									]
								})]
							})
						}, p.slug))
					}),
					list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 text-center text-sm text-muted-foreground",
						children: "No projects in this category yet — new work is added as it completes."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { ProjectsPage as component };
