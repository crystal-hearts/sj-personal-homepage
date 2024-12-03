import PauseIcon from "../images/pause-svgrepo-com.svg";
import PlayIcon from "../images/play-svgrepo-com.svg";

export function PausePlayButton() {
  const playButtonID = "play-button";
  const pauseButtonID = "pause-button";

  function handlePlayButton(animationPlayState: string) {
    const playButton = document.getElementById(playButtonID);
    const pauseButton = document.getElementById(pauseButtonID);

    if (playButton) {
      playButton.classList.add("hidden");
    }
    if (pauseButton) {
      pauseButton.classList.remove("hidden");
      pauseButton.focus();
    }

    toggleAnimationPlayState(animationPlayState);
  }
  function handlePauseButton(animationPlayState: string) {
    const playButton = document.getElementById(playButtonID);
    const pauseButton = document.getElementById(pauseButtonID);

    if (pauseButton) {
      pauseButton.classList.add("hidden");
    }
    if (playButton) {
      playButton.classList.remove("hidden");
      playButton.focus();
    }

    toggleAnimationPlayState(animationPlayState);
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
      <button
        id={pauseButtonID}
        title="Pause animations"
        className="pause-button h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
        onClick={() => handlePauseButton("paused")}
      >
        <PauseIcon />
      </button>
      <button
        id={playButtonID}
        title="Play animations"
        className="play-button hidden h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
        onClick={() => handlePlayButton("running")}
      >
        <PlayIcon />
      </button>
    </div>
  );
}
