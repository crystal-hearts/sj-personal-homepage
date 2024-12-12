import React from "react";

export function HeaderItems({ children }: { children?: React.ReactNode }) {
  return (
    <div className="header-items flex flex-row justify-between">{children}</div>
  );
}
