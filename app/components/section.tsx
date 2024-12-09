import React from "react";

export function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="section-container flex h-full w-full flex-wrap items-center justify-center overflow-auto px-8 py-20">
      {children}
    </div>
  );
}
