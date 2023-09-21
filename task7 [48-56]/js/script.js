// ///////////////// challange 1 ////////////////////////////

// // let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// // let myEmployees = [
// //   "Amgad",
// //   "Sameh",
// //   "Ameer",
// //   "Omar",
// //   "Othman",
// //   "Amany",
// //   "Samia",
// //   "Anwar",
// // ];

// // let count = 1;
// // for (let i = 0; i < myAdmins.length; i++) {
// //   if (myAdmins[i] === "Stop") {
// //     break;
// //   }
// //   document.write(`<div>`);
// //   document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}`);
// //   document.write(`<h3>Team Member:</h3>`);

// //   for (let j = 0; j < myEmployees.length; j++) {
// //     if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
// //       document.write(`<p>- ${count} ${myEmployees[j]}</p>`);
// //       count++;
// //     }
// //   }
// //   count = 1;
// //   document.write(`<hr>`);
// //   document.write(`</div>`);
// // }

// ///////////////////////////////////////////////////////////////////////////

// /////////////////////////// Assignments from 48--53 ///////////////////////////////

// // let start = 10;
// // let end = 100;
// // let exclude = 40;

// // for (start; start <= end; start += 10) {
// //   if (start === exclude) {
// //     continue;
// //   }
// //   console.log(start);
// // }

// ///////////////////////////////////////////////////////////////////////////

// // let start = 10;
// // let end = 0;
// // let stop = 3;

// // // Output

// // for(let i=start; i >= stop; i--){
// //     if(i<start){
// //         console.log(`0${i}`)
// //     }else{
// //         console.log(`${i}`)
// //     }

// // }

// ///////////////////////////////////////////////////////////////////////////////

// // let start = 1;
// // let end = 6;
// // let breaker = 2;

// // for (let i = start; i <= end; i++) {
// //   console.log(i);
// //   for(let j =2 ; j< end; j+=2){
// //     console.log(`-- ${j}`)
// //   }
// // }

// //////////////////////////////////////////////////////////////////////////////
// // let index = 10;
// // let jump = 2;

// // for (;;) {
// //     if (index === jump) {
// //       break;
// //     }
// //   console.log(index);
// //   index -= jump;
// // }

// ///////////////////////////////////////////////////////
// // let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// // let letter = "a";
// // //i= 1
// // for (let i = letter.length; i <= friends.length; i++) {
// //   // if (friends[i].charAt(0) === letter.toUpperCase()) {
// //   if (friends[i].startsWith(letter.toUpperCase())) {
// //     continue;
// //   }
// //   console.log(`${i} => ${friends[i]}`);
// // }
// //////////////////////////////////////////////////////////////////////////////////////
// // let start = 0;
// // let swappedName = "elZerO";
// // let newarr = [];
// // for (start; start < swappedName.length; start++) {
// //   if (swappedName[start] == swappedName[start].toLowerCase()) {
// //     newarr.push(swappedName[start].toUpperCase());
// //   } else {
// //     newarr.push(swappedName[start].toLowerCase());
// //   }
// // }
// // console.log(newarr.join(""));
// /////////////////////////////////////////////////////////////////

// // let start = 0;
// // let mix = [1, 2, 3, "A", "B", "C", 4];

// // let i = start;
// // for (i; i < mix.length; i++) {
// //   if (typeof mix[i] === typeof start) {
// //     if (mix[i] === start.toString.length) {
// //       continue;
// //     }
// //     console.log(mix[i]);
// //   }
// // }

// /////////////////////////// Assignments from 54--56 ///////////////////////////////

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

let i = index;
while (index < friends.length) {
  if (typeof friends[index] === "number" || friends[index].charAt(i)==="A") {
    index++;
    continue;
  }
  console.log(`${++counter} => ${friends[index]}`);
  index++;
}
