import React from "react";

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
    className,
  ];
  return <div className={classNames.join(" ")}>{children}</div>;
}
