import { process } from "@/lib/site-data";
import { Reveal } from "@/components/ui-bits";

export function BlueprintTimeline() {
  return (
    <div className="relative">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
      <ol className="relative mx-auto max-w-4xl">
        <span className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:block" />
        {process.map((p, i) => (
          <li key={p.step} className="relative">
            <Reveal delay={i * 80}>
              <div className="flex gap-5 pb-10 sm:gap-8">
                <div className="relative z-10 hidden size-12 shrink-0 place-items-center rounded-full border border-primary/50 bg-background text-xs font-bold tracking-[0.1em] text-primary sm:grid">
                  {p.step}
                </div>
                <div className="lit-panel w-full bg-card p-6 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary sm:hidden">
                    Step {p.step}
                  </p>
                  <h3 className="mt-1 text-lg font-bold sm:text-xl">
                    Step {p.step} — {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
