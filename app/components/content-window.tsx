import React from "react";

import { ContentWindowHeader } from "@/components/content-window-header";
import { ContentWindowClose } from "@/components/content-window-close";
import { ContentWindowTitle } from "@/components/content-window-title";

export function ContentWindow({
  windowTitle,
  windowID,
  returnID,
  returnLocation,
  noClose,
  noPadding,
  roundedTopOnly,
  className,
  children,
}: {
  windowTitle: string;
  windowID?: string;
  returnID?: string;
  returnLocation?: string;
  noClose?: boolean;
  noPadding?: boolean;
  roundedTopOnly?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const paddingClass = noPadding ? "p-0" : "px-4 pb-4 pt-2";
  const roundedClass = roundedTopOnly ? "rounded-t-xl" : "rounded-xl";

  const windowClassNames = [
    "window",
    "overflow-hidden",
    roundedClass,
    "border-solid",
    "border-[var(--theme-color-500)]",
    "border-opacity-80",
    "bg-[var(--theme-color-200)]",
    "shadow-drop-5",
    className,
  ];

  const contentClassNames = [
    "window-contents",
    "h-full",
    "w-full",
    paddingClass,
  ];

  return (
    <div id={windowID} className={windowClassNames.join(" ")}>
      <ContentWindowHeader>
        <ContentWindowTitle>{windowTitle}</ContentWindowTitle>
        <ContentWindowClose
          windowID={windowID}
          returnID={returnID}
          returnLocation={returnLocation}
          noClose={noClose}
        />
      </ContentWindowHeader>
      <div className={contentClassNames.join(" ")}>{children}</div>
    </div>
  );
}
