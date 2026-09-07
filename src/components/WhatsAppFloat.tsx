import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="animate-wa-shake fixed bottom-6 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full border border-primary/40 bg-secondary text-secondary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
