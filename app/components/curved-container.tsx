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
  children: React.ReactNode;
}>) {
  const classNames = [
    "curved-container",
    "w-full",
    "drop-shadow-border",
    className,
  ];

  const topCurveClasses = displayTopCurve ? "" : "hidden";
  const bottomCurveClasses = displayBottomCurve
    ? "drop-shadow-bottom"
    : "hidden";

  return (
    <div className={classNames.join(" ")}>
      <div className="relative top-2 w-full fill-[var(--theme-color-200)]">
        <CurveTop className={topCurveClasses} />
      </div>
      <div className="curved-container-body relative z-10 flex justify-center space-x-6 bg-[var(--theme-color-200)] px-6 py-4 sm:py-0">
        {children}
      </div>
      <div className="relative bottom-2 w-full fill-[var(--theme-color-200)]">
        <CurveBottom className={bottomCurveClasses} />
      </div>
    </div>
  );
}
