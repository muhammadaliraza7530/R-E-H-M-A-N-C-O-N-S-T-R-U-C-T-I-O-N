import { useEffect } from "react";

/**
 * Pointer-tracking layer that feeds the `--mx` / `--my` CSS variables used by
 * the `lit-panel` utility, so the corner glow on every card follows the
 * visitor's cursor across the whole site.
 */
export function GlowLayer() {
  useEffect(() => {
    let raf = 0;
    let lastEvent: PointerEvent | null = null;
    let current: HTMLElement | null = null;

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
      const target = (e.target as HTMLElement | null)?.closest?.(".lit-panel");
      if (target !== current) {
        clear();
        current = target as HTMLElement | null;
      }
      if (current) {
        const rect = current.getBoundingClientRect();
        current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        current.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
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
