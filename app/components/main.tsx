import React from "react";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="fixed bottom-0 left-0 right-0 top-0 animate-fade-in">
      {children}
    </main>
  );
}
