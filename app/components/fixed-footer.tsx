import React from "react";

export function FixedFooter({ children }: { children?: React.ReactNode }) {
  return (
    <footer
      id="footer"
      className="fixed-footer fixed right-0 z-10 h-20 md:bottom-0 md:left-0"
    >
      <div className="footer-container">
        <nav className="footer-items flex flex-row justify-between px-6 py-6">
          {children}
        </nav>
      </div>
    </footer>
  );
}
