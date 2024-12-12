"use client";

import { Button } from "@/components/button";

import { closeModalOrWindow } from "@/helpers/helpers";

import CloseIcon from "@/images/close-svgrepo-com.svg";

/**
 * Body section for ContentWindow component
 * @param {string} id The ID for the containing window
 * @param {string} returnID The ID of the element that should be focused on after closing the window
 * @param {string} href Alternatively, a location that should be visited when closing the window
 * @param {boolean} noClose If no close button should be displayed
 */
export function ContentWindowClose({
  id = "",
  returnID = "",
  href,
  noClose,
}: {
  id?: string;
  returnID?: string;
  href?: string;
  noClose?: boolean;
}) {
  if (noClose) {
    return <div />;
  } else {
    return (
      <Button
        className="window-close h-7 w-7"
        title="Close dialog"
        iconButton={true}
        transparentIcon={true}
        href={href}
        onClick={() => closeModalOrWindow(id, returnID)}
      >
        <CloseIcon />
      </Button>
    );
  }
}
