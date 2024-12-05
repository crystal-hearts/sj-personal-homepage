"use client";

import React from "react";

import { SITE_CONSTANTS } from "../constants/site-constants";

import { Background } from "./background";
import { FixedFooter } from "./fixed-footer";
import { Header } from "./header";
import { HeaderMenu } from "./header-menu";
import { HeaderMenuItem } from "./header-menu-item";
import { PausePlayButton } from "./pause-play-button";
import { SettingsButton } from "./settings-button";
import { SettingsModal } from "./settings-modal";
import { SocialIcons } from "./social-icons";

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id={SITE_CONSTANTS.PAGE_ID}
      className="font-[family-name:var(--font-rubik)]"
      data-theme-color={SITE_CONSTANTS.DEFAULT_SITE_THEME}
      data-animation-play-state={SITE_CONSTANTS.DEFAULT_ANIMATION_PLAY_STATE}
    >
      <Background />
      <Header>
        <HeaderMenu>
          <HeaderMenuItem
            itemLabel={SITE_CONSTANTS.ABOUT_ME_TITLE}
            href="/about-me"
          />
          <HeaderMenuItem
            itemLabel={SITE_CONSTANTS.CONTACT_TITLE}
            href="/contact"
          />
          <HeaderMenuItem
            itemLabel={SITE_CONSTANTS.ABOUT_MY_CAT_TITLE}
            href="/about-my-cat"
          />
        </HeaderMenu>
        <SocialIcons />
      </Header>
      {children}
      <SettingsModal />
      <FixedFooter>
        <SettingsButton />
        <PausePlayButton />
      </FixedFooter>
    </div>
  );
}