import React from "react";

/**
 * Container for displaying nice inline images. The image is passed as a child of the component
 * @param {string} title The title of the image, displays below it
 * @param {boolean} displayCircle If the image should be displayed as a cirlce
 * @param {React.ReactNode} children Any children passed to the component
 */
export function InlineImageContainer({
  title,
  displayCircle = false,
  children,
}: {
  title: string;
  displayCircle?: boolean;
  children?: React.ReactNode;
}) {
  const roundingClass = displayCircle ? "rounded-full" : "rounded";

  const classNames = [
    "inline-image",
    "h-32",
    "p-0",
    "overflow-hidden",
    "border-solid",
    "border-2",
    "border-[var(--theme-color-700)]",
    "bg-[var(--theme-color-100)]",
    "shadow-3",
    roundingClass,
  ];

  return (
    <div className="inline-image-container w-32 text-center">
      <div className={classNames.join(" ")}>{children}</div>
      <div className="inline-image-header mt-1 text-sm font-semibold">
        {title}
      </div>
    </div>
  );
}
