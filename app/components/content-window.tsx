import React from "react";

import { ContentWindowHeader } from "@/components/content-window-header";

export function ContentWindow({
  windowTitle,
  windowID,
  returnID,
  returnLocation,
  className,
  children,
}: {
  windowTitle: string;
  windowID?: string;
  returnID?: string;
  returnLocation?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const classNames = [
    "window",
    "overflow-hidden",
    "rounded-xl",
    "border-solid",
    "border-[var(--theme-color-500)]",
    "border-opacity-80",
    "bg-[var(--theme-color-100)]",
    "shadow-drop-5",
    className,
  ];
  return (
    <div id={windowID} className={classNames.join(" ")}>
      <div className="window-contents">
        <ContentWindowHeader
          windowTitle={windowTitle}
          windowID={windowID}
          returnID={returnID}
          returnLocation={returnLocation}
        />
        <div className="window-contents h-full px-1 py-2">{children}</div>
      </div>
    </div>
  );
}
