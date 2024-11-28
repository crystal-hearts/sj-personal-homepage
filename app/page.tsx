'use client';

import GearIcon from './images/gear-svgrepo-com.svg';
import CloseIcon from './images/close-svgrepo-com.svg';
import PauseIcon from './images/pause-svgrepo-com.svg';
import PlayIcon from './images/play-svgrepo-com.svg';
import GithubIcon from './images/github.svg';
import LinkedInIcon from './images/linkedin.svg';
import LogoDesktop from './images/logo-desktop.svg';
import LogoMobile from './images/logo-mobile.svg';
import BlueskyIcon from './images/bluesky.svg';

function Header() {
  return (
    <header id="header" className="fixed header w-full p-4 z-10">
      <nav className="flex flex-row justify-between py-2 px-2">
        <TextBubbles />
        <div className="header-icons flex space-x-2">
          <a title="LinkedIn" className="header-icon w-8 h-8 p-1 fill-neutral-900 bg-neutral-100 hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-neutral-800" href="https://www.linkedin.com/in/sarah-c-jacques/" target="_">
            <LinkedInIcon />
          </a>
          <a title="Bluesky" className="header-icon w-8 h-8 p-1 fill-neutral-900 bg-neutral-100 hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-neutral-800" href="https://bsky.app/" target="_">
            <BlueskyIcon />
          </a>
          <a title="Github" className="header-icon w-8 h-8 p-1 fill-neutral-900 bg-neutral-100 hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-neutral-800" href="https://github.com/crystal-hearts/" target="_">
            <GithubIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <header id="footer" className="fixed footer bottom-0 left-0 w-full p-4 z-10">
      <nav className="flex flex-row justify-between py-2 px-2">
        <div className="header-icons flex space-x-2">
          <button className="header-icon w-8 h-8 p-1 fill-neutral-900 bg-neutral-100 hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-neutral-800" onClick={() => openModal('settings-modal')}>
            <GearIcon />
          </button>
          <button id="pause-button" title="Pause animations" className="pause-button w-8 h-8 p-1 fill-neutral-900 bg-neutral-100 hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-neutral-800" onClick={() => handlePauseButton('paused')}>
            <PauseIcon />
          </button>
          <button id="play-button" title="Play animations" className="play-button w-8 h-8 p-1 fill-neutral-900 bg-neutral-100 hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-neutral-800" onClick={() => handlePlayButton('running')}>
            <PlayIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}

function TextBubbles() {
  return (
    <div className="text-bubbles flex flex-row text-neutral-900 text-sm font-[family-name:var(--font-rubik)] font-black">
      <button className="text-bubble mr-2 px-2 py-1 text-center rounded bg-neutral-100 shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] bg-neutral-100 border-solid border-2 border-neutral-800 hover:scale-110 active:scale-105 transition duration-150" onClick={() => rotatePageThemeColor()}>
        about me
      </button>
      <button className="text-bubble mr-2 px-2 py-1 text-center rounded bg-neutral-100 shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] bg-neutral-100 border-solid border-2 border-neutral-800 hover:scale-110 active:scale-105 transition duration-150" onClick={() => rotatePageThemeColor()}>
        contact
      </button>
      <button className="text-bubble mr-2 px-2 py-1 text-center rounded bg-neutral-100 shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] bg-neutral-100 border-solid border-2 border-neutral-800 hover:scale-110 active:scale-105 transition duration-150" onClick={() => rotatePageThemeColor()}>
        about my cat
      </button>
    </div>
  );
}



function rotatePageThemeColor() {
  var pageThemeColorElements = document.querySelectorAll('[data-bg-color-value]');
  var colorValue = pageThemeColorElements[0].getAttribute('data-bg-color-value');
  colorValue = colorValue ? ((parseInt(colorValue) + 1) % 4).toString() : "0";
  colorValue ? document.querySelectorAll('[data-bg-color-value]').forEach((element) => { element.setAttribute("data-bg-color-value", colorValue) }) : null;
}

function handlePlayButton(animationPlayState: string) {
  var playButton = document.getElementById('play-button');
  var pauseButton = document.getElementById('pause-button');

  playButton ? playButton.style.display = "none" : playButton;
  pauseButton ? pauseButton.style.display = "block" : pauseButton;

  pauseButton ? pauseButton.focus() : null;

  toggleAnimations(animationPlayState);
}
function handlePauseButton(animationPlayState: string) {
  var playButton = document.getElementById('play-button');
  var pauseButton = document.getElementById('pause-button');

  playButton ? playButton.style.display = "block" : playButton;
  pauseButton ? pauseButton.style.display = "none" : pauseButton;

  playButton ? playButton.focus() : null;

  toggleAnimations(animationPlayState);
}

function toggleAnimations(playState: string) {
  document.querySelectorAll('[data-animation-play-state]').forEach((element) => { element.setAttribute("data-animation-play-state", playState) });
}

function openModal(modalID:string) {
  var settingsModalElement = document.getElementById(modalID);
  settingsModalElement ? settingsModalElement.setAttribute("data-modal-active", 'open') : null;
  settingsModalElement ? settingsModalElement.getElementsByClassName('modal-heading')[0].focus() : null;
}

function closeModal(modalID:string) {
  var settingsModalElement = document.getElementById(modalID);
  settingsModalElement ? settingsModalElement.setAttribute("data-modal-active", 'closed') : null;
}

export default function Home() {
  return (
    <div id="page">
      <div id="background" className="background fixed w-full min-h-screen pb-10" data-bg-color-value="0"/>
      <div id="scrolling-bg" className="scrolling-bg fixed w-full h-full border-solid border-8 border-neutral-100 opacity-20" data-animation-play-state="running" />
      <Header />
      <main className="relative w-full">
        <div className="section-container flex flex-row w-full min-h-48 items-center">
          <div className="section-contents flex flex-col items-center mx-auto">
            <h1>
              <div className="logo logo-desktop hidden sm:block mt-20">
                <LogoDesktop />
              </div>
              <div className="logo logo-mobile block sm:hidden mt-20">
                <LogoMobile />
              </div>
            </h1>
          </div>
        </div>
        <div id="settings-modal" className="settings-modal fixed z-20 top-full w-2/4 left-1/4 h-36 transition-transform duration-500 rounded-2xl bg-neutral-100 shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-neutral-800" data-modal-active="closed">
          <div className="modal-contents flex flex-col">
          <div className="modal-header flex rounded-t-xl border-solid border-b-2 border-neutral-800" data-bg-color-value="0">
            <h2 className="modal-heading px-2 py-1 text-neutral-100 text-sm font-[family-name:var(--font-rubik)] font-bold" tabindex="-1">site flavour</h2>
            <button className="modal-close w-4 h-4 fill-neutral-200" onClick={() => closeModal('settings-modal')}>
                <CloseIcon />
            </button>
          </div>
          <div className="modal-contents h-full">
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}