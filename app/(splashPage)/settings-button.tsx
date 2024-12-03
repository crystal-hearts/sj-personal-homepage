import GearIcon from "../images/gear-svgrepo-com.svg";

import { openModal } from "../helpers/helpers";

export function SettingsButton() {
  return (
    <button
      id="settings-button"
      className="settings-button h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
      onClick={() => openModal("settings-modal")}
    >
      <GearIcon />
    </button>
  );
}
