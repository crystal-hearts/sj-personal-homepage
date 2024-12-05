import React from "react";

import { Button } from "@/components/button";

export function MenuItem({
  title,
  href,
  iconButton,
  inverseIcon,
  children,
}: {
  title: string;
  href: string;
  iconButton?: boolean;
  inverseIcon?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Button
      title={title}
      href={href}
      iconButton={iconButton}
      inverseIcon={inverseIcon}
    >
      <div className="flex h-full w-full flex-row items-center">{children}</div>
    </Button>
  );
}
