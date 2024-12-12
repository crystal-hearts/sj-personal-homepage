import React from "react";
import Link from "next/link";

/**
 * A wrapper for the Next.js Link component that includes custom styling
 * @param {string} className Any custom class names passed to the component
 * @param {string} href The link's location
 * @param {string} target The link's target, like "_"
 * @param {number} tabIndex The link's tabindex
 * @param {React.ReactNode} children Any children passed to the component
 */
export function InlineLink({
  className = "",
  href,
  target = "",
  tabIndex,
  children,
}: {
  className?: string;
  href: string;
  target?: string;
  tabIndex?: number;
  children?: React.ReactNode;
}) {
  const classNames = [
    "inline-link",
    "inline",
    "font-semibold",
    "text-[var(--theme-color-700)]",
    "underline",
    "hover:text-[var(--theme-color-900)]",
    className,
  ];

  return (
    <Link
      className={classNames.join(" ")}
      href={href}
      target={target}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  );
}
