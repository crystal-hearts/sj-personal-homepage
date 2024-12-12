import React from "react";

import { SITE_CONSTANTS } from "@/constants/site-constants";
import { MenuItem } from "@/components/menu-item";

export function Menu() {
  return (
    <div className="menu hidden flex-row space-x-2 text-sm font-black text-[var(--theme-color-700)] md:flex">
      <MenuItem id="about-me-button" href="#about-me">
        {SITE_CONSTANTS.ABOUT_ME_TITLE}
      </MenuItem>
      <MenuItem id="about-site-button" href="#about-site">
        {SITE_CONSTANTS.ABOUT_SITE_TITLE}
      </MenuItem>
      <MenuItem id="about-my-cat-button" href="#about-my-cat">
        {SITE_CONSTANTS.ABOUT_MY_CAT_TITLE}
      </MenuItem>
      <MenuItem id="contact-button" href="#contact">
        {SITE_CONSTANTS.CONTACT_TITLE}
      </MenuItem>
    </div>
  );
}
