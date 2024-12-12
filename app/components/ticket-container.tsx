import React from "react";

import TicketEdgeLeft from "@/images/ticket-edge-2-left.svg";
import TicketEdge from "@/images/ticket-edge-2.svg";

export function TicketContainer({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const classNames = [
    "ticket",
    "flex",
    "flex-row",
    "drop-shadow-border-2",
    className,
  ];
  return (
    <div className={classNames.join(" ")}>
      <div className="ticket-edge-left relative left-1 max-h-full w-4 fill-[var(--theme-color-100)]">
        <TicketEdgeLeft className="h-full" />
      </div>
      <div className="ticket-body bg-[var(--theme-color-100)] p-4 py-6 md:max-w-xl">
        {children}
      </div>
      <div className="ticket-edge-right relative right-1 max-h-full w-4 fill-[var(--theme-color-100)]">
        <TicketEdge className="h-full" />
      </div>
    </div>
  );
}
