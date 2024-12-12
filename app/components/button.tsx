import React from "react";
import Link from "next/link";

/**
 * Generic button component, wraps both <button> and Next <Link> elements with consistent styling
 * @param {string} id The button's ID
 * @param {string} className Any custom class names passed to the component
 * @param {string} title The button's title
 * @param {string} href The location for a <Link> element
 * @param {string} target The target for a <Link> element, ie "_"
 * @param {string} bgColor The explicit background color of button. Uses theme-color if not set
 * @param {boolean} smallShadow If the button's drop shadow should be displayed as smaller
 * @param {boolean} iconButton If the button should have explicit height and width to support an SVG icon
 * @param {boolean} transparentIcon If the button should display with a transparent background and border
 * @param {boolean} displayHIdden If the button should be initially displayed as hidden
 * @param {Function} onClick Any onClick functions that should fire when the button is clicked
 * @param {React.ReactNode} children Any children passed to the component
 */
export function Button({
  id,
  className,
  title,
  href,
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
  let bgClass = "bg-[var(--theme-color-100)]";
  let fillClass = "fill-[var(--theme-color-700)]";
  let shadowClass = smallShadow ? "shadow-3" : "shadow-5";

  if (bgColor) {
    borderClass = "border-[var(--" + bgColor + "-700)]";
    bgClass = "bg-[var(--" + bgColor + "-500)]";
    fillClass = "fill-[var(--" + bgColor + "-100)]";
  }

  if (transparentIcon) {
    borderClass = "border-transparent";
    bgClass = "bg-transparent";
    shadowClass = "";
    fillClass = "fill-[var(--theme-color-100)]";
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
