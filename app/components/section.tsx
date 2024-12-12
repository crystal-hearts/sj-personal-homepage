import React from "react";

export function Section({
  id,
  fullBleed,
  noPaddingBottom,
  className,
  children,
}: Readonly<{
  id?: string;
  fullBleed?: boolean;
  noPaddingBottom?: boolean;
  className?: string;
  children?: React.ReactNode;
}>) {
  const xPaddingClass = fullBleed ? "" : "px-8";
  const yPaddingClass = noPaddingBottom ? "" : "py-12 md:py-6";
  const classNames = [
    "section",
    "flex",
    "flex-col",
    "md:flex-row",
    "justify-center",
    "space-y-12",
    "md:space-x-4",
    "md:space-y-0",
    xPaddingClass,
    yPaddingClass,
    className,
  ];
  return (
    <div id={id} className={classNames.join(" ")}>
      {children}
    </div>
  );
}
