import React from "react";
import Link from "next/link";

export function Button({
  buttonID,
  className,
  href,
  title,
  target,
  bgColor,
  smallShadow = false,
  iconButton = false,
  inverseIcon = false,
  transparentIcon = false,
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
  bgColor?: string;
  smallShadow?: boolean;
  iconButton?: boolean;
  inverseIcon?: boolean;
  transparentIcon?: boolean;
  displayHidden?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  const explicitSizeClass = iconButton ? "h-8 w-8" : "";
  let borderClass = bgColor
    ? "border-[var(--" + bgColor + "-500)]"
    : "border-[var(--theme-color-500)]";
  let bgClass = bgColor
    ? "bg-[var(--" + bgColor + "-500)]"
    : "bg-[var(--theme-color-200)]";
  let fillClass = bgColor
    ? "fill-[var(--" + bgColor + "-700)]"
    : "fill-[var(--theme-color-700)]";
  let shadowClass = smallShadow ? "shadow-drop-3" : "shadow-drop-5";

  if (inverseIcon) {
    borderClass = "border-[var(--theme-color-700)]";
    bgClass = "bg-[var(--theme-color-700)]";
    fillClass = "fill-[var(--theme-color-200)]";
  }
  if (transparentIcon) {
    borderClass = "border-transparent";
    bgClass = "bg-transparent";
    shadowClass = "";
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
