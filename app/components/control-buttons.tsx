import { PausePlayButton } from "@/components/pause-play-button";
import { SettingsButton } from "@/components/settings-button";

/**
 * Component containing the site control buttons
 */
export function ControlButtons() {
  return (
    <div className="control-buttons flex space-x-2">
      <SettingsButton />
      <PausePlayButton />
    </div>
  );
}
