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
          <a title="LinkedIn" className="header-icon w-8 h-8 p-1 fill-[var(--theme-color-700)] bg-[var(--theme-color-100)] hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)]" href="https://www.linkedin.com/in/sarah-c-jacques/" target="_">
            <LinkedInIcon />
          </a>
          <a title="Bluesky" className="header-icon w-8 h-8 p-1 fill-[var(--theme-color-700)] bg-[var(--theme-color-100)] hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)]" href="https://bsky.app/" target="_">
            <BlueskyIcon />
          </a>
          <a title="Github" className="header-icon w-8 h-8 p-1 fill-[var(--theme-color-700)] bg-[var(--theme-color-100)] hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)]" href="https://github.com/crystal-hearts/" target="_">
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
          <button className="header-icon w-8 h-8 p-1 fill-[var(--theme-color-700)] bg-[var(--theme-color-100)] hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)]" onClick={() => openModal('settings-modal')}>
            <GearIcon />
          </button>
          <button id="pause-button" title="Pause animations" className="pause-button w-8 h-8 p-1 fill-[var(--theme-color-700)] bg-[var(--theme-color-100)] hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)]" onClick={() => handlePauseButton('paused')}>
            <PauseIcon />
          </button>
          <button id="play-button" title="Play animations" className="play-button hidden w-8 h-8 p-1 fill-[var(--theme-color-700)] bg-[var(--theme-color-100)] hover:scale-110 active:scale-110 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)]" onClick={() => handlePlayButton('running')}>
            <PlayIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}

function TextBubbles() {
  return (
    <div className="text-bubbles flex flex-row text-[var(--theme-color-700)] text-sm font-black">
      <button className="text-bubble mr-2 px-2 py-1 text-center rounded bg-[var(--theme-color-100)] shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] bg-[var(--theme-color-100)] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)] hover:scale-110 active:scale-105 transition duration-150">
        about me
      </button>
      <button className="text-bubble mr-2 px-2 py-1 text-center rounded bg-[var(--theme-color-100)] shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] bg-[var(--theme-color-100)] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)] hover:scale-110 active:scale-105 transition duration-150">
        contact
      </button>
      <button className="text-bubble mr-2 px-2 py-1 text-center rounded bg-[var(--theme-color-100)] shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] bg-[var(--theme-color-100)] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)] hover:scale-110 active:scale-105 transition duration-150">
        about my cat
      </button>
    </div>
  );
}

function changeThemeColor(colorName: string) {
  document.documentElement.style.setProperty('--theme-color-100', 'var(--' + colorName + '-100)');
  document.documentElement.style.setProperty('--theme-color-500', 'var(--' + colorName + '-500)');
  document.documentElement.style.setProperty('--theme-color-700', 'var(--' + colorName + '-700)');
  document.documentElement.style.setProperty('--theme-color-900', 'var(--' + colorName + '-900)');
}

function handlePlayButton(animationPlayState: string) {
  var playButton = document.getElementById('play-button');
  var pauseButton = document.getElementById('pause-button');

  playButton ? playButton.classList.add("hidden") : playButton;
  pauseButton ? pauseButton.classList.remove("hidden") : pauseButton;

  pauseButton ? pauseButton.focus() : null;

  toggleAnimations(animationPlayState);
}
function handlePauseButton(animationPlayState: string) {
  var playButton = document.getElementById('play-button');
  var pauseButton = document.getElementById('pause-button');

  pauseButton ? pauseButton.classList.add("hidden") : pauseButton;
  playButton ? playButton.classList.remove("hidden") : playButton;

  playButton ? playButton.focus() : null;

  toggleAnimations(animationPlayState);
}

function toggleAnimations(playState: string) {
  document.querySelectorAll('[data-animation-play-state]').forEach((element) => { element.setAttribute("data-animation-play-state", playState) });
}

function openModal(modalID: string) {
  var settingsModalElement = document.getElementById(modalID);
  settingsModalElement ? settingsModalElement.setAttribute("data-modal-active", 'open') : null;
  settingsModalElement ? settingsModalElement.getElementsByClassName('modal-heading')[0].focus() : null;
}

function closeModal(modalID: string) {
  var settingsModalElement = document.getElementById(modalID);
  settingsModalElement ? settingsModalElement.setAttribute("data-modal-active", 'closed') : null;
}

