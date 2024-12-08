"use client";

import { Button } from "@/components/button";

import { closeModalOrWindow } from "@/helpers/helpers";

import CloseIcon from "@/images/close-svgrepo-com.svg";

export function ContentWindowClose({
  windowID,
  returnID,
  returnLocation,
}: {
  windowID?: string;
  returnID?: string;
  returnLocation?: string;
}) {
  if (returnLocation) {
    return (
      <Button
        className="window-close"
        title="Close window"
        iconButton={true}
        inverseIcon={true}
        transparentIcon={true}
        href={returnLocation}
      >
        <CloseIcon />
      </Button>
    );
  } else if (windowID && returnID) {
    return (
      <Button
        className="window-close"
        title="Close window"
        iconButton={true}
        inverseIcon={true}
        transparentIcon={true}
        onClick={() => closeModalOrWindow(windowID, returnID)}
      >
        <CloseIcon />
      </Button>
    );
  } else {
    return (
      <Button
        className="window-close"
        title="Close window"
        iconButton={true}
        inverseIcon={true}
        transparentIcon={true}
      >
        <CloseIcon />
      </Button>
    );
  }
}
