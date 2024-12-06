import React from "react";

export function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="section-container mt-20 w-full">
      <div className="section-contents mx-auto flex flex-col items-center px-8">
        {children}
      </div>
    </div>
  );
}
