import { r as __toESM } from "../_runtime.mjs";
import { n as cn, o as navLinks, u as site } from "./utils-DDQnUUa-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { E as Calculator, d as Menu, f as MapPin, p as Mail, s as Phone, t as X, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as CostCalculatorPanel } from "./CostCalculatorPanel-DB-_t_Ek.mjs";
import { t as company } from "./site-CGdEMu5M.mjs";
import { t as Route$9 } from "./projects._slug-FkR3WvH4.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BesUwblI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C6lOoTdz.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:h-24 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.logo,
						alt: "Rehman Construction & Enterprises logo",
						width: 224,
						height: 224,
						className: "size-14 object-contain transition-transform duration-500 group-hover:scale-105 lg:size-16"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase leading-tight tracking-[0.22em] sm:text-sm",
						children: site.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeProps: { className: "text-primary" },
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${site.phoneTel}`,
						className: "sheen-on-hover hidden items-center gap-2 rounded-full border border-primary/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }),
							" ",
							site.phone
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "grid size-10 place-items-center rounded-md border border-border lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background/95 backdrop-blur-xl lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-7xl flex-col px-5 py-4",
				children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					activeProps: { className: "text-primary" },
					className: "border-b border-border/60 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground",
					children: l.label
				}, l.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: site.logo,
								alt: "Rehman Construction & Enterprises logo",
								width: 224,
								height: 224,
								className: "size-16 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold uppercase tracking-[0.22em]",
								children: site.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: [site.tagline, ". Residential and commercial construction, grey structure and finishing works across Islamabad and Rawalpindi."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]",
							children: [
								{
									label: "Instagram",
									href: site.instagram
								},
								{
									label: "Facebook",
									href: site.facebook
								},
								{
									label: "YouTube",
									href: site.youtube
								},
								{
									label: "LinkedIn",
									href: site.linkedin
								},
								{
									label: "WhatsApp",
									href: site.whatsapp
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "reg-chip rounded-full border border-border px-4 py-2 text-muted-foreground",
								children: s.label
							}, s.label))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-bold uppercase tracking-[0.28em] text-primary",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-sm text-muted-foreground transition-colors hover:text-primary",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-bold uppercase tracking-[0.28em] text-primary",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${site.phoneTel}`,
								className: "hover:text-primary",
								children: site.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "break-all hover:text-primary",
								children: site.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.address })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border py-6 text-center text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				site.name,
				". All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 tracking-[0.14em] uppercase",
				children: ["Design and develop by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold text-primary",
					children: "Brand Up"
				})]
			})]
		})]
	});
}
/**
* Pointer-tracking layer that feeds the `--mx` / `--my` CSS variables used by
* the `lit-panel` utility, so the corner glow on every card follows the
* visitor's cursor across the whole site.
*/
function GlowLayer() {
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let lastEvent = null;
		let current = null;
		const clear = () => {
			if (current) {
				current.style.removeProperty("--mx");
				current.style.removeProperty("--my");
				current = null;
			}
		};
		const update = () => {
			raf = 0;
			const e = lastEvent;
			if (!e) return;
			const target = e.target?.closest?.(".lit-panel");
			if (target !== current) {
				clear();
				current = target;
			}
			if (current) {
				const rect = current.getBoundingClientRect();
				current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
				current.style.setProperty("--my", `${e.clientY - rect.top}px`);
			}
		};
		const onMove = (e) => {
			lastEvent = e;
			if (!raf) raf = requestAnimationFrame(update);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		window.addEventListener("pointerleave", clear);
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerleave", clear);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);
	return null;
}
/**
* Site-wide fixed background. A light veil sits on top of it so all
* foreground text stays dark and readable on every page.
*
* The media lives in /public so it ships with the project and works on any
* host (Vercel, Netlify, Lovable) with no external CDN dependency.
*/
function SiteBackgroundVideo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "site-bg-video",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/homes/hero-luxury.jpg",
			alt: "",
			draggable: false
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "site-bg-veil" })]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: company.whatsapp,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: "animate-wa-shake fixed bottom-6 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full border border-primary/40 bg-secondary text-secondary-foreground shadow-lg transition-transform hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "size-7",
			strokeWidth: 2,
			"aria-hidden": "true"
		})
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function CostCalculatorFloat() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Open construction cost calculator",
				className: "animate-wa-shake fixed bottom-24 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(242,103,34,0.35)] transition-transform hover:scale-105",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, {
					className: "size-7",
					strokeWidth: 2,
					"aria-hidden": "true"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-5xl overflow-y-auto p-4 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-lg font-extrabold uppercase tracking-wide sm:text-2xl",
					children: "Construction Cost Estimate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs sm:text-sm",
					children: "Pick your plot size for a complete architecture + grey structure + finishing estimate."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostCalculatorPanel, { onNavigate: () => setOpen(false) })]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Rehman Construction & Enterprises — Islamabad" },
			{
				name: "description",
				content: "Quality, trust, excellence. Construction, grey structure and finishing works in Islamabad."
			},
			{
				name: "author",
				content: "Rehman Construction & Enterprises"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteBackgroundVideo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowLayer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostCalculatorFloat, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
			]
		})
	});
}
var $$splitComponentImporter$7 = () => import("./routes-DH3wVjfi.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Rehman Construction & Enterprises — Islamabad Construction Company" },
		{
			name: "description",
			content: "Rehman Construction & Enterprises builds homes, plazas and grey structures across Islamabad and Rawalpindi. Quality, trust and excellence from excavation to handover."
		},
		{
			property: "og:title",
			content: "Rehman Construction & Enterprises — Build With Confidence"
		},
		{
			property: "og:description",
			content: "Residential, commercial, grey structure and finishing works delivered by one accountable team."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-CyG84xcQ.mjs");
var Route$6 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Rehman Construction & Enterprises — Islamabad" },
		{
			name: "description",
			content: "Rehman Construction & Enterprises is a modern construction management company in Islamabad and Rawalpindi — our mission, vision, core values and founder."
		},
		{
			property: "og:title",
			content: "Building More Than Structures — Building Trust"
		},
		{
			property: "og:description",
			content: "A full-service construction company operating across Islamabad and Rawalpindi."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./blog-B0oBwMh6.mjs");
var Route$5 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Construction Knowledge & Guides | Rehman Construction & Enterprises" },
		{
			name: "description",
			content: "Practical construction guides for Pakistani homeowners: 5 Marla house cost, grey structure guide, material quality, budget planning and mistakes to avoid."
		},
		{
			property: "og:title",
			content: "Construction Knowledge — Rehman Construction"
		},
		{
			property: "og:description",
			content: "Guides on cost, materials, contractors and modern construction trends."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./calculator-B6J8peI8.mjs");
var Route$4 = createFileRoute("/calculator")({
	head: () => ({ meta: [
		{ title: "Construction Cost Calculator — Rehman Construction | Islamabad" },
		{
			name: "description",
			content: "Instant house construction cost estimate for 5 Marla to 2 Kanal plots in Islamabad & Rawalpindi — architecture, grey structure and finishing rates per sq.ft by Rehman Construction & Enterprises."
		},
		{
			property: "og:title",
			content: "Construction Cost Calculator — Rehman Construction & Enterprises"
		},
		{
			property: "og:description",
			content: "Transparent per-sq.ft rates for architecture, grey structure and finishing across all plot sizes."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-873hsC3Y.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Rehman Construction — Call +92 336 5949802, Islamabad" },
		{
			name: "description",
			content: "Request a quote from Rehman Construction & Enterprises. Call +92 336 5949802, message us on WhatsApp or email rehmanconstruction87@gmail.com."
		},
		{
			property: "og:title",
			content: "Request a Quote — Rehman Construction & Enterprises"
		},
		{
			property: "og:description",
			content: "Call +92 336 5949802 or message us on WhatsApp to start your project."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./process-rHnwWj4B.mjs");
var Route$2 = createFileRoute("/process")({
	head: () => ({ meta: [
		{ title: "Our Construction Process — Consultation to Handover | Rehman Construction" },
		{
			name: "description",
			content: "Six clear stages: consultation, planning and estimation, design coordination, execution, quality control and project completion by Rehman Construction & Enterprises."
		},
		{
			property: "og:title",
			content: "Our Construction Process — Rehman Construction"
		},
		{
			property: "og:description",
			content: "How we take a project from first consultation to final handover."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-Czsb9_k3.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Construction, Grey Structure & Finishing | Rehman Construction" },
		{
			name: "description",
			content: "Residential and commercial construction, grey structure, renovation, finishing works, cost estimation and project management by Rehman Construction & Enterprises, Islamabad."
		},
		{
			property: "og:title",
			content: "Services — Rehman Construction & Enterprises"
		},
		{
			property: "og:description",
			content: "Eight disciplines, one contract, one supervisor."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projects.index-BxacNZpy.mjs");
var Route = createFileRoute("/projects/")({
	head: () => ({ meta: [
		{ title: "Projects — Completed, Ongoing & Renovation Work | Rehman Construction" },
		{
			name: "description",
			content: "Completed, ongoing, renovation and residential projects by Rehman Construction & Enterprises across Islamabad and Rawalpindi, with location, scope and duration."
		},
		{
			property: "og:title",
			content: "Featured Projects — Rehman Construction & Enterprises"
		},
		{
			property: "og:description",
			content: "Villas, plazas and grey structures built across Islamabad and Rawalpindi."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$6.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var BlogRoute = Route$5.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$8
});
var CalculatorRoute = Route$4.update({
	id: "/calculator",
	path: "/calculator",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var ProcessRoute = Route$2.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$8
});
var ServicesRoute = Route$1.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$8
});
var ProjectsIndexRoute = Route.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute,
	CalculatorRoute,
	ContactRoute,
	ProcessRoute,
	ServicesRoute,
	ProjectsSlugRoute: Route$9.update({
		id: "/projects/$slug",
		path: "/projects/$slug",
		getParentRoute: () => Route$8
	}),
	ProjectsIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
