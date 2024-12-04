import GearIcon from "../images/gear-svgrepo-com.svg";

import { Button } from "./button";
import { openModal } from "../helpers/helpers";

export function SettingsButton() {
  return (
    <Button
      buttonID="settings-button"
      iconButton={true}
      clickHandler={() => openModal("settings-modal")}
    >
      <GearIcon />
    </Button>
  );
}
