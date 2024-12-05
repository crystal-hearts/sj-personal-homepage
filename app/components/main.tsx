import React from "react";

export function MainSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="relative mb-8 w-full">{children}</main>;
}