export default function Home() {
  return (
    <div id="page">
      <div id="background" className="background fixed w-full min-h-screen pb-10 bg-[var(--theme-color-500)] transition-colors duration-500" />
      <div id="scrolling-bg" className="bg-checkerboard-45 animate-scrolling-background bg-50 fixed w-full h-full border-solid border-16 border-opacity-80 border-[var(--theme-color-100)] opacity-20" data-animation-play-state="running" />
      <Header />
      <main className="relative w-full">
        <div className="section-container flex flex-row w-full min-h-48 items-center">
          <div className="section-contents flex flex-col items-center mx-auto">
            <h1>
              <div className="logo-desktop hidden sm:block w-75-vw mt-20">
                <LogoDesktop />
              </div>
              <div className="logo-mobile block sm:hidden w-80-vw mt-20">
                <LogoMobile />
              </div>
            </h1>
          </div>
        </div>
        <div id="settings-modal" className="settings-modal fixed overflow-hidden z-20 top-full left-4 transition-transform duration-500 rounded bg-[var(--theme-color-100)] shadow-[rgba(0,0,0.5,0.5)_5px_5px_5px_0px] border-solid border-2 border-opacity-80 border-[var(--theme-color-500)] modal-open:-translate-y-full" data-modal-active="closed">
          <div className="modal-contents flex flex-col">
            <div className="modal-header flex flex-row justify-between items-center pl-4 pr-3 py-1 border-solid border-b-2 border-opacity-80 border-[var(--theme-color-500)] bg-[var(--theme-color-700)]">
              <h2 className="modal-heading text-[var(--theme-color-100)] text-sm font-bold select-none" tabIndex="-1">site flavor</h2>
              <button className="modal-close w-4 h-4 fill-[var(--theme-color-100)]" onClick={() => closeModal('settings-modal')}>
                <CloseIcon />
              </button>
            </div>
            <div className="modal-contents h-full px-1 py-2">
              <div className="flavor-buttons flex flex-row">
                <div className="flavor-button-container flex flex-col items-center min-w-16 mx-2">
                  <button className="flavor-button w-8 h-8 mb-1 px-2 py-1 bg-[var(--ube-500)] text-[var(--ube-900)] border-opacity-80 border-[var(--ube-500)] hover:scale-105 active:scale-105 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_3px_3px_3px_0px] border-solid border-2" onClick={() => changeThemeColor('ube')} />
                  <span className="flavor-button-label w-full ml-1 text-xs font-semibold text-center">
                    ube
                  </span>
                </div>
                <div className="flavor-button-container flex flex-col items-center min-w-16 mx-2">
                  <button className="flavor-button w-8 h-8 mb-1 px-2 py-1 bg-[var(--raspberry-500)] text-[var(--raspberry-900)] border-opacity-80 border-[var(--raspberry-500)] hover:scale-105 active:scale-105 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_3px_3px_3px_0px] border-solid border-2" onClick={() => changeThemeColor('raspberry')} />
                  <span className="flavor-button-label w-full ml-1 text-xs font-semibold text-center">
                    raspberry
                  </span>
                </div>
                <div className="flavor-button-container flex flex-col items-center min-w-16 mx-2">
                  <button className="flavor-button w-8 h-8 mb-1 px-2 py-1 bg-[var(--strawberry-500)] text-[var(--strawberry-900)] border-opacity-80 border-[var(--strawberry-500)] hover:scale-105 active:scale-105 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_3px_3px_3px_0px] border-solid border-2" onClick={() => changeThemeColor('strawberry')} />
                  <span className="flavor-button-label w-full ml-1 text-xs font-semibold text-center">
                    strawberry
                  </span>
                </div>
                <div className="flavor-button-container flex flex-col items-center min-w-16 mx-2">
                  <button className="flavor-button w-8 h-8 mb-1 px-2 py-1 bg-[var(--lemon-500)] text-[var(--lemon-900)] border-opacity-80 border-[var(--lemon-500)] hover:scale-105 active:scale-105 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_3px_3px_3px_0px] border-solid border-2" onClick={() => changeThemeColor('lemon')} />
                  <span className="flavor-button-label w-full ml-1 text-xs font-semibold text-center">
                    lemon
                  </span>
                </div>
                <div className="flavor-button-container flex flex-col items-center min-w-16 mx-2">
                  <button className="flavor-button w-8 h-8 mb-1 px-2 py-1 bg-[var(--lime-500)] text-[var(--lime-900)] border-opacity-80 border-[var(--lime-500)] hover:scale-105 active:scale-105 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_3px_3px_3px_0px] border-solid border-2" onClick={() => changeThemeColor('lime')} />
                  <span className="flavor-button-label w-full ml-1 text-xs font-semibold text-center">
                    lime
                  </span>
                </div>
                <div className="flavor-button-container flex flex-col items-center min-w-16 mx-2">
                  <button className="flavor-button w-8 h-8 mb-1 px-2 py-1 bg-[var(--mint-500)] text-[var(--mint-900)] border-opacity-80 border-[var(--mint-500)] hover:scale-105 active:scale-105 transition duration-150 rounded shadow-[rgba(0,0,0.5,0.5)_3px_3px_3px_0px] border-solid border-2" onClick={() => changeThemeColor('mint')} />
                  <span className="flavor-button-label w-full ml-1 text-xs font-semibold text-center">
                    mint
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}