import React from "react";

export function HeaderMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="header-menu flex flex-row space-x-2 text-sm font-black text-[var(--theme-color-700)]">
      {children}
    </div>
  );
}
