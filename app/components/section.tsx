import React from "react";

export function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="section-container flex h-screen flex-wrap items-center justify-center px-8">
      {children}
    </div>
  );
}
