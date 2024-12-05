import FastForwardIcon from "../images/fast-forward-svgrepo-com.svg";

import { Button } from "./button";

export function FastForwardButton() {
  function handleMouseDown() {}

  return (
    <Button
      buttonID="fast-forward-button"
      buttonClass="fast-forward-button"
      title="Fast forward animations"
      iconButton={true}
      mouseDownHandler={() => handleMouseDown()}
    >
      <FastForwardIcon />
    </Button>
  );
}
