import React from "react";
import Link from "next/link";

export function Button({
  buttonID = "",
  buttonClass = "",
  href = "",
  title = "",
  target = "",
  flavor = "theme-color",
  smallShadow = false,
  iconButton = false,
  displayHidden = false,
  clickHandler = () => {
    return true;
  },
  children,
}: {
  buttonID?: string;
  buttonClass?: string;
  title?: string;
  href?: string;
  target?: string;
  flavor?: string;
  smallShadow?: boolean;
  iconButton?: boolean;
  displayHidden?: boolean;
  clickHandler?: () => void;
  children: React.ReactNode;
}) {
  const classNames = [
    "rounded",
    "border-1",
    "border-solid",
    "border-opacity-80",
    "border-[var(--" + flavor + "-500)]",
    flavor !== "theme-color"
      ? "bg-[var(--" + flavor + "-500)]"
      : "bg-[var(--" + flavor + "-100)]",
    "fill-[var(--theme-color-700)]",
    "p-1",
    smallShadow ? "shadow-drop-3" : "shadow-drop-5",
    "transition",
    "duration-150",
    "hover:scale-110",
    "active:scale-110",
    buttonClass,
    iconButton ? "h-8 w-8" : "",
    displayHidden ? "hidden" : "",
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
        onClick={clickHandler}
      >
        {children}
      </button>
    );
  }
}
