/**
 * Site-wide fixed background. A light veil sits on top of it so all
 * foreground text stays dark and readable on every page.
 *
 * The media lives in /public so it ships with the project and works on any
 * host (Vercel, Netlify, Lovable) with no external CDN dependency.
 */
export function SiteBackgroundVideo() {
  return (
    <div aria-hidden className="site-bg-video">
      <img src="/homes/hero-luxury.jpg" alt="" draggable={false} />
      <div className="site-bg-veil" />
    </div>
  );
}
