const menuList = document.getElementById("menu-list");
const Hidden = document.getElementById("hidden");

menuList.addEventListener("click", () => {
    Hidden.classList.toggle("hidden")
})