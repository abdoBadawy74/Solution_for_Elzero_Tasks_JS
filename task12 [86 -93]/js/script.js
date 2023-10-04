// video 90 Example //////////////////////

// for (let i = 1; i <= 100; i++) {
//   let myElement = document.createElement("div");
//   let mytitle = document.createElement("h2");
//   let myp = document.createElement("p");

//   let titleText = document.createTextNode(`Title Of Product number ${i}`);
//   let pText = document.createTextNode("Pragraph Of Product");
//   mytitle.appendChild(titleText);
//   myp.appendChild(pText);
//   myElement.appendChild(mytitle);
//   myElement.appendChild(myp);
//   document.body.appendChild(myElement);
// }

//// video 93 example //////////////////////////
// let userInput = document.querySelector("[name='userName']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }
//   if (ageInput.value !== "") {
//     ageValid = true;
//   }
//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

/////////////////////////////////////////////

// *********** Assignments 86 -- 93 *******************

/////////////////////// Task 1

let div1 = document.getElementById("elzero");
console.log(div1);

let div2 = document.getElementsByTagName("div");
console.log(div2);

let div3 = document.getElementsByClassName("element");
console.log(div3);

let div4 = document.getElementsByName("js");
console.log(div4);

let div5 = document.querySelector("div");
console.log(div5);

let div6 = document.querySelector(".element");
console.log(div6);

let div7 = document.querySelector("#elzero");
console.log(div7);

let div8 = document.querySelector("[name='js']");
console.log(div8);

let div9 = document.querySelectorAll("div");
console.log(div9);

let div10 = document.querySelectorAll(".element");
console.log(div10);

let div11 = document.querySelectorAll("#elzero");
console.log(div11);

let div12 = document.querySelectorAll("[name='js']");
console.log(div12);

let div13 = document.body.children[0];
console.log(div13);

let div14 = document.body.childNodes[1];
console.log(div14);

let div15 = document.body.firstElementChild;
console.log(div15);

/////////////////// task2 ///////////////////////

let imgs = document.images;
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  imgs[i].alt = "Elzero Logo";
}

////// //// task3 //////////////////////

let myInput = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");
myInput.oninput = function () {
  result.textContent = `{${myInput.value}} USD Dollar = {${(
    myInput.value * 15.6
  ).toFixed(2)}} Egyptian Pound`;
};

let form = document.getElementsByTagName("form");
form[0].style.cssText =
  "display: flex; flex-direction: column; align-items: center; border: 1px solid black; padding: 15px; width: fit-content;";
myInput.style.cssText =
  "border: 1px solid #ddd; outline: none; padding: 10px; width: 280px;";
result.style.cssText =
  "margin-top: 10px; color: rgb(57, 4, 110); font-size: 18px;";

///////////// task4 ////////////////////////////////////////

let divOne = document.querySelector(".one")
let divTwo = document.querySelector(".two")

divOne.title = "one"
divTwo.title = "two"

let textOne = divOne.textContent
let textTwo = divTwo.textContent
console.log(textOne)
console.log(textTwo)

divOne.textContent = textTwo;
divTwo.textContent = `${textOne} 2`