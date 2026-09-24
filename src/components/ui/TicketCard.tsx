import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TicketCardProps {
  children: ReactNode;
  className?: string;
  /** Cor de fundo da seção onde o cartão está, usada para "recortar" os entalhes laterais. */
  bg?: string;
}

/** Cartão no formato de cupom/ticket, com entalhes circulares nas laterais e divisória tracejada. */
export default function TicketCard({ children, className, bg }: TicketCardProps) {
  return (
    <div
      className={cn("ticket-card flex items-stretch gap-5 p-6 shadow-lg shadow-charcoal/5", className)}
      style={bg ? ({ "--ticket-bg": bg } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
