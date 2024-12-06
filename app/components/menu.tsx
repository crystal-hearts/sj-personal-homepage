import React from "react";

import { SITE_CONSTANTS } from "@/constants/site-constants";
import { MenuItem } from "@/components/menu-item";

export function Menu() {
  return (
    <div className="menu flex flex-row space-x-2 text-sm font-black text-[var(--theme-color-700)]">
      <MenuItem title={SITE_CONSTANTS.HOME_TITLE} href="/">
        {SITE_CONSTANTS.HOME_TITLE}
      </MenuItem>
      <MenuItem title={SITE_CONSTANTS.ABOUT_ME_TITLE} href="/about-me">
        {SITE_CONSTANTS.ABOUT_ME_TITLE}
      </MenuItem>
      <MenuItem title={SITE_CONSTANTS.CONTACT_TITLE} href="/contact">
        {SITE_CONSTANTS.CONTACT_TITLE}
      </MenuItem>
      <MenuItem title={SITE_CONSTANTS.ABOUT_MY_CAT_TITLE} href="/about-my-cat">
        {SITE_CONSTANTS.ABOUT_MY_CAT_TITLE}
      </MenuItem>
    </div>
  );
}
