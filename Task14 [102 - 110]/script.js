//assignment 1

// let msg = prompt("Print Number From – To");

// nums = msg.split("-");

// let smaller;

// if (+nums[0] < +nums[1]) {
//   smaller = +nums[0];
// } else {
//   smaller = +nums[1];
//   nums[1] = +nums[0];
// }
// for (smaller; smaller <= nums[1]; smaller++) {
//   console.log(smaller);
// }

/////////////////////////////////////////////////////////

// assignment 2

// let div = document.querySelector("#popUp");

// setTimeout(popUp, 5000);

// function popUp() {
//   div.style.display = "block";
// }

// let close = document.querySelector("#close");

// close.addEventListener("click", del);

// function del() {
//   close.parentElement.style.display = "none";
// }

///////////////////////////////////////////////////////////////////

// assignment 3

// let div = document.querySelector("div");

// let counter = setInterval(countDown, 1000);

// function countDown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }

///////////////////////////////////////////////////////////////////

// assignment 4

// let div = document.querySelector("div");

// let counter = setInterval(countDown, 1000);

// function countDown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     location.href = "https://Elzero.org";
//   }
// }

///////////////////////////////////////////////////////////////////

// assignment 5

let div = document.querySelector("div");

let counter = setInterval(countDown, 1000);

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
    
    window.open("https://Elzero.org", "_blank", "height:400,width:400");
  }
  else if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}
