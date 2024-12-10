import React from "react";

import { Button } from "@/components/button";

export function MenuItem({
  id,
  title,
  href,
  iconButton,
  inverseIcon,
  children,
}: {
  id: string;
  title: string;
  href: string;
  iconButton?: boolean;
  inverseIcon?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Button
      id={id}
      title={title}
      href={href}
      iconButton={iconButton}
      inverseIcon={inverseIcon}
    >
      <div className="flex h-full w-full flex-row items-center">{children}</div>
    </Button>
  );
}
