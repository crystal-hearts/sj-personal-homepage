import React from "react";

import { ContentWindow } from "@/components/content-window";

/**
 * Generic modal component. Currently wraps the ContentWindow component
 * @param {string} modalID The modal's ID
 * @param {string} returnID The element that should be focused on when the modal is closed
 * @param {string} modalPosition The modal's position
 * @param {boolean} roundedTopOnly If only the top of the modal should be displayed as rounded
 * @param {boolean} smallTitle If the modal should be rendered with a small-text title
 * @param {React.ReactNode} children Any children passed to the component
 */
export function Modal({
  modalID,
  returnID,
  modalTitle,
  modalPosition,
  roundedTopOnly,
  smallTitle,
  children,
}: {
  modalID: string;
  returnID: string;
  modalTitle: string;
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
    "duration-0", // If reduced motion is preferred, instant transition
    "motion-safe:duration-500", // If no preference for reduced motion, 500ms
  ];
  return (
    <div
      id={modalID}
      className={classNames.join(" ")}
      role="dialog"
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
