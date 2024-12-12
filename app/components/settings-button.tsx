import { Button } from "@/components/button";
import { openModal } from "@/helpers/helpers";

import { SITE_CONSTANTS } from "@/constants/site-constants";

import GearIcon from "@/images/gear-svgrepo-com.svg";

/**
 * Button for controlling the page's settings
 */
export function SettingsButton() {
  return (
    <Button
      id={SITE_CONSTANTS.SETTINGS_BUTTON_ID}
      title={SITE_CONSTANTS.SETTINGS_BUTTON_TITLE}
      iconButton={true}
      onClick={() => openModal(SITE_CONSTANTS.SETTINGS_MODAL_ID)}
    >
      <GearIcon />
    </Button>
  );
}
