const open = document.querySelector('.hamburgerOpen');
const close = document.querySelector('.hamburgerClose');
const menu = document.querySelector('.mbMenu')
open.addEventListener("click", e=> {
    menu.classList.add('menuVisible');
  });

  close.addEventListener("click", e=> {
    menu.classList.remove('menuVisible');
});