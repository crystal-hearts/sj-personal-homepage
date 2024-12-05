import React from "react";

import { SITE_CONSTANTS } from "@/constants/site-constants";
import { MenuItem } from "@/components/menu-item";

export function Badge() {
  return (
    <div className="header-badge flex flex-row space-x-2 text-sm font-black text-[var(--theme-color-700)]">
      <MenuItem title={SITE_CONSTANTS.HOME_TITLE} href="/">
        {SITE_CONSTANTS.HOME_TITLE}
      </MenuItem>
    </div>
  );
}
