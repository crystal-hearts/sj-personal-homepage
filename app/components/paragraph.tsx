import React from "react";

/**
 * Generic paragraph container component
 * @param {string} className Any custom class names passed to the component
 * @param {React.ReactNode} children Any children passed to the component
 */
export function Paragraph({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const classNames = ["flex", "flex-col", "space-y-3", className];
  return <p className={classNames.join(" ")}>{children}</p>;
}
