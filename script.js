// NAVBAR HEADER
window.addEventListener("scroll", () => {
  var nav = document.querySelector("header");
  nav.classList.toggle("stikiw", window.scrollY >= 3000);
});

// FOOTER
// window.addEventListener("scroll", () => {
//   var footer = document.getElementById("footer");
//   footer.classList.toggle("stikiw", window.scrollY <= 7000);
// });

// CAROUSEL
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
