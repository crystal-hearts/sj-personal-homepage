"use client";

import GearIcon from "./images/gear-svgrepo-com.svg";
import CloseIcon from "./images/close-svgrepo-com.svg";
import PauseIcon from "./images/pause-svgrepo-com.svg";
import PlayIcon from "./images/play-svgrepo-com.svg";
import GithubIcon from "./images/github.svg";
import LinkedInIcon from "./images/linkedin.svg";
import LogoDesktop from "./images/logo-desktop.svg";
import LogoMobile from "./images/logo-mobile.svg";
import BlueskyIcon from "./images/bluesky.svg";

function Header() {
  return (
    <header id="header" className="header fixed z-10 w-full p-4">
      <nav className="flex flex-row justify-between px-2 py-2">
        <TextBubbles />
        <div className="header-icons flex space-x-2">
          <a
            title="LinkedIn"
            className="header-icon h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
            href="https://www.linkedin.com/in/sarah-c-jacques/"
            target="_"
          >
            <LinkedInIcon />
          </a>
          <a
            title="Bluesky"
            className="header-icon h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
            href="https://bsky.app/"
            target="_"
          >
            <BlueskyIcon />
          </a>
          <a
            title="Github"
            className="header-icon h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
            href="https://github.com/crystal-hearts/"
            target="_"
          >
            <GithubIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer
      id="footer"
      className="footer fixed bottom-0 left-0 z-10 w-full p-4"
    >
      <nav className="flex flex-row justify-between px-2 py-2">
        <div className="footer-icons flex space-x-2">
          <button
            className="settings-button h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
            onClick={() => openModal("settings-modal")}
          >
            <GearIcon />
          </button>
          <button
            id="pause-button"
            title="Pause animations"
            className="pause-button h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
            onClick={() => handlePauseButton("paused")}
          >
            <PauseIcon />
          </button>
          <button
            id="play-button"
            title="Play animations"
            className="play-button hidden h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
            onClick={() => handlePlayButton("running")}
          >
            <PlayIcon />
          </button>
        </div>
      </nav>
    </footer>
  );
}

function FlavorButton({ flavor }: { flavor: string }) {
  const buttonClasses =
    "flavor-button mb-1 h-8 w-8 rounded bg-[var(--" +
    flavor +
    "-500)] px-2 py-1 shadow-drop-3 transition duration-150 hover:scale-105 active:scale-105";

  return (
    <div className="flavor-button-container mb-2 mr-4 flex min-w-14 flex-col items-center">
      <button
        className={buttonClasses}
        onClick={() => changeThemeColor(flavor)}
      />
      <span className="flavor-button-label ml-1 w-full text-center text-xs font-semibold">
        {flavor}
      </span>
    </div>
  );
}

function TextBubbles() {
  return (
    <div className="text-bubbles flex flex-row text-sm font-black text-[var(--theme-color-700)]">
      <button className="text-bubble mr-2 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] px-2 py-1 text-center shadow-drop-5 transition duration-150 hover:scale-110 active:scale-105">
        about me
      </button>
      <button className="text-bubble mr-2 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] px-2 py-1 text-center shadow-drop-5 transition duration-150 hover:scale-110 active:scale-105">
        contact
      </button>
      <button className="text-bubble mr-2 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] px-2 py-1 text-center shadow-drop-5 transition duration-150 hover:scale-110 active:scale-105">
        about my cat
      </button>
    </div>
  );
}

function SettingsModal() {
  return (
    <div
      id="settings-modal"
      className="settings-modal fixed left-4 top-full z-20 overflow-hidden rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] shadow-drop-5 transition-transform duration-500 modal-open:-translate-y-full"
      data-modal-active="closed"
    >
      <div className="modal-contents">
        <div className="modal-header flex flex-row items-center justify-between border-b-2 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-700)] py-1 pl-4 pr-3">
          <h2
            className="modal-heading select-none text-sm font-bold text-[var(--theme-color-100)]"
            tabIndex="-1"
          >
            site flavor
          </h2>
          <button
            className="modal-close h-4 w-4 fill-[var(--theme-color-100)]"
            onClick={() => closeModal("settings-modal", "settings-button")}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="modal-contents h-full px-1 py-2">
          <div className="flavor-buttons flex flex-row flex-wrap">
            <FlavorButton flavor="ube" />
            <FlavorButton flavor="raspberry" />
            <FlavorButton flavor="strawberry" />
            <FlavorButton flavor="lemon" />
            <FlavorButton flavor="lime" />
            <FlavorButton flavor="mint" />
          </div>
        </div>
      </div>
    </div>
  );
}

function changeThemeColor(colorName: string) {
  document.documentElement.style.setProperty(
    "--theme-color-100",
    "var(--" + colorName + "-100)",
  );
  document.documentElement.style.setProperty(
    "--theme-color-500",
    "var(--" + colorName + "-500)",
  );
  document.documentElement.style.setProperty(
    "--theme-color-700",
    "var(--" + colorName + "-700)",
  );
  document.documentElement.style.setProperty(
    "--theme-color-900",
    "var(--" + colorName + "-900)",
  );
}

function handlePlayButton(animationPlayState: string) {
  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");

  if (playButton) {
    playButton.classList.add("hidden");
  }
  if (pauseButton) {
    pauseButton.classList.remove("hidden");
    pauseButton.focus();
  }

  toggleAnimations(animationPlayState);
}
function handlePauseButton(animationPlayState: string) {
  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");

  if (pauseButton) {
    pauseButton.classList.add("hidden");
  }
  if (playButton) {
    playButton.classList.remove("hidden");
    playButton.focus();
  }

  toggleAnimations(animationPlayState);
}

function toggleAnimations(playState: string) {
  document
    .querySelectorAll("[data-animation-play-state]")
    .forEach((element) => {
      element.setAttribute("data-animation-play-state", playState);
    });
}

function openModal(modalID: string) {
  const settingsModalElement = document.getElementById(modalID);
  if (settingsModalElement) {
    settingsModalElement.setAttribute("data-modal-active", "open");
    settingsModalElement.getElementsByClassName("modal-heading")[0].focus();
  }
}

function closeModal(modalID: string, returnID: string) {
  const settingsModalElement = document.getElementById(modalID);
  const returnElement = document.getElementById(returnID);
  if (settingsModalElement) {
    settingsModalElement.setAttribute("data-modal-active", "closed");
  }
  if (returnElement) {
    returnElement.focus();
  }
}

export default function Home() {
  return (
    <div id="page" className="font-[family-name:var(--font-rubik)]">
      <div
        id="background"
        className="background fixed min-h-screen w-full bg-[var(--theme-color-500)] pb-10 transition-colors duration-500"
      />
      <div
        id="bg-scrolling"
        className="fixed h-full w-full animate-bg-scrolling-12 border-0 border-solid border-[var(--theme-color-100)] border-opacity-80 bg-checkerboard-45 bg-50 opacity-20"
        data-animation-play-state="running"
      />
      <Header />
      <main className="relative w-full">
        <div className="section-container flex min-h-48 w-full flex-row items-center">
          <div className="section-contents mx-auto flex flex-col items-center">
            <h1>
              <div className="logo logo-desktop mt-20 hidden w-75-vw sm:block">
                <LogoDesktop />
              </div>
              <div className="logo logo-mobile mt-20 block w-80-vw sm:hidden">
                <LogoMobile />
              </div>
            </h1>
          </div>
        </div>
        <SettingsModal />
      </main>
      <Footer />
    </div>
  );
}
