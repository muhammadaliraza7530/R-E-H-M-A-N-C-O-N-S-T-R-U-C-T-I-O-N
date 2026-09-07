import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, PencilRuler, Building, Paintbrush, Calculator, Ruler, MapPin } from "lucide-react";
import { site } from "@/lib/site-data";

/* ---- Editable values (from the Rehman Construction cost estimate sheet) ---- */
export const RATES = {
  architecture: { low: 100, high: 180 },
  grey: { low: 3100, high: 3500 },
  finishing: { low: 2750, high: 3500 },
} as const;

export const PLOTS = [
  { name: "5 Marla", area: 2250 },
  { name: "7 Marla", area: 3150 },
  { name: "8 Marla", area: 3600 },
  { name: "10 Marla", area: 4500 },
  { name: "14 Marla", area: 6300 },
  { name: "1 Kanal", area: 9000 },
  { name: "2 Kanal", area: 18000 },
];

const SERVICES = [
  { key: "architecture", name: "Architectural Services", desc: "Design & drawings", icon: PencilRuler },
  { key: "grey", name: "Grey Structure", desc: "Excavation to roof level", icon: Building },
  { key: "finishing", name: "Finishing Works", desc: "Complete finishing", icon: Paintbrush },
] as const;

type Key = (typeof SERVICES)[number]["key"];

const fmt = (n: number) => Math.round(n).toLocaleString("en-PK");

function words(n: number) {
  if (n >= 10_000_000) return `${(n / 10_000_000).toFixed(2)} Crore`;
  if (n >= 100_000) return `${(n / 100_000).toFixed(1)} Lac`;
  return `${fmt(n)} PKR`;
}

