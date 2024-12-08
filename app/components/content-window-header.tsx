"use client";

import { ContentWindowClose } from "@/components/content-window-close";

export function ContentWindowHeader({
  windowTitle,
  windowID,
  returnID,
  returnLocation,
}: {
  windowTitle: string;
  windowID?: string;
  returnID?: string;
  returnLocation?: string;
}) {
  return (
    <div className="window-header flex flex-row items-center justify-between border-b-2 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-700)] py-1 pl-4 pr-2">
      <h2
        className="window-heading select-none text-base font-bold text-[var(--theme-color-100)]"
        tabIndex="-1"
      >
        {windowTitle}
      </h2>
      <ContentWindowClose
        windowID={windowID}
        returnID={returnID}
        returnLocation={returnLocation}
      />
    </div>
  );
}
