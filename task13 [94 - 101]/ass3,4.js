let p = document.getElementsByTagName("p")[0];

let div = document.querySelector(".our-element");

let startDiv = div.cloneNode();
let endDiv = div.cloneNode();

p.remove();

function addattr(el, ind) {
  el.className = ind.toLowerCase();
  el.title = `${ind} element`;
  el.setAttribute("data-value", ind);
  el.textContent = ind;
}
addattr(startDiv, "Start");
addattr(endDiv, "End");

div.before(startDiv);
div.after(endDiv);

// ass 4

let myDiv = document.getElementsByTagName("div")[3];

console.log(myDiv.lastChild.nodeValue.trim())