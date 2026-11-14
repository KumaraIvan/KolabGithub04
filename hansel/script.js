const tombol = document.getElementById("aktivitas-terakhir");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
const tutupPopup = document.getElementById("tutupPopup");

// Membuka popup
tombol.addEventListener("click", function() {
    popup.style.display = "flex";
});

// Menutup popup dengan tombol X
closeButton.addEventListener("click", function() {
    popup.style.display = "none";
});

// Menutup popup dengan tombol Tutup
tutupPopup.addEventListener("click", function() {
    popup.style.display = "none";
});