(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    const isMenuOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.modal.classList.toggle("is-hidden");

    if (!isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }
})();
