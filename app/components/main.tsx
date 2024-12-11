import React from "react";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="relative z-10 animate-fade-in">{children}</main>;
}
