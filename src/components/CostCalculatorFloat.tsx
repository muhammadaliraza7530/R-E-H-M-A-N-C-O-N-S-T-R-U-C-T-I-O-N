import { Link } from "@tanstack/react-router";
import { Calculator } from "lucide-react";

export function CostCalculatorFloat() {
  return (
    <Link
      to="/calculator"
      aria-label="Open construction cost calculator"
      className="animate-wa-shake fixed bottom-24 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(242,103,34,0.35)] transition-transform hover:scale-105"
    >
      <Calculator className="size-7" strokeWidth={2} aria-hidden="true" />
    </Link>
  );
}
