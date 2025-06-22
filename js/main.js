// Html elamanlarına eriş
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");



// Menu butonuna tıklanınca aç kapa yapan fonksiyon

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});