import React from "react";

import { ContentWindow } from "@/components/content-window";

export function Modal({
  modalTitle,
  modalID,
  returnID,
  modalPosition,
  children,
}: {
  modalTitle: string;
  modalID: string;
  returnID: string;
  modalPosition?: string;
  children: React.ReactNode;
}) {
  const classNames = [
    "modal",
    modalPosition === "bottom-left"
      ? "left-4 top-full modal-open:-translate-y-full"
      : "",
    "fixed",
    "z-20",
    "shadow-drop-5",
    "transition-transform",
    "duration-500",
  ];
  return (
    <div
      id={modalID}
      className={classNames.join(" ")}
      data-modal-active="closed"
    >
      <ContentWindow
        windowTitle={modalTitle}
        windowID={modalID}
        returnID={returnID}
      >
        {children}
      </ContentWindow>
    </div>
  );
}