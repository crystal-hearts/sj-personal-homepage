"use client";

import React from "react";

import { SITE_CONSTANTS } from "@/constants/site-constants";

import { Background } from "@/components/background";
import { FixedFooter } from "@/components/fixed-footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { ControlButtons } from "@/components/control-buttons";
import { SettingsModal } from "@/components/settings-modal";
import { SocialLinks } from "@/components/social-links";

/**
 * Layout component for (main). Contains all page navigation
 * @param {React.ReactNode} children Any children passed to the component
 */
export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id={SITE_CONSTANTS.PAGE_ID}
      className="font-[family-name:var(--font-inter)] text-sm text-[var(--theme-color-1000)]"
      data-theme-color={SITE_CONSTANTS.DEFAULT_SITE_THEME}
      data-animation-play-state={SITE_CONSTANTS.DEFAULT_ANIMATION_PLAY_STATE}
    >
      <Background />
      <Header>
        <Menu />
        <SocialLinks />
      </Header>
      <FixedFooter>
        <ControlButtons />
      </FixedFooter>
      <SettingsModal />
      {children}
    </div>
  );
}
