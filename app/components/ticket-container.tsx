import React from "react";

import TicketEdgeLeft from "@/images/ticket-edge-2-left.svg";
import TicketEdge from "@/images/ticket-edge-2.svg";

/**
 * Component for displaying contents within stylized "ticket" sections
 * Implementation is similar to CurvedContainer component
 * @param {string} className Any custom class names passed to the component
 * @param {React.ReactNode} children Any children passed to the component
 */
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
      <div className="ticket-edge-left max-h-full w-4 fill-[var(--theme-color-200)]">
        <TicketEdgeLeft className="h-full" />
      </div>
      <div className="ticket-body z-10 max-w-72 bg-[var(--theme-color-200)] p-4 py-6 sm:max-w-sm md:max-w-lg">
        <div className="ticket-body-interior flex flex-col space-y-3 rounded border-2 border-solid border-[var(--theme-color-900)] p-4">
          {children}
        </div>
      </div>
      <div className="ticket-edge-right max-h-full w-4 fill-[var(--theme-color-200)]">
        <TicketEdge className="h-full" />
      </div>
    </div>
  );
}
