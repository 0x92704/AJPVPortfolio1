const toggleArrow = document.getElementById("toggleArrow");
const socialIcons = document.getElementById("socialIcons");
let expanded = false;

toggleArrow.addEventListener("click", () => {
  socialIcons.classList.toggle("hidden");
  expanded = !expanded;
  toggleArrow.src = expanded
    ? "images/arrow-button-collapse-after.jpg"
    : "images/arrow-button-collapse-before.jpg";
});
