import React from "react";

/**
 * Generic section component. These are the main navigable sections of the page
 * @param {string} id The section's ID
 * @param {string} className Any custom class names passed to the component
 * @param {boolean} fullBleed If the section should bleed to the edge of the page
 * @param {boolean} noPaddingBottom If the section shouldn't have any bottom padding
 * @param {React.ReactNode} children Any children passed to the component
 */
export function Section({
  id,
  className,
  fullBleed,
  noPaddingBottom,
  children,
}: Readonly<{
  id?: string;
  fullBleed?: boolean;
  noPaddingBottom?: boolean;
  className?: string;
  children?: React.ReactNode;
}>) {
  const xPaddingClass = fullBleed ? "" : "px-8";
  const yPaddingClass = noPaddingBottom ? "" : "py-12 md:py-6";
  const classNames = [
    "section",
    "flex",
    "flex-col",
    "md:flex-row",
    "justify-center",
    "space-y-12",
    "md:space-x-4",
    "md:space-y-0",
    xPaddingClass,
    yPaddingClass,
    className,
  ];
  return (
    <div id={id} className={classNames.join(" ")}>
      {children}
    </div>
  );
}
