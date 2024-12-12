import React from "react";

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
