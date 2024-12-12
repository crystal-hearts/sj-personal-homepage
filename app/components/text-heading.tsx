import React from "react";

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
