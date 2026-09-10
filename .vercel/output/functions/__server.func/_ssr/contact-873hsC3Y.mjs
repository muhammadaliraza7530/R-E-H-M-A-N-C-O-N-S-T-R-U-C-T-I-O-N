import { r as __toESM } from "../_runtime.mjs";
import { a as img, u as site } from "./utils-DDQnUUa-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as Clock, f as MapPin, i as Send, p as Mail, s as Phone, u as MessageCircle, y as Facebook } from "../_libs/lucide-react.mjs";
import { a as Reveal, o as SectionHeading, r as PageHero } from "./PageBits-DvXAwY8g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-873hsC3Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
function InquiryForm({ compact = false }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const lines = [
			`Name: ${data.get("name")}`,
			`Phone/WhatsApp: ${data.get("phone")}`,
			`Project location: ${data.get("location")}`,
			`Plot size: ${data.get("plot")}`,
			`Type of construction: ${data.get("type")}`,
			`Scope: ${data.get("scope")}`,
			`Estimated budget: ${data.get("budget")}`,
			`Message: ${data.get("message") || "-"}`
		].join("\n");
		setSent(true);
		window.open(`https://wa.me/${site.phoneTel.replace("+", "")}?text=${encodeURIComponent(lines)}`, "_blank");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: `grid gap-5 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8 ${compact ? "" : "shadow-sm"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "name",
					className: "text-xs font-semibold uppercase tracking-[0.14em]",
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "name",
					name: "name",
					required: true,
					className: inputClass,
					placeholder: "Your name"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "phone",
					className: "text-xs font-semibold uppercase tracking-[0.14em]",
					children: "Phone / WhatsApp"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "phone",
					name: "phone",
					required: true,
					className: inputClass,
					placeholder: "03XX XXXXXXX"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "location",
					className: "text-xs font-semibold uppercase tracking-[0.14em]",
					children: "Project location"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "location",
					name: "location",
					required: true,
					className: inputClass,
					placeholder: "E.g. DHA Phase 2, Islamabad"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "plot",
					className: "text-xs font-semibold uppercase tracking-[0.14em]",
					children: "Plot size"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "plot",
					name: "plot",
					className: inputClass,
					placeholder: "E.g. 10 Marla, 1 Kanal"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "type",
					className: "text-xs font-semibold uppercase tracking-[0.14em]",
					children: "Type of construction"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "type",
					name: "type",
					className: inputClass,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Residential" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Commercial" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Renovation & Remodeling" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Consultancy only" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "scope",
					className: "text-xs font-semibold uppercase tracking-[0.14em]",
					children: "Scope"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "scope",
					name: "scope",
					className: inputClass,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Grey Structure" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Complete Construction" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Finishing Works Only" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "budget",
					className: "text-xs font-semibold uppercase tracking-[0.14em]",
					children: "Estimated budget"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "budget",
					name: "budget",
					className: inputClass,
					placeholder: "E.g. 1 Crore – 2 Crore"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "message",
					className: "text-xs font-semibold uppercase tracking-[0.14em]",
					children: "Anything else?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "message",
					name: "message",
					rows: 4,
					className: inputClass,
					placeholder: "Tell us about your project"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "sheen-on-hover inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent",
					children: ["Request a quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })]
				}), sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-center text-xs text-muted-foreground",
					children: [
						"Thank you — we opened WhatsApp with your details. You can also call ",
						site.phone,
						"."
					]
				})]
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Request a Quote",
		intro: "Share your plot size, location and budget — we will prepare a free consultation and an honest estimate.",
		image: img.luxuryVilla
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.6fr] lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Talk to us",
					title: "Contact & WhatsApp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-6 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${site.phoneTel}`,
								className: "text-muted-foreground hover:text-primary",
								children: site.phone
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-muted-foreground hover:text-primary",
								children: "Message us directly"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "text-muted-foreground hover:text-primary",
								children: site.email
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Facebook"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.facebook,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-muted-foreground hover:text-primary",
								children: "Rehman Construction & Enterprises"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Service area"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: site.addressShort
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Working hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-1 space-y-1 text-muted-foreground",
								children: site.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									h.day,
									": ",
									h.time
								] }, h.day))
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: site.whatsapp,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " WhatsApp us"]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {}) })]
		})
	})] });
}
//#endregion
export { ContactPage as component };
