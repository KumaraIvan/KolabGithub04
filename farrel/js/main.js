(function () {
  "use strict";

  const btn = document.getElementById("contact-btn");
  const modal = document.getElementById("contact-modal");
  const closeBtn = document.getElementById("close-modal");
  const okBtn = document.getElementById("ok-btn");

  if (btn && modal) {
    // function show modal
    btn.addEventListener("click", function () {
      modal.style.display = "flex";
    });

    // function hide modal
    const closeModal = function () {
      modal.style.display = "none";
    };

    // close modal
    closeBtn.addEventListener("click", closeModal);
    okBtn.addEventListener("click", closeModal);

    // close modal ketika user klik diluar area modal
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
})();
