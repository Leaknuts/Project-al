const menuList = document.getElementById("menu-list");
const Hidden = document.getElementById("hidden");

let menuOpen = false;
menuList.addEventListener('click', () => {
  if(!menuOpen) {
    menuList.classList.add('open');
    menuOpen = true;
  } else {
    menuList.classList.remove('open');
    menuOpen = false;
  }
});

menuList.addEventListener("click", () => {
    Hidden.classList.toggle("hidden")
})