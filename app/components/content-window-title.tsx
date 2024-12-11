import React from "react";

export function ContentWindowTitle({
  smallTitle,
  children,
}: {
  smallTitle?: boolean;
  children: React.ReactNode;
}) {
  const textSizeClass = smallTitle ? "text-sm" : "text-base";
  const classNames = [
    "window-title",
    "select-none",
    textSizeClass,
    "font-bold",
    "text-[var(--theme-color-200)]",
  ];

  return (
    <h2 className={classNames.join(" ")} tabIndex={-1}>
      {children}
    </h2>
  );
}
