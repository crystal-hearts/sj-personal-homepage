import React from "react";

/**
 * Individual nav section
 * @param {React.ReactNode} children Any children passed to the component
 */
export function HeaderNav({
  label,
  className,
  children,
}: {
  label: string; // Required. Landmarks must have aria-label, aria-labelledby, or title to make landmarks distinguishable
  className?: string;
  children?: React.ReactNode;
}) {
  const classNames = ["header-nav", "z-10", "px-6", "py-6", className];
  return (
    <nav className={classNames.join(" ")} aria-label={label}>
      {children}
    </nav>
  );
}
