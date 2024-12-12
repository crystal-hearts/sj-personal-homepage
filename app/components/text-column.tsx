import React from "react";

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
