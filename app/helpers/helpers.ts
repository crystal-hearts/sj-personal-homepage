export function openModal(modalID: string) {
  const modalElement = document.getElementById(modalID);
  document.querySelectorAll("[data-modal-active]").forEach((element) => {
    element.setAttribute("data-modal-active", "closed");
  });
  if (modalElement) {
    modalElement.setAttribute("data-modal-active", "open");
    modalElement.getElementsByClassName("window-heading")[0].focus();
  }
}

export function closeModalOrWindow(modalID: string, returnID: string) {
  const modalElement = document.getElementById(modalID);
  const returnElement = document.getElementById(returnID);
  if (modalElement) {
    modalElement.setAttribute("data-modal-active", "closed");
  }
  if (returnElement) {
    returnElement.focus();
  }
}
