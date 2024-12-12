import React from "react";

/**
 * Generic component for handling side-by-side columns of text
 * @param {string} className Any custom class names passed to the component
 * @param {React.ReactNode} children Any children passed to the component
 */
export function TextColumns({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const classNames = [
    "flex",
    "flex-col",
    "space-y-3",
    "md:flex-row",
    "md:space-x-3",
    "md:space-y-0",
    className,
  ];
  return <div className={classNames.join(" ")}>{children}</div>;
}
