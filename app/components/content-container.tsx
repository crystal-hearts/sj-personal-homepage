import React from "react";

/**
 * Generic content container component
 * @param {string} className Any custom class names passed to the component
 * @param {React.ReactNode} children Any children passed to the component
 */
export function ContentContainer({
  className,
  children,
}: Readonly<{
  id?: string;
  className?: string;
  children?: React.ReactNode;
}>) {
  const classNames = [
    "content-container",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "space-y-3",
    "max-w-10xl", // Upper limit for very large screen widths
    className,
  ];
  return <div className={classNames.join(" ")}>{children}</div>;
}
