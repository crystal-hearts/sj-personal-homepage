import { openModal } from "../helpers/helpers";

export function HeaderMenuItem({
  itemID,
  itemLabel,
}: {
  itemID: string;
  itemLabel: string;
}) {
  const buttonID = itemID + "-button";
  const modalID = itemID + "-modal";
  return (
    <button
      id={buttonID}
      className="header-menu-item about-me-button mr-2 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] px-2 py-1 text-center shadow-drop-5 transition duration-150 hover:scale-110 active:scale-105"
      onClick={() => openModal(modalID)}
    >
      {itemLabel}
    </button>
  );
}
