import { Modal } from "@/components/modal";
import { FlavorButton } from "@/components/flavor-button";

import { SITE_CONSTANTS } from "@/constants/site-constants";

export function SettingsModal() {
  return (
    <Modal
      modalTitle={SITE_CONSTANTS.SETTINGS_MODAL_TITLE}
      modalID={SITE_CONSTANTS.SETTINGS_MODAL_ID}
      returnID={SITE_CONSTANTS.SETTINGS_BUTTON_ID}
      modalPosition="bottom-left"
      roundedTopOnly={true}
    >
      <div className="flavor-buttons flex flex-row flex-wrap">
        <FlavorButton flavor="ube" />
        <FlavorButton flavor="raspberry" />
        <FlavorButton flavor="strawberry" />
        <FlavorButton flavor="lemon" />
        <FlavorButton flavor="lime" />
        <FlavorButton flavor="mint" />
      </div>
    </Modal>
  );
}
