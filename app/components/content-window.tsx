import React from "react";

import { ContentWindowBody } from "@/components/content-window-body";
import { ContentWindowClose } from "@/components/content-window-close";
import { ContentWindowHeader } from "@/components/content-window-header";
import { ContentWindowTitle } from "@/components/content-window-title";

/**
 * The ContentWindow component. Contains other components in a nice faux window
 * @param {string} id The window's ID
 * @param {string} returnID The ID of the component that the window's close button should direct focus to
 * @param {string} className Any custom class names passed to the component
 * @param {string} href The location the window's close button should redirect to
 * @param {string} windowTitle The window's title
 * @param {boolean} noClose If no close button should be displayed
 * @param {boolean} noPadding If the body section should display without padding
 * @param {boolean} roundedTopOnly If the window should have rounding on the top only
 * @param {boolean} smallTitle If the window title should display with small text
 * @param {boolean} noTitle If the window title should display no text
 * @param {boolean} inverseWindow If the window should have inverted colors
 * @param {React.ReactNode} children Any children passed to the component
 */
export function ContentWindow({
  id,
  returnID,
  href,
  className,
  windowTitle,
  noClose,
  noPadding,
  roundedTopOnly,
  smallTitle,
  noTitle,
  inverseWindow,
  children,
}: {
  windowTitle?: string;
  id?: string;
  returnID?: string;
  href?: string;
  noClose?: boolean;
  noPadding?: boolean;
  roundedTopOnly?: boolean;
  smallTitle?: boolean;
  noTitle?: boolean;
  inverseWindow?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const roundedClass = roundedTopOnly ? "rounded-t-xl" : "rounded-xl";
  const colorClasses = inverseWindow
    ? "bg-[var(--theme-color-700)] text-[var(--theme-color-200)]"
    : "bg-[var(--theme-color-100)]";

  const classNames = [
    "window",
    "overflow-hidden",
    roundedClass,
    "border-2",
    "border-solid",
    "border-[var(--theme-color-700)]",
    colorClasses,
    "shadow-5",
    className,
  ];

  return (
    <div className={classNames.join(" ")}>
      <ContentWindowHeader noTitle={noTitle}>
        <ContentWindowTitle smallTitle={smallTitle} noTitle={noTitle}>
          {windowTitle}
        </ContentWindowTitle>
        <ContentWindowClose
          id={id}
          returnID={returnID}
          href={href}
          noClose={noClose}
        />
      </ContentWindowHeader>
      <ContentWindowBody noPadding={noPadding}>{children}</ContentWindowBody>
    </div>
  );
}
