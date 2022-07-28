let show = true;

const containerhamburguer = document.querySelector('.container-hamburguer');
const hamburguer = document.querySelector('.hamburguer');
const menulinks = document.querySelectorAll('.header-menu li a');

function closeHamburgerMenu() {
  document.body.style.overflow = show ? 'hidden' : 'initial';
  containerhamburguer.classList.toggle('on', show);
  show = !show;
}

hamburguer.addEventListener('click', closeHamburgerMenu);

menulinks.forEach((item) => {
  item.addEventListener('click', closeHamburgerMenu);
});

// LANGUAGES //
const br = document.querySelector('.br_lang');
const en = document.querySelector('.en_lang');

function toggleClass() {
  if (en.classList.contains('active')) {
    en.classList.remove('active');
    br.classList.add('active');
  } else {
    en.classList.add('active');
    br.classList.remove('active');
  }

  console.log(en.classList, br.classList);
}