export function CostCalculatorPanel({ onNavigate }: { onNavigate?: () => void }) {
  const [plotIdx, setPlotIdx] = useState(0);
  const [area, setArea] = useState(PLOTS[0].area);
  const [customArea, setCustomArea] = useState<string>(String(PLOTS[0].area));

  const pickPlot = (i: number) => {
    setPlotIdx(i);
    setArea(PLOTS[i].area);
    setCustomArea(String(PLOTS[i].area));
  };

  const onAreaChange = (v: string) => {
    setCustomArea(v);
    const n = parseInt(v.replace(/\D/g, ""), 10);
    if (n > 0) setArea(n);
  };

  const calc = useMemo(() => {
    const rows = SERVICES.map((s) => ({
      ...s,
      low: RATES[s.key].low * area,
      high: RATES[s.key].high * area,
    }));
    const low = rows.reduce((a, r) => a + r.low, 0);
    const high = rows.reduce((a, r) => a + r.high, 0);
    const pct = rows.map((r) => Math.round(((r.low + r.high) / 2 / ((low + high) / 2)) * 100));
    return { rows, low, high, pct };
  }, [area]);

  const waText = encodeURIComponent(
    `Hello Rehman Construction, I used your cost calculator:\nPlot: ${PLOTS[plotIdx].name} (${fmt(area)} sq.ft covered)\nEstimate: ${fmt(calc.low)} – ${fmt(calc.high)} PKR\nI would like to discuss my project.`,
  );

  return (
    <>
      <div className="lit-panel overflow-hidden bg-card">
        <div className="grid lg:grid-cols-[280px_1fr]">
          {/* Plot selector */}
          <aside className="border-b border-border p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Plot size</p>
            <div className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-1">
              {PLOTS.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => pickPlot(i)}
                  className={`reg-chip rounded-xl border border-border px-4 py-3 text-left transition-colors ${
                    i === plotIdx
                      ? "is-on border-primary bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span className="block text-sm font-bold uppercase tracking-wide">{p.name}</span>
                  <span className="block text-[11px] text-muted-foreground">{fmt(p.area)} sq.ft covered</span>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
              <label
                htmlFor="area"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
              >
                <Ruler className="size-3.5 text-primary" /> Covered area (sq.ft)
              </label>
              <input
                id="area"
                inputMode="numeric"
                suppressHydrationWarning
                value={customArea}
                onChange={(e) => onAreaChange(e.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-lg font-bold tabular-nums outline-none focus:border-primary"
              />
              <p className="mt-1.5 text-[11px] text-muted-foreground">Approximate — edit for your exact covered area.</p>
            </div>
          </aside>

          {/* Breakdown */}
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-extrabold uppercase tracking-wide sm:text-xl">
                {PLOTS[plotIdx].name} House <span className="text-muted-foreground">— Cost Breakdown</span>
              </h3>
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <MapPin className="size-3.5 text-primary" /> Bahria Town · DHA · CDA Sectors
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    <th className="pb-3 pr-4">Service</th>
                    <th className="pb-3 pr-4">Rate (PKR/sq.ft)</th>
                    <th className="pb-3 pr-4">Lower end</th>
                    <th className="pb-3">Higher end</th>
                  </tr>
                </thead>
                <tbody>
                  {calc.rows.map((r) => {
                    const Icon = r.icon;
                    return (
                      <tr key={r.key} className="border-b border-border/60">
                        <td className="py-4 pr-4">
                          <span className="flex items-center gap-3">
                            <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                              <Icon className="size-4" />
                            </span>
                            <span>
                              <span className="block font-bold">{r.name}</span>
                              <span className="block text-xs text-muted-foreground">{r.desc}</span>
                            </span>
                          </span>
                        </td>
                        <td className="py-4 pr-4 tabular-nums text-muted-foreground">
                          {RATES[r.key as Key].low.toLocaleString()} – {RATES[r.key as Key].high.toLocaleString()}
                        </td>
                        <td className="py-4 pr-4 font-bold tabular-nums">{fmt(r.low)}</td>
                        <td className="py-4 font-bold tabular-nums">{fmt(r.high)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Lower end total</p>
                <p className="mt-2 text-2xl font-extrabold tabular-nums sm:text-3xl">PKR {fmt(calc.low)}</p>
                <p className="mt-1 text-xs font-semibold text-primary">{words(calc.low)}</p>
              </div>
              <div className="rounded-2xl border border-primary/40 bg-primary/10 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Higher end total</p>
                <p className="mt-2 text-2xl font-extrabold tabular-nums text-primary sm:text-3xl">PKR {fmt(calc.high)}</p>
                <p className="mt-1 text-xs font-semibold text-primary">{words(calc.high)}</p>
              </div>
            </div>

            {/* Distribution bar */}
            <div className="mt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Cost distribution</p>
              <div className="mt-3 flex h-3 overflow-hidden rounded-full border border-border">
                <span style={{ width: `${calc.pct[0]}%` }} className="bg-[#1D6FD0]" />
                <span style={{ width: `${calc.pct[1]}%` }} className="bg-[#4A5566]" />
                <span style={{ width: `${calc.pct[2]}%` }} className="bg-primary" />
              </div>
              <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <i className="size-2.5 rounded-full bg-[#1D6FD0]" />Architecture {calc.pct[0]}%
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="size-2.5 rounded-full bg-[#4A5566]" />Grey structure {calc.pct[1]}%
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="size-2.5 rounded-full bg-primary" />Finishing {calc.pct[2]}%
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${site.phoneTel.replace("+", "")}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent sm:px-8 sm:py-4 sm:text-xs"
            >
              Get exact quote on WhatsApp <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-3xl text-center">
        <p className="flex items-start justify-center gap-2 text-xs leading-relaxed text-muted-foreground">
          <Calculator className="mt-0.5 size-4 shrink-0 text-primary" />
          Estimates are indicative for standard-grade construction and vary with design, material selection and site
          conditions. Contact us for a detailed BOQ-based quotation for your plot.
        </p>
        <Link
          to="/contact"
          onClick={onNavigate}
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary hover:underline"
        >
          Request a detailed quotation <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </>
  );
}
