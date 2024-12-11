import React from "react";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="relative animate-fade-in">{children}</main>;
}
