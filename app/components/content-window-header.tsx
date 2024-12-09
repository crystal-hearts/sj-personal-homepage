import React from "react";

export function ContentWindowHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="window-header flex flex-row items-center justify-between bg-[var(--theme-color-700)] py-1 pl-4 pr-2">
      {children}
    </div>
  );
}
