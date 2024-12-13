import React from "react";

/**
 * Component for displaying contents within "ticket" sections
 * These previously had stylized scalloped edges. Right now, thye're simple containers.
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
      <div className="ticket-body z-10 max-w-75vw bg-[var(--theme-color-200)] p-2 py-4 sm:max-w-sm md:max-w-lg">
        <div className="ticket-body-interior flex flex-col space-y-3 rounded p-2">
          {children}
        </div>
      </div>
    </div>
  );
}
