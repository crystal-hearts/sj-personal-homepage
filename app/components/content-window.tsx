import React from "react";

import { ContentWindowBody } from "@/components/content-window-body";
import { ContentWindowClose } from "@/components/content-window-close";
import { ContentWindowHeader } from "@/components/content-window-header";
import { ContentWindowTitle } from "@/components/content-window-title";

export function ContentWindow({
  windowTitle,
  id = "",
  returnID = "",
  href,
  noClose,
  noPadding,
  roundedTopOnly,
  className,
  children,
}: {
  windowTitle: string;
  id?: string;
  returnID?: string;
  href?: string;
  noClose?: boolean;
  noPadding?: boolean;
  roundedTopOnly?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const roundedClass = roundedTopOnly ? "rounded-t-xl" : "rounded-xl";

  const classNames = [
    "window",
    "overflow-hidden",
    "max-h-80vh",
    roundedClass,
    "border-2",
    "border-solid",
    "border-[var(--theme-color-700)]",
    "border-opacity-80",
    "bg-[var(--theme-color-200)]",
    "shadow-drop-5",
    className,
  ];

  return (
    <div id={id} className={classNames.join(" ")}>
      <ContentWindowHeader>
        <ContentWindowTitle>{windowTitle}</ContentWindowTitle>
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
