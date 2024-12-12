import React from "react";

/**
 * Title section for ContentWindow component
 * @param {boolean} smallTitle If the title should display with small text
 * @param {React.ReactNode} children Any children passed to the component
 */
export function ContentWindowTitle({
  smallTitle,
  children,
}: {
  smallTitle?: boolean;
  children?: React.ReactNode;
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
