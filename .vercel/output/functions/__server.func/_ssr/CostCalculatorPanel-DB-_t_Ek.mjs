import { r as __toESM } from "../_runtime.mjs";
import { u as site } from "./utils-DDQnUUa-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, D as Building, E as Calculator, a as Ruler, c as PencilRuler, f as MapPin, l as Paintbrush } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CostCalculatorPanel-DB-_t_Ek.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RATES = {
	architecture: {
		low: 100,
		high: 180
	},
	grey: {
		low: 3100,
		high: 3500
	},
	finishing: {
		low: 2750,
		high: 3500
	}
};
var PLOTS = [
	{
		name: "5 Marla",
		area: 2250
	},
	{
		name: "7 Marla",
		area: 3150
	},
	{
		name: "8 Marla",
		area: 3600
	},
	{
		name: "10 Marla",
		area: 4500
	},
	{
		name: "14 Marla",
		area: 6300
	},
	{
		name: "1 Kanal",
		area: 9e3
	},
	{
		name: "2 Kanal",
		area: 18e3
	}
];
var SERVICES = [
	{
		key: "architecture",
		name: "Architectural Services",
		desc: "Design & drawings",
		icon: PencilRuler
	},
	{
		key: "grey",
		name: "Grey Structure",
		desc: "Excavation to roof level",
		icon: Building
	},
	{
		key: "finishing",
		name: "Finishing Works",
		desc: "Complete finishing",
		icon: Paintbrush
	}
];
var fmt = (n) => Math.round(n).toLocaleString("en-PK");
function words(n) {
	if (n >= 1e7) return `${(n / 1e7).toFixed(2)} Crore`;
	if (n >= 1e5) return `${(n / 1e5).toFixed(1)} Lac`;
	return `${fmt(n)} PKR`;
}
function CostCalculatorPanel({ onNavigate }) {
	const [plotIdx, setPlotIdx] = (0, import_react.useState)(0);
	const [area, setArea] = (0, import_react.useState)(PLOTS[0].area);
	const [customArea, setCustomArea] = (0, import_react.useState)(String(PLOTS[0].area));
	const pickPlot = (i) => {
		setPlotIdx(i);
		setArea(PLOTS[i].area);
		setCustomArea(String(PLOTS[i].area));
	};
	const onAreaChange = (v) => {
		setCustomArea(v);
		const n = parseInt(v.replace(/\D/g, ""), 10);
		if (n > 0) setArea(n);
	};
	const calc = (0, import_react.useMemo)(() => {
		const rows = SERVICES.map((s) => ({
			...s,
			low: RATES[s.key].low * area,
			high: RATES[s.key].high * area
		}));
		const low = rows.reduce((a, r) => a + r.low, 0);
		const high = rows.reduce((a, r) => a + r.high, 0);
		return {
			rows,
			low,
			high,
			pct: rows.map((r) => Math.round((r.low + r.high) / 2 / ((low + high) / 2) * 100))
		};
	}, [area]);
	const waText = encodeURIComponent(`Hello Rehman Construction, I used your cost calculator:\nPlot: ${PLOTS[plotIdx].name} (${fmt(area)} sq.ft covered)\nEstimate: ${fmt(calc.low)} – ${fmt(calc.high)} PKR\nI would like to discuss my project.`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "lit-panel overflow-hidden bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[280px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "min-w-0 border-b border-border p-5 sm:p-8 lg:border-b-0 lg:border-r",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground",
						children: "Plot size"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-1",
						children: PLOTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => pickPlot(i),
							className: `reg-chip rounded-xl border border-border px-4 py-3 text-left transition-colors ${i === plotIdx ? "is-on border-primary bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-bold uppercase tracking-wide",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-[11px] text-muted-foreground",
								children: [fmt(p.area), " sq.ft covered"]
							})]
						}, p.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-muted/40 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "area",
								className: "flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { className: "size-3.5 text-primary" }), " Covered area (sq.ft)"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "area",
								inputMode: "numeric",
								suppressHydrationWarning: true,
								value: customArea,
								onChange: (e) => onAreaChange(e.target.value),
								className: "mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-lg font-bold tabular-nums outline-none focus:border-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[11px] text-muted-foreground",
								children: "Approximate — edit for your exact covered area."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 p-5 sm:p-8 lg:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-base font-extrabold uppercase tracking-wide sm:text-xl",
							children: [
								PLOTS[plotIdx].name,
								" House ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "— Cost Breakdown"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary" }), " Bahria Town · DHA · CDA Sectors"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 -mx-1 overflow-x-auto px-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[340px] text-xs sm:min-w-[520px] sm:text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-left text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-3 pr-4",
										children: "Service"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-3 pr-4",
										children: "Rate (PKR/sq.ft)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-3 pr-4",
										children: "Lower end"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-3",
										children: "Higher end"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: calc.rows.map((r) => {
								const Icon = r.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-4 pr-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid size-9 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block font-bold",
													children: r.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs text-muted-foreground",
													children: r.desc
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-4 pr-4 tabular-nums text-muted-foreground",
											children: [
												RATES[r.key].low.toLocaleString(),
												" – ",
												RATES[r.key].high.toLocaleString()
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-4 pr-4 font-bold tabular-nums",
											children: fmt(r.low)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-4 font-bold tabular-nums",
											children: fmt(r.high)
										})
									]
								}, r.key);
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-muted/40 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground",
									children: "Lower end total"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-2xl font-extrabold tabular-nums sm:text-3xl",
									children: ["PKR ", fmt(calc.low)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs font-semibold text-primary",
									children: words(calc.low)
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-primary/40 bg-primary/10 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground",
									children: "Higher end total"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-2xl font-extrabold tabular-nums text-primary sm:text-3xl",
									children: ["PKR ", fmt(calc.high)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs font-semibold text-primary",
									children: words(calc.high)
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground",
								children: "Cost distribution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex h-3 overflow-hidden rounded-full border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { width: `${calc.pct[0]}%` },
										className: "bg-[#1D6FD0]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { width: `${calc.pct[1]}%` },
										className: "bg-[#4A5566]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { width: `${calc.pct[2]}%` },
										className: "bg-primary"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2.5 rounded-full bg-[#1D6FD0]" }),
											"Architecture ",
											calc.pct[0],
											"%"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2.5 rounded-full bg-[#4A5566]" }),
											"Grey structure ",
											calc.pct[1],
											"%"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2.5 rounded-full bg-primary" }),
											"Finishing ",
											calc.pct[2],
											"%"
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${site.phoneTel.replace("+", "")}?text=${waText}`,
						target: "_blank",
						rel: "noreferrer",
						className: "sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent sm:px-8 sm:py-4 sm:text-xs",
						children: ["Get exact quote on WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mt-8 max-w-3xl text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-start justify-center gap-2 text-xs leading-relaxed text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "mt-0.5 size-4 shrink-0 text-primary" }), "Estimates are indicative for standard-grade construction and vary with design, material selection and site conditions. Contact us for a detailed BOQ-based quotation for your plot."]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/contact",
			onClick: onNavigate,
			className: "mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary hover:underline",
			children: ["Request a detailed quotation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
		})]
	})] });
}
//#endregion
export { CostCalculatorPanel as t };
