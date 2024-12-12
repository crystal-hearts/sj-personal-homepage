/**
 * Given an ID, open a modal
 * If the modal's title is available, focus on it
 * @param {string} modalID The ID of the modal to open
 */
export function openModal(modalID: string) {
  const modalElement = document.getElementById(modalID);
  document.querySelectorAll("[data-modal-state]").forEach((element) => {
    element.setAttribute("data-modal-state", "closed");
  });
  if (modalElement) {
    modalElement.setAttribute("data-modal-state", "open");
    const windowTitleElements =
      modalElement.getElementsByClassName("window-title");
    const windowTitleElement =
      windowTitleElements && windowTitleElements[0]
        ? windowTitleElements[0]
        : null;
    if (windowTitleElement) {
      windowTitleElement.focus();
    }
  }
}

/**
 * Given an ID, close a modal
 * Given a returnID also provided, focus on an element after closing the modal
 * @param {string} modalID The ID of the modal to close
 * @param {string} returnID The ID of the element to return to
 */
export function closeModalOrWindow(modalID: string, returnID: string) {
  const modalElement = document.getElementById(modalID);
  const returnElement = document.getElementById(returnID);
  if (modalElement) {
    modalElement.setAttribute("data-modal-state", "closed");
  }
  if (returnElement) {
    returnElement.focus();
  }
}
