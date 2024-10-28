// dark mode with event listners
const darkMode = document.querySelector("#dark");
let num = 0;

darkMode.addEventListener("click", function () {
  if (num === 0) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    num = 1;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    num = 0;
  }
});
