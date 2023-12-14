let lis = document.querySelectorAll("li");

let div = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  div.style.background = window.localStorage.getItem("color");

  lis.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color=${window.localStorage.getItem("color")}]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");

    window.localStorage.setItem("color", e.target.dataset.color);
    
    div.style.background = e.target.dataset.color;
  });
});
