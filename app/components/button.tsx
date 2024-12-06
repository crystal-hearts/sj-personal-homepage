import React from "react";
import Link from "next/link";

export function Button({
  buttonID,
  className,
  href,
  title,
  target,
  flavor,
  smallShadow = false,
  iconButton = false,
  inverseIcon = false,
  displayHidden = false,
  onClick = () => {
    return true;
  },
  children,
}: {
  buttonID?: string;
  className?: string;
  title?: string;
  href?: string;
  target?: string;
  flavor?: string;
  smallShadow?: boolean;
  iconButton?: boolean;
  inverseIcon?: boolean;
  displayHidden?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  let borderClass = flavor
    ? "border-[var(--" + flavor + "-500)]"
    : "border-[var(--theme-color-500)]";
  let bgClass = flavor
    ? "bg-[var(--" + flavor + "-500)]"
    : "bg-[var(--theme-color-100)]";
  let fillClass = flavor
    ? "fill-[var(--" + flavor + "-700)]"
    : "fill-[var(--theme-color-700)]";
  const shadowClass = smallShadow ? "shadow-drop-3" : "shadow-drop-5";
  const explicitSizeClass = iconButton ? "h-8 w-8" : "";

  if (inverseIcon) {
    borderClass = "border-[var(--theme-color-700)]";
    bgClass = "bg-[var(--theme-color-700)]";
    fillClass = "fill-[var(--theme-color-100)]";
  }

  const classNames = [
    "rounded",
    "border-1",
    "border-solid",
    "border-opacity-80",
    borderClass,
    bgClass,
    fillClass,
    "p-1",
    shadowClass,
    "transition",
    "duration-150",
    "hover:scale-110",
    "active:scale-110",
    explicitSizeClass,
    displayHidden ? "hidden" : "",
    className,
  ];

  // If the href attribute is set, this is a link and should be displayed as such
  // If not, it's a button
  if (href) {
    return (
      <Link
        id={buttonID}
        title={title}
        className={classNames.join(" ")}
        href={href}
        target={target}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        id={buttonID}
        title={title}
        className={classNames.join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
