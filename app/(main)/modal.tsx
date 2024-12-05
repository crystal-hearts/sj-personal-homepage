import React from "react";

import { ModalHeader } from "./modal-header";

export function Modal({
  modalID,
  returnID,
  modalPosition,
  children,
}: {
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
    "overflow-hidden",
    "rounded-t-xl",
    "border-solid",
    "border-[var(--theme-color-500)]",
    "border-opacity-80",
    "bg-[var(--theme-color-100)]",
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
      <div className="modal-contents">
        <ModalHeader modalID={modalID} returnID={returnID} />
        <div className="modal-contents h-full px-1 py-2">{children}</div>
      </div>
    </div>
  );
}
