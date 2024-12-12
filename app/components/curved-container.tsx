import React from "react";

import CurveTop from "@/images/curve-top.svg";
import CurveBottom from "@/images/curve-bottom.svg";

export function CurvedContainer({
  displayTopCurve = true,
  displayBottomCurve = true,
  className,
  children,
}: Readonly<{
  displayTopCurve?: boolean;
  displayBottomCurve?: boolean;
  className?: string;
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

  return (
    <div className={classNames.join(" ")}>
      <div className="relative top-1 w-full fill-[var(--theme-color-100)]">
        <CurveTop className={topCurveClasses} />
      </div>
      <div className="curved-container-body relative z-10 flex flex-col space-y-6 bg-[var(--theme-color-100)] px-6 py-2 md:py-0">
        {children}
      </div>
      <div className="relative bottom-1 w-full fill-[var(--theme-color-100)]">
        <CurveBottom className={bottomCurveClasses} />
      </div>
    </div>
  );
}
