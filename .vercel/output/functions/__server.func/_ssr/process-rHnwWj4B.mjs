import { a as img, c as process } from "./utils-DDQnUUa-.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Reveal, n as CtaBand, o as SectionHeading, r as PageHero } from "./PageBits-DvXAwY8g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-rHnwWj4B.js
var import_jsx_runtime = require_jsx_runtime();
function BlueprintTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-backdrop pointer-events-none absolute inset-0 opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:block" }), process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-5 pb-10 sm:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 hidden size-12 shrink-0 place-items-center rounded-full border border-primary/50 bg-background text-xs font-bold tracking-[0.1em] text-primary sm:grid",
							children: p.step
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lit-panel w-full bg-card p-6 sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] font-bold uppercase tracking-[0.3em] text-primary sm:hidden",
									children: ["Step ", p.step]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-1 text-lg font-bold sm:text-xl",
									children: [
										"Step ",
										p.step,
										" — ",
										p.title
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.body
								})
							]
						})]
					})
				})
			}, p.step))]
		})]
	});
}
function ProcessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "How we work",
			title: "Our Construction Process",
			intro: "Six documented stages — so you always know what is happening on your plot and what comes next.",
			image: img.greyClassic
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "Blueprint",
					title: "From first consultation to handover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlueprintTimeline, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Start at step one",
			body: "Book a free consultation and we will prepare your plan and estimate."
		})
	] });
}
//#endregion
export { ProcessPage as component };
