import React from "react";

export function HeaderNav({ children }: { children: React.ReactNode }) {
  return (
    <nav className="header-nav flex flex-row justify-between">{children}</nav>
  );
}
