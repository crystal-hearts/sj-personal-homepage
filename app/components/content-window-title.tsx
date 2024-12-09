import React from "react";

export function ContentWindowTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      className="window-heading select-none text-base font-bold text-[var(--theme-color-200)]"
      tabIndex="-1"
    >
      {children}
    </h2>
  );
}
