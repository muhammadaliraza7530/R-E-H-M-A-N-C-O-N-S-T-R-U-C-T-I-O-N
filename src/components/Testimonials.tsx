import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { AutoScroller } from "@/components/AutoScroller";

/**
 * Client testimonials in a continuously moving, draggable rail — same motion
 * language as the posts rail.
 */
export function TestimonialsRail() {
  return (
    <AutoScroller speed={45}>
      {testimonials.map((t, i) => (
        <figure
          key={`${t.name}-${i}`}
          className="lit-panel flex h-full w-[300px] shrink-0 flex-col justify-between bg-card p-6 sm:w-[380px] sm:p-7"
        >
          <div>
            <Quote className="h-6 w-6 text-primary/60" aria-hidden />
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
              “{t.quote}”
            </blockquote>
          </div>
          <figcaption className="mt-6 border-t border-border pt-4">
            <div className="text-sm font-bold">{t.name}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{t.role}</div>
          </figcaption>
        </figure>
      ))}
    </AutoScroller>
  );
}
