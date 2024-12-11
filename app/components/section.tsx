import React from "react";

export function Section({
  fullBleed,
  className,
  children,
}: Readonly<{
  fullBleed?: boolean;
  className?: string;
  children: React.ReactNode;
}>) {
  const paddingClass = fullBleed ? "pt-8" : "px-8 py-8";
  const classNames = [
    "section",
    "flex",
    "flex-row",
    "justify-center",
    "space-x-4",
    paddingClass,
    className,
  ];
  return <div className={classNames.join(" ")}>{children}</div>;
}
