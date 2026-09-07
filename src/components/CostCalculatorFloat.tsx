import { useState } from "react";
import { Calculator } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CostCalculatorPanel } from "@/components/CostCalculatorPanel";

export function CostCalculatorFloat() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open construction cost calculator"
          className="animate-wa-shake fixed bottom-24 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(242,103,34,0.35)] transition-transform hover:scale-105"
        >
          <Calculator className="size-7" strokeWidth={2} aria-hidden="true" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-5xl overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="text-left">
          <DialogTitle className="text-lg font-extrabold uppercase tracking-wide sm:text-2xl">
            Construction Cost Estimate
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">
            Pick your plot size for a complete architecture + grey structure + finishing estimate.
          </DialogDescription>
        </DialogHeader>

        <CostCalculatorPanel onNavigate={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
