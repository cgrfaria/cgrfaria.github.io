let show = true;

const containerhamburguer = document.querySelector(".container-hamburguer");
const hamburguer = document.querySelector(".hamburguer");
const menulinks = document.querySelectorAll(".header-menu li a");

function closeHamburgerMenu() {
  document.body.style.overflow = show ? "hidden" : "initial";
  containerhamburguer.classList.toggle("on", show);
  show = !show;
}

hamburguer.addEventListener("click", closeHamburgerMenu);

menulinks.forEach((item) => {
  item.addEventListener("click", closeHamburgerMenu);
});
