import React from "react";

/**
 * Individual nav section
 * @param {React.ReactNode} children Any children passed to the component
 */
export function HeaderNav({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const classNames = ["header-nav", "z-10", "px-6", "py-6", className];
  return (
    <nav
      className={classNames.join(" ")}
      aria-label="Menu and social media links"
    >
      {children}
    </nav>
  );
}
