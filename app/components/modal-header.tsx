import { closeModal } from "@/helpers/helpers";

import CloseIcon from "@/images/close-svgrepo-com.svg";

export function ModalHeader({
  modalID,
  returnID,
}: {
  modalID: string;
  returnID: string;
}) {
  return (
    <div className="modal-header flex flex-row items-center justify-between border-b-2 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-700)] py-1 pl-4 pr-3">
      <h2
        className="modal-heading select-none text-base font-bold text-[var(--theme-color-100)]"
        tabIndex="-1"
      >
        site flavor
      </h2>
      <button
        className="modal-close h-4 w-4 fill-[var(--theme-color-100)]"
        onClick={() => closeModal(modalID, returnID)}
      >
        <CloseIcon />
      </button>
    </div>
  );
}
