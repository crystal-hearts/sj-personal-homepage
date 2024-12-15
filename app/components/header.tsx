import React from "react";

/**
 * Generic header
 * @param {React.ReactNode} children Any children passed to the component
 */
export function Header({ children }: { children?: React.ReactNode }) {
  return <header id="header">{children}</header>;
}
