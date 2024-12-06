import React from "react";

export function TextSection({
  sectionTitle,
  children,
}: {
  sectionTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-section w-full overflow-hidden rounded-xl border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] shadow-drop-5">
      <div className="text-section-contents">
        <div className="text-section-header flex flex-row items-center justify-between border-b-2 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-700)] py-1 pl-4 pr-3">
          <h2 className="text-section-heading select-none text-xl font-bold text-[var(--theme-color-100)]">
            {sectionTitle}
          </h2>
        </div>
        <div className="contents h-full">
          <div className="text-section flex flex-col px-5 pb-4 pt-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
