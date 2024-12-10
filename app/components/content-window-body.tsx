import React from "react";

export function ContentWindowBody({
  noPadding,
  className,
  children,
}: {
  noPadding?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const paddingClass = noPadding ? "p-0" : "px-4 pb-4 pt-2";

  const classNames = [
    "window-contents",
    "w-full",
    "h-full",
    "max-h-80vh",
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
