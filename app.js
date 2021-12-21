var iconMenu = document.querySelector(".burger");
console.log(iconMenu);

iconMenu.addEventListener("click", () => {
  document.querySelector(".toggle").style.display == "flex"
    ? (document.querySelector(".toggle").style.display = "none")
    : (document.querySelector(".toggle").style.display = "flex");
});
