let font = document.getElementById("font");
let color = document.getElementById("color");
let size = document.getElementById("size");

// change font family
font.onchange = function () {
  window.localStorage.setItem("font", font.value);
  document.body.style.fontFamily = font.value;
};
// change color

color.onchange = function () {
  window.localStorage.setItem("color", color.value);
  document.body.style.color = color.value;
};
// change size
size.onchange = function () {
  window.localStorage.setItem("size", size.value);
  document.body.style.fontSize = size.value;
};

document.body.style.fontFamily = window.localStorage.getItem("font");
document.body.style.color = window.localStorage.getItem("color");
document.body.style.fontSize = window.localStorage.getItem("size");

font.value= window.localStorage.getItem("font");
color.value = window.localStorage.getItem("color");
size.value= window.localStorage.getItem("size");