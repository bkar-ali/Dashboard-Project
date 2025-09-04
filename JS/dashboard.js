let input = document.querySelectorAll(".social-info .box input");
let colorArr = ["#1877f2", "#1877f2", "#0a66c2", "#ff0000"];
let svg = document.querySelectorAll(".social-info .box div");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("focus", () => {
    svg[i].style.color = colorArr[i];
  });

  input[i].addEventListener("blur", () => {
    svg[i].style.color = "#888";
  });
}
