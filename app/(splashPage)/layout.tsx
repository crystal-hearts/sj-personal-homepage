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

export default function SplashPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="page"
      className="font-[family-name:var(--font-rubik)]"
      data-theme-color={SITE_CONSTANTS.DEFAULT_SITE_THEME}
      data-animation-play-state="running"
    >
      <Background />
      <Header>
        <HeaderMenu>
          <HeaderMenuItem itemID="about-me" itemLabel="about me" />
          <HeaderMenuItem itemID="contact" itemLabel="contact" />
          <HeaderMenuItem itemID="about-my-cat" itemLabel="about my cat" />
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
