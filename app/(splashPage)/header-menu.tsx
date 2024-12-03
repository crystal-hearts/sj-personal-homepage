import React from "react";

export function HeaderMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="header-menu flex flex-row text-sm font-black text-[var(--theme-color-700)]">
      {children}
    </div>
  );
}
