"use client";

import { Button } from "@/components/button";

import { closeModalOrWindow } from "@/helpers/helpers";

import CloseIcon from "@/images/close-svgrepo-com.svg";

export function ContentWindowClose({
  id = "",
  returnID = "",
  href,
  noClose,
}: {
  id: string;
  returnID: string;
  href?: string;
  noClose?: boolean;
}) {
  if (noClose) {
    return <div />;
  } else {
    return (
      <Button
        className="window-close"
        title="Close window"
        iconButton={true}
        inverseIcon={true}
        transparentIcon={true}
        href={href}
        onClick={() => closeModalOrWindow(id, returnID)}
      >
        <CloseIcon />
      </Button>
    );
  }
}
