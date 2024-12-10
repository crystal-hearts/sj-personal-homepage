import { Button } from "@/components/button";

import { SITE_CONSTANTS } from "@/constants/site-constants";

import PauseIcon from "@/images/pause-svgrepo-com.svg";
import PlayIcon from "@/images/play-svgrepo-com.svg";

export function PausePlayButton() {
  function handlePlayPauseButton(playState: string) {
    toggleAnimationPlayState(playState);
    togglePlayPauseButtons(playState);
  }

  function togglePlayPauseButtons(playState: string) {
    const playButton = document.getElementById(SITE_CONSTANTS.PLAY_BUTTON_ID);
    const pauseButton = document.getElementById(SITE_CONSTANTS.PAUSE_BUTTON_ID);

    if (playButton && pauseButton && playState) {
      if (playState === SITE_CONSTANTS.ANIMATION_PLAY_STATE_RUNNING) {
        playButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
        playButton.focus();
      } else if (playState === SITE_CONSTANTS.ANIMATION_PLAY_STATE_PAUSED) {
        pauseButton.classList.add("hidden");
        playButton.classList.remove("hidden");
        pauseButton.focus();
      }
    }
  }

  function toggleAnimationPlayState(playState: string) {
    const pageElement = document.getElementById(SITE_CONSTANTS.PAGE_ID);
    if (pageElement && playState) {
      pageElement.setAttribute("data-animation-play-state", playState);
    }
  }

  return (
    <div className="pause-play-button">
      <Button
        id={SITE_CONSTANTS.PAUSE_BUTTON_ID}
        title={SITE_CONSTANTS.PAUSE_BUTTON_TITLE}
        displayHidden={false}
        iconButton={true}
        onClick={() =>
          handlePlayPauseButton(SITE_CONSTANTS.ANIMATION_PLAY_STATE_PAUSED)
        }
      >
        <PauseIcon />
      </Button>
      <Button
        id={SITE_CONSTANTS.PLAY_BUTTON_ID}
        title={SITE_CONSTANTS.PLAY_BUTTON_TITLE}
        displayHidden={true}
        iconButton={true}
        onClick={() =>
          handlePlayPauseButton(SITE_CONSTANTS.ANIMATION_PLAY_STATE_RUNNING)
        }
      >
        <PlayIcon />
      </Button>
    </div>
  );
}
