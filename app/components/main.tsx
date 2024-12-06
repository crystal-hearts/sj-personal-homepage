import React from "react";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="fixed top-1/4 mb-8 min-h-full w-full animate-fade-in">
      {children}
    </main>
  );
}
