import React from "react";
import Link from "next/link";

export function InlineLink({
  href,
  target = "",
  className = "",
  tabIndex,
  children,
}: {
  href: string;
  target?: string;
  className?: string;
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
