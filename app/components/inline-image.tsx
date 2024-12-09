import React from "react";

export function InlineImage({
  imageTitle,
  className,
  children,
}: {
  imageTitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const classNames = [
    "inline-image",
    "p-0",
    "overflow-hidden",
    "rounded",
    "border-solid",
    "border-[var(--theme-color-500)]",
    "border-opacity-80",
    "bg-[var(--theme-color-200)]",
    "shadow-drop-3",
    className,
  ];

  return (
    <div className="inline-image-container max-w-40 text-center">
      <div className={classNames.join(" ")}>{children}</div>
      <div className="inline-image-header text-sm font-semibold">
        {imageTitle}
      </div>
    </div>
  );
}
