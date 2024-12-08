import React from "react";

export function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="section-container flex h-full w-full items-center justify-center px-8">
      <div className="section-contents flex flex-row">{children}</div>
    </div>
  );
}
