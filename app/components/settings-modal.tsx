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
      <div className="flavor-buttons grid grid-flow-row grid-cols-3 grid-rows-2 gap-x-2 gap-y-2 md:grid-cols-6 md:grid-rows-1">
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
