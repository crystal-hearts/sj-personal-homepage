import { ModalHeader } from "./modal-header";
import { FlavorButton } from "./flavor-button";

export function SettingsModal() {
  return (
    <div
      id="settings-modal"
      className="settings-modal modal fixed left-4 top-full z-20 overflow-hidden rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] shadow-drop-5 transition-transform duration-500 modal-open:-translate-y-full"
      data-modal-active="closed"
    >
      <div className="modal-contents">
        <ModalHeader modalID="settings-modal" returnID="settings-button" />
        <div className="modal-contents h-full px-1 py-2">
          <div className="flavor-buttons flex flex-row flex-wrap">
            <FlavorButton flavor="ube" />
            <FlavorButton flavor="raspberry" />
            <FlavorButton flavor="strawberry" />
            <FlavorButton flavor="lemon" />
            <FlavorButton flavor="lime" />
            <FlavorButton flavor="mint" />
          </div>
        </div>
      </div>
    </div>
  );
}
