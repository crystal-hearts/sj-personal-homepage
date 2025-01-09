import React from "react";

/**
 * Index card style job listing. Intended to live inside TicketContainer
 * @param {string} organization The organization. Default of an empty string
 * @param {string} position The position. Default of an empty string
 * @param {string} dateFrom The date worked from, in string format. Default of an empty string
 * @param {string} dateTo The date worked until, in string format. Default of an empty string
 * @param {string} className Any custom class names passed to the component
 * @param {React.ReactNode} children Any children passed to the component
 */
export function JobListing({
  organization = "",
  position = "",
  dateFrom = "",
  dateTo = "",
  className,
  children,
}: {
  organization?: string;
  position?: string;
  dateFrom?: string;
  dateTo?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const classNames = ["job-listing", className];
  return (
    <div className={classNames.join(" ")}>
      <div className="flex flex-col font-semibold">
        <div className="flex flex-col md:flex-row md:space-x-1">
          <span>{organization}</span>
          <span className="hidden md:inline">–</span>
          <span>{position}</span>
        </div>
        <hr className="mb-0.5 h-px border-0 bg-[var(--theme-color-500)]" />
        <span className="text-xs uppercase text-[var(--theme-color-700)]">
          {dateFrom} – {dateTo}
        </span>
      </div>
      <div className="mt-2 flex flex-col space-y-2">{children}</div>
    </div>
  );
}
