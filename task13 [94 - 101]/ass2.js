let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let result = document.querySelector(".assign .classes-list div");

// to add element

addInput.onblur = function () {
  let addArray = addInput.value.toLowerCase().split(" ");
  for (let i = 0; i < addArray.length; i++) {
    if (addArray[i] !== "") {
      let span = document.createElement("span");
      let spanText = document.createTextNode(addArray[i]);
      span.appendChild(spanText);
      result.appendChild(span);
    }
  }
  /*
        To Remove The Text No Classes .....
        When We Have Classes
    */
  let text = document.querySelector("p.result");
  if (result.children.length > 0 && text !== null) {
    text.remove();
  }
  addInput.value = "";
};

//  to remove element

removeInput.onblur = function () {
  let removeArray = removeInput.value.toLowerCase().split(" ");
  let allSpans = document.querySelectorAll("span");
  /*
    To Delete The Clasese, IF The Same Word
    */
  for (let i = 0; i < allSpans.length; i++) {
    if (removeArray.indexOf(allSpans[i].textContent) !== -1) {
      allSpans[i].remove();
    }
  }
  /*
    IF The Result Empty, Doesn't Have Classes
    Create Element, With Content No Classes To Show
    */
  if (result.children.length === 0) {
    createText();
  }
  removeInput.value = "";
};

function createText() {
  let text = document.createElement("p");
  text.className = "result";
  text.appendChild(document.createTextNode("No Classes To Show"));
  result.appendChild(text);
}
createText();


// Another solution ////////////////////////////////////////////////

// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let current = document.querySelector("[title='Current']");
// let cls = document.querySelector(".classes-list div");
// let previousClasses = [];

// function addRem() {
//   // Remove all elements onload of the page
//   document.querySelectorAll("span").forEach((el) => el.remove());

//   // Store the current classes before modification
//   previousClasses = [...current.classList];

//   // Add or remove classes
//   let addClasses = add.value.toLowerCase().trim().split(" ");
//   let removeClasses = remove.value.toLowerCase().trim().split(" ");

//   for (let i = 0; i < addClasses.length; i++) {
//     if (add.value) {
//       current.classList.add(addClasses[i]);
//     }

//     if (remove.value) {
//       current.classList.remove(removeClasses[i]);
//     }
//   }

//   add.value = "";
//   remove.value = "";

//   // Add spans for all classes in the current element
//   if (current.classList.length) {
//     [...current.classList].sort().forEach((el) => {
//       let span = document.createElement("span");
//       span.textContent = el;
//       cls.append(span);
//     });
//   } else {
//     let span = document.createElement("span");
//     span.textContent = "No Classes To Show";
//     cls.append(span);
//   }
// }

// add.onblur = addRem;
// remove.onblur = addRem;