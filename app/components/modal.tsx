import React from "react";

import { ContentWindow } from "@/components/content-window";

export function Modal({
  modalTitle,
  modalID,
  returnID,
  modalPosition,
  roundedTopOnly,
  smallTitle,
  children,
}: {
  modalTitle: string;
  modalID: string;
  returnID: string;
  modalPosition?: string;
  roundedTopOnly?: boolean;
  smallTitle?: boolean;
  children?: React.ReactNode;
}) {
  const classNames = [
    "modal",
    modalPosition && modalPosition === "bottom-left"
      ? "left-4 top-full invisible modal-open:visible modal-open:-translate-y-full"
      : "",
    "fixed",
    "z-20",
    "shadow-5",
    "transition-transform",
    "duration-500",
  ];
  return (
    <div
      id={modalID}
      className={classNames.join(" ")}
      data-modal-state="closed"
      tabIndex={-1}
    >
      <ContentWindow
        windowTitle={modalTitle}
        id={modalID}
        returnID={returnID}
        roundedTopOnly={roundedTopOnly}
        smallTitle={smallTitle}
      >
        {children}
      </ContentWindow>
    </div>
  );
}
