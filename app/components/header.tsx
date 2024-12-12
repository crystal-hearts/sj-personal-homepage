import React from "react";

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header id="header" className="fixed-header fixed top-0 z-10 h-20 w-full">
      <div className="header-container w-full">
        <nav className="header-items flex flex-row justify-start px-6 py-6 md:justify-between">
          {children}
        </nav>
      </div>
    </header>
  );
}
