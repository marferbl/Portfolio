var iconMenu = document.querySelector(".burger");
console.log(iconMenu);
var togglesElements = document.querySelectorAll(".toggleElement");
// var toggleEl2 = document.querySelector(".toggleElement2");
// var toggleEl3 = document.querySelector(".toggleElement3");

iconMenu.addEventListener("click", () => {
  document.querySelector(".toggle").style.display == "flex"
    ? (document.querySelector(".toggle").style.display = "none")
    : (document.querySelector(".toggle").style.display = "flex");
});

togglesElements.forEach((elem) => {
  elem.addEventListener("click", () => setTimeout(() => (document.querySelector(".toggle").style.display = "none")), 1000);
});
