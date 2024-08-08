const menuList = document.getElementById("menu-list");
const Hidden = document.getElementById("hidden");

let menuOpen = false;
menuList.addEventListener('click', () => {
  if(!menuOpen) {
    menuList.classList.add('open');
    menuOpen = true;
    Hidden.classList.remove("hidden")
  } else {
    menuList.classList.remove('open');
    menuOpen = false;
    Hidden.classList.add("hidden")
  }
});