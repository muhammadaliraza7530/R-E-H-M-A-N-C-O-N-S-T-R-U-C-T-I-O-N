import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site-data";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
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
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/${site.phoneTel.replace("+", "")}?text=${encodeURIComponent(lines)}`, "_blank");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`grid gap-5 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8 ${compact ? "" : "shadow-sm"}`}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.14em]">Name</label>
        <input id="name" name="name" required className={inputClass} placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.14em]">Phone / WhatsApp</label>
        <input id="phone" name="phone" required className={inputClass} placeholder="03XX XXXXXXX" />
      </div>
      <div className="space-y-2">
        <label htmlFor="location" className="text-xs font-semibold uppercase tracking-[0.14em]">Project location</label>
        <input id="location" name="location" required className={inputClass} placeholder="E.g. DHA Phase 2, Islamabad" />
      </div>
      <div className="space-y-2">
        <label htmlFor="plot" className="text-xs font-semibold uppercase tracking-[0.14em]">Plot size</label>
        <input id="plot" name="plot" className={inputClass} placeholder="E.g. 10 Marla, 1 Kanal" />
      </div>
      <div className="space-y-2">
        <label htmlFor="type" className="text-xs font-semibold uppercase tracking-[0.14em]">Type of construction</label>
        <select id="type" name="type" className={inputClass}>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Renovation & Remodeling</option>
          <option>Consultancy only</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="scope" className="text-xs font-semibold uppercase tracking-[0.14em]">Scope</label>
        <select id="scope" name="scope" className={inputClass}>
          <option>Grey Structure</option>
          <option>Complete Construction</option>
          <option>Finishing Works Only</option>
        </select>
      </div>
      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-[0.14em]">Estimated budget</label>
        <input id="budget" name="budget" className={inputClass} placeholder="E.g. 1 Crore – 2 Crore" />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em]">Anything else?</label>
        <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us about your project" />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="sheen-on-hover inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
        >
          Request a quote <Send className="size-4" />
        </button>
        {sent && (
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Thank you — we opened WhatsApp with your details. You can also call {site.phone}.
          </p>
        )}
      </div>
    </form>
  );
}
