import React from "react";

/**
 * Body section for ContentWindow component
 * @param {string} className Any custom class names passed to the component
 * @param {boolean} noPadding If the section should display without padding
 * @param {React.ReactNode} children Any children passed to the component
 */
export function ContentWindowBody({
  className,
  noPadding,
  children,
}: {
  className?: string;
  noPadding?: boolean;
  children?: React.ReactNode;
}) {
  const paddingClass = noPadding ? "p-0" : "px-4 pb-4 pt-2";

  const classNames = [
    "window-contents",
    "w-full",
    "h-full",
    "overflow-y-auto",
    paddingClass,
    className,
  ];

  return (
    <div className={classNames.join(" ")}>
      <div className="flex flex-col space-y-2">{children}</div>
    </div>
  );
}
