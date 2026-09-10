import { a as img, l as services } from "./utils-DDQnUUa-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, E as Calculator, O as Building2, S as Compass, _ as Hammer, h as House, l as Paintbrush, m as Layers, w as ClipboardList } from "../_libs/lucide-react.mjs";
import { a as Reveal, n as CtaBand, o as SectionHeading, r as PageHero } from "./PageBits-DvXAwY8g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Czsb9_k3.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	"residential-construction": House,
	"commercial-projects": Building2,
	"grey-structure": Layers,
	"finishing-works": Paintbrush,
	renovation: Hammer,
	"project-management": ClipboardList,
	"cost-estimation": Calculator,
	"construction-consultancy": Compass
};
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Our Services",
			intro: "Everything a building needs — from the first estimate to the handover keys — delivered by one accountable team.",
			image: img.spanishVilla
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "What we do",
					title: "Eight disciplines, one contract",
					intro: "Each service is delivered with engineered planning, documented quality checks and transparent quantities."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3",
					children: services.map((s, i) => {
						const Icon = icons[s.slug] ?? House;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "lit-panel flex h-full flex-col overflow-hidden bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: s.title,
									loading: "lazy",
									className: "aspect-16/10 w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 text-lg font-bold",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
											children: s.body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "mt-5 inline-flex items-center gap-2 self-start rounded-full border border-primary/50 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
											children: ["Request consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
										})
									]
								})]
							})
						}, s.slug);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Tell us your plot size and budget",
			body: "We will come back with a plan, a timeline and an honest cost range."
		})
	] });
}
//#endregion
export { ServicesPage as component };
