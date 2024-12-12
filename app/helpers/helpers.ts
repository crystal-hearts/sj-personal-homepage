export function openModal(modalID: string) {
  const modalElement = document.getElementById(modalID);
  document.querySelectorAll("[data-modal-state]").forEach((element) => {
    element.setAttribute("data-modal-state", "closed");
  });
  if (modalElement) {
    modalElement.setAttribute("data-modal-state", "open");
    modalElement.getElementsByClassName("window-title")[0].focus();
  }
}

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
