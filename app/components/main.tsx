import React from "react";

/**
 * The <main> component
 * @param {React.ReactNode} children Any children passed to the component
 */
export function Main({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  // padding-top of pt-20 = 5rem matches explicit height of floating header
  return <main className="relative animate-fade-in pt-20">{children}</main>;
}
