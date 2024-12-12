import React from "react";

export function FixedFooter({ children }: { children: React.ReactNode }) {
  return (
    <footer id="footer" className="fixed-footer fixed bottom-0 left-0 z-10">
      <div className="footer-container">
        <nav className="footer-buttons flex flex-row justify-between pb-6 pl-6">
          <div className="footer-items flex space-x-2">{children}</div>
        </nav>
      </div>
    </footer>
  );
}
