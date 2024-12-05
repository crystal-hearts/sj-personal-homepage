import { Button } from "./button";
import { openModal } from "../helpers/helpers";

import { SITE_CONSTANTS } from "../constants/site-constants";

import GearIcon from "../images/gear-svgrepo-com.svg";

export function SettingsButton() {
  return (
    <Button
      buttonID={SITE_CONSTANTS.SETTINGS_MODAL_ID}
      iconButton={true}
      clickHandler={() => openModal(SITE_CONSTANTS.SETTINGS_MODAL_ID)}
    >
      <GearIcon />
    </Button>
  );
}
