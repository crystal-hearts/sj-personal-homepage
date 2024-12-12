import React from "react";

import { ContentWindowBody } from "@/components/content-window-body";
import { ContentWindowClose } from "@/components/content-window-close";
import { ContentWindowHeader } from "@/components/content-window-header";
import { ContentWindowTitle } from "@/components/content-window-title";

export function ContentWindow({
  windowTitle,
  id,
  returnID,
  href,
  noClose,
  noPadding,
  roundedTopOnly,
  smallTitle,
  noTitle,
  inverseWindow,
  className,
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
