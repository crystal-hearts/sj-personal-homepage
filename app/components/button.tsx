import React from "react";
import Link from "next/link";

export function Button({
  id,
  className,
  href,
  title,
  target,
  bgColor,
  smallShadow = false,
  iconButton = false,
  transparentIcon = false,
  displayHidden = false,
  onClick = () => {
    return true;
  },
  children,
}: {
  id?: string;
  className?: string;
  title?: string;
  href?: string;
  target?: string;
  bgColor?: string;
  smallShadow?: boolean;
  iconButton?: boolean;
  transparentIcon?: boolean;
  displayHidden?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  const explicitSizeClass = iconButton ? "h-8 w-8" : "";
  const transformClass = iconButton
    ? "transition duration-150 hover:scale-110 active:scale-110"
    : "transition duration-150 hover:scale-105 active:scale-105";
  let borderClass = "border-[var(--theme-color-700)]";
  let bgClass = "bg-[var(--theme-color-200)]";
  let fillClass = "fill-[var(--theme-color-700)]";
  let shadowClass = smallShadow ? "shadow-3" : "shadow-5";

  if (bgColor) {
    borderClass = "border-[var(--" + bgColor + "-700)]";
    bgClass = "bg-[var(--" + bgColor + "-500)]";
    fillClass = "fill-[var(--" + bgColor + "-200)]";
  }

  if (transparentIcon) {
    borderClass = "border-transparent";
    bgClass = "bg-transparent";
    shadowClass = "";
    fillClass = "fill-[var(--theme-color-200)]";
  }

  const classNames = [
    "p-1",
    "rounded",
    "border-2",
    "border-solid",
    "border-opacity-80",
    borderClass,
    bgClass,
    fillClass,
    shadowClass,
    transformClass,
    explicitSizeClass,
    displayHidden ? "hidden" : "",
    className,
  ];

  // If the href attribute is set, this is a link and should be displayed as such
  // If not, it's a button
  if (href) {
    return (
      <Link
        id={id}
        title={title}
        className={classNames.join(" ")}
        href={href}
        target={target}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        id={id}
        title={title}
        className={classNames.join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
