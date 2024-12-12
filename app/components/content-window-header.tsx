import React from "react";

/**
 * Header section for ContentWindow component
 * @param {string} id The ID for the containing window
 * @param {React.ReactNode} children Any children passed to the component
 */
export function ContentWindowHeader({
  noTitle,
  children,
}: {
  noTitle?: boolean;
  children?: React.ReactNode;
}) {
  if (!noTitle) {
    return (
      <div className="window-header flex flex-row items-center justify-between border-b-1 border-solid border-[var(--theme-color-700)] bg-[var(--theme-color-700)] py-1 pl-4 pr-2">
        {children}
      </div>
    );
  }
}
