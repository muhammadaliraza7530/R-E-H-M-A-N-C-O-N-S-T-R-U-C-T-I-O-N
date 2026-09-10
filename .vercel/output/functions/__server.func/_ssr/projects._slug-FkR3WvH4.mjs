import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as projects } from "./site-CGdEMu5M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-FkR3WvH4.js
var $$splitComponentImporter = () => import("./projects._slug-BjIeUibq.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = projects.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Project unavailable | Rehman Construction" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { project } = loaderData;
		return { meta: [
			{ title: `${project.title} — ${project.location} | Rehman Construction` },
			{
				name: "description",
				content: project.blurb
			},
			{
				property: "og:title",
				content: `${project.title} — Rehman Construction`
			},
			{
				property: "og:description",
				content: project.blurb
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
