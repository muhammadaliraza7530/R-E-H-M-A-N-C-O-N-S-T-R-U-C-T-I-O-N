import { r as __toESM } from "../_runtime.mjs";
import { n as cn } from "./utils-DDQnUUa-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageBits-DvXAwY8g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useInView(threshold = .15) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setInView(true);
				io.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [threshold]);
	return {
		ref,
		inView
	};
}
function Reveal({ children, className, delay = 0 }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", inView && "is-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SectionHeading({ eyebrow, title, intro, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs", align === "center" && "justify-center"),
				children: [align === "left" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 shrink-0 bg-primary" }), eyebrow]
			}),
			title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-2xl leading-[1.1] sm:text-4xl lg:text-5xl",
				children: title
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
				children: intro
			})
		]
	});
}
function Counter({ value, className }) {
	const ref = (0, import_react.useRef)(null);
	const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
	const prefix = match?.[1] ?? "";
	const numStr = match?.[2] ?? "";
	const suffix = match?.[3] ?? "";
	const target = Number(numStr.replace(/,/g, ""));
	const valid = !!match && !Number.isNaN(target);
	const [display, setDisplay] = (0, import_react.useState)(() => valid ? "0" : value);
	(0, import_react.useEffect)(() => {
		if (!valid) return;
		const el = ref.current;
		if (!el) return;
		let raf = 0;
		let started = false;
		const run = () => {
			started = true;
			const start = performance.now();
			const step = (now) => {
				const p = Math.min((now - start) / 1600, 1);
				const eased = 1 - (1 - p) ** 3;
				setDisplay(Math.round(target * eased).toString());
				if (p < 1) raf = requestAnimationFrame(step);
			};
			raf = requestAnimationFrame(step);
		};
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting) && !started) {
				run();
				io.disconnect();
			}
		}, { threshold: .3 });
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(raf);
		};
	}, [target, valid]);
	if (!valid) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: value
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [
			prefix,
			display,
			suffix
		]
	});
}
function PageHero({ eyebrow, title, intro, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[62vh] items-center overflow-hidden pb-16 pt-32 sm:min-h-[70vh] sm:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				"aria-hidden": true,
				fetchPriority: "high",
				decoding: "async",
				className: "absolute inset-0 size-full scale-105 object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "light-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-4xl px-5 text-center lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-2xl font-extrabold uppercase leading-[1.1] sm:text-4xl lg:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: intro
					})
				] })
			})
		]
	});
}
function CtaBand({ title = "Ready to start your project?", body = "Share your plot size, location and budget — our team will prepare a free consultation and estimate." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-t border-border bg-card/40 py-20 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-backdrop pointer-events-none absolute inset-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-3xl px-5 text-center lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl leading-tight sm:text-3xl lg:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "btn-shake sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent",
					children: ["Request a consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			] })
		})]
	});
}
function Prose({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
		children
	});
}
//#endregion
export { Reveal as a, Prose as i, CtaBand as n, SectionHeading as o, PageHero as r, Counter as t };
