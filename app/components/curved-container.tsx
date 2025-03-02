import React from "react";

import CurveTop from "@/images/curve-top.svg";
import CurveBottom from "@/images/curve-bottom.svg";

/**
 * The CurvedContainer component. Contains other componenets in nice curved sections
 * @param {string} className Any custom class names passed to the component
 * @param {boolean} displayTopCurve If the section's top curve should be displayed. Defaults to true
 * @param {boolean} displayBottomCurve If the section's bottom curve should be displayed. Defaults to true
 * @param {React.ReactNode} children Any children passed to the component
 */
export function CurvedContainer({
  className,
  displayTopCurve = true,
  displayBottomCurve = true,
  children,
}: Readonly<{
  className?: string;
  displayTopCurve?: boolean;
  displayBottomCurve?: boolean;
  children?: React.ReactNode;
}>) {
  const classNames = [
    "curved-container",
    "flex",
    "flex-col",
    "w-full",
    "drop-shadow-border-2",
    className,
  ];

  const topCurveClasses = displayTopCurve ? "" : "hidden";
  const bottomCurveClasses = displayBottomCurve
    ? "drop-shadow-bottom"
    : "hidden";

  const bodyTopPadding = displayTopCurve ? "pt-6" : "";
  const bodyBottomPadding = displayBottomCurve ? "pb-6" : "";
  const bodyClasses = [
    "curved-container-body",
    "relative",
    "z-10",
    "flex",
    "flex-col",
    "space-y-6",
    "items-center",
    "bg-[var(--theme-color-100)]",
    "px-6",
    bodyTopPadding,
    bodyBottomPadding,
  ];

  return (
    <div className={classNames.join(" ")}>
      <div className="relative top-1 w-full fill-[var(--theme-color-100)]">
        <CurveTop className={topCurveClasses} role="img" title="Top curve" />
      </div>
      <div className={bodyClasses.join(" ")}>{children}</div>
      <div className="relative bottom-1 w-full fill-[var(--theme-color-100)]">
        <CurveBottom
          className={bottomCurveClasses}
          role="img"
          title="Bottom curve"
        />
      </div>
    </div>
  );
}
