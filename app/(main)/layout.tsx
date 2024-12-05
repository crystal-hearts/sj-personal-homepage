"use client";

import React from "react";

import { SITE_CONSTANTS } from "../constants/site-constants";

import { Background } from "./background";
import { FixedFooter } from "./fixed-footer";
import { Header } from "./header";
import { Badge } from "./badge";
import { Menu } from "./menu";
import { PausePlayButton } from "./pause-play-button";
import { SettingsButton } from "./settings-button";
import { SettingsModal } from "./settings-modal";
import { SocialLinks } from "./social-links";

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
        <Badge />
        <Menu />
        <SocialLinks />
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
