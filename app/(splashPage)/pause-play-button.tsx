import PauseIcon from "../images/pause-svgrepo-com.svg";
import PlayIcon from "../images/play-svgrepo-com.svg";

import { Button } from "./button";

export function PausePlayButton() {
  const playButtonID = "play-button";
  const pauseButtonID = "pause-button";

  const animationPlayStateRunning = "running";
  const animationPlayStatePaused = "paused";

  function handlePlayButton() {
    const playButton = document.getElementById(playButtonID);
    const pauseButton = document.getElementById(pauseButtonID);

    if (playButton && pauseButton) {
      playButton.classList.add("hidden");
      pauseButton.classList.remove("hidden");
      pauseButton.focus();
    }
    toggleAnimationPlayState(animationPlayStateRunning);
  }

  function handlePauseButton() {
    const playButton = document.getElementById(playButtonID);
    const pauseButton = document.getElementById(pauseButtonID);

    if (playButton && pauseButton) {
      pauseButton.classList.add("hidden");
      playButton.classList.remove("hidden");
      pauseButton.focus();
    }
    toggleAnimationPlayState(animationPlayStatePaused);
  }

  function toggleAnimationPlayState(playState: string) {
    document
      .querySelectorAll("[data-animation-play-state]")
      .forEach((element) => {
        element.setAttribute("data-animation-play-state", playState);
      });
  }

  return (
    <div className="pause-play-button">
      <Button
        buttonID="pause-button"
        buttonClass="pause-button"
        title="Pause animations"
        displayHidden={false}
        iconButton={true}
        clickHandler={() => handlePauseButton()}
      >
        <PauseIcon />
      </Button>
      <Button
        buttonID="play-button"
        buttonClass="play-button"
        title="Play animations"
        displayHidden={true}
        iconButton={true}
        clickHandler={() => handlePlayButton()}
      >
        <PlayIcon />
      </Button>
    </div>
  );
}
