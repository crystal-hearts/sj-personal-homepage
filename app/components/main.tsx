import React from "react";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative mb-8 w-full animate-fade-in">{children}</main>
  );
}
