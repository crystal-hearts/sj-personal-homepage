import FastForwardIcon from "@/images/fast-forward-svgrepo-com.svg";

import { Button } from "@/components/button";

/**
 * Fast-forward button for animations. Not currently complete or implemented
 */
export function FastForwardButton() {
  return (
    <Button
      id="fast-forward-button"
      className="fast-forward-button"
      title="Fast forward animations"
      iconButton={true}
    >
      <FastForwardIcon />
    </Button>
  );
}
