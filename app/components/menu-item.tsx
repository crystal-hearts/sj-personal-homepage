import React from "react";

import { Button } from "@/components/button";

/**
 * A menu item in the nav. Wraps custom Button component
 * @param {string} id The button's ID
 * @param {string} title The button's title
 * @param {string} href The location for a <Link> element
 * @param {boolean} iconButton If the button should have explicit height and width to support an SVG icon
 * @param {React.ReactNode} children Any children passed to the component
 */
export function MenuItem({
  id,
  title,
  href,
  iconButton,
  children,
}: {
  id?: string;
  title?: string;
  href?: string;
  iconButton?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Button id={id} title={title} href={href} iconButton={iconButton}>
      <div className="flex h-full w-full flex-row items-center">{children}</div>
    </Button>
  );
}
