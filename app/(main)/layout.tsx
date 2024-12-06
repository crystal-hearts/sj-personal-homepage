"use client";

import React from "react";

import { SITE_CONSTANTS } from "@/constants/site-constants";

import { Background } from "@/components/background";
import { FixedFooter } from "@/components/fixed-footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { PausePlayButton } from "@/components/pause-play-button";
import { SettingsButton } from "@/components/settings-button";
import { SettingsModal } from "@/components/settings-modal";
import { SocialLinks } from "@/components/social-links";

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
