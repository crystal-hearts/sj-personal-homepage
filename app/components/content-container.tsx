import React from "react";

export function ContentContainer({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  const classNames = ["content-container", "flex-row", "space-y-2", className];
  return <div className={classNames.join(" ")}>{children}</div>;
}
