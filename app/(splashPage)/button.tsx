import React from "react";

export function Button({
  buttonID = "",
  buttonClass = "",
  href = "",
  title = "",
  isLink = false,
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
  isLink?: boolean;
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

  if (isLink) {
    return (
      <a
        id={buttonID}
        title={title}
        className={classNames.join(" ")}
        href={href}
        target={target}
        onClick={clickHandler}
      >
        {children}
      </a>
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
