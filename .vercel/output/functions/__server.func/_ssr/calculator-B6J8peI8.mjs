import { a as img } from "./utils-DDQnUUa-.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Reveal, o as SectionHeading, r as PageHero } from "./PageBits-DvXAwY8g.mjs";
import { t as CostCalculatorPanel } from "./CostCalculatorPanel-DB-_t_Ek.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calculator-B6J8peI8.js
var import_jsx_runtime = require_jsx_runtime();
function CalculatorPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Cost Calculator",
		title: "Construction Cost Estimate",
		intro: "Transparent per-sq.ft rates for Bahria Town, DHA and CDA sectors — pick your plot size and see a complete architecture + grey structure + finishing estimate.",
		image: img.luxuryVilla
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "center",
				eyebrow: "Residential project feasibility",
				title: "Select your plot size",
				intro: "Standard grade rates, updated for the current market. Click any plot to see its full cost breakdown."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostCalculatorPanel, {})
			})]
		})
	})] });
}
//#endregion
export { CalculatorPage as component };
