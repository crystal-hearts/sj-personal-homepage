import React from "react";

export function Section({
  id,
  fullBleed,
  className,
  children,
}: Readonly<{
  id?: string;
  fullBleed?: boolean;
  className?: string;
  children: React.ReactNode;
}>) {
  const xPaddingClass = fullBleed ? "pt-12" : "px-8 pt-12";
  const classNames = [
    "section",
    "flex",
    "flex-row",
    "justify-center",
    "space-x-4",
    "pt-12",
    xPaddingClass,
    className,
  ];
  return (
    <div id={id} className={classNames.join(" ")}>
      {children}
    </div>
  );
}
