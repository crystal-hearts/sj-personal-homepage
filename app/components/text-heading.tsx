import React from "react";

/**
 * Generic component for styling a text heading
 * @param {string} className Any custom class names passed to the component
 * @param {React.ReactNode} children Any children passed to the component
 */
export function TextHeading({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const classNames = ["text-lg", "font-semibold", "md:self-start", className];
  return <span className={classNames.join(" ")}>{children}</span>;
}
