// let mix = "A13BS2ZX";

// let nums = mix
//   .split("")
//   .filter((e) => {
//     return !isNaN(parseInt(e));
//   })
//   .map((e) => {
//     return e * e;
//   })
//   .join("");
// console.log(nums);

// //////////////////////// Challange /////////////////////////

// /*
//   Higher Order Functions Challenges

//   You Can Use
//   - ,
//   - _
//   - Space
//   - True => 1 => One Time Only In The Code

//   You Cannot Use
//   - Numbers
//   - Letters

//   - You Must Use [Filter + Map + Reduce + Your Knowledge]
//   - Order Is Not Important
//   - All In One Chain

// */

// // FIRST SOLUTION ////

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let onlychar = myString.split("").pop();

// let solution = myString
//   .split(",")
//   .filter(function (e) {
//     return isNaN(parseInt(e));
//   })
//   .map(function (e) {
//     return e !== "_" ? e : " ";
//   })
//   .reduce(function (acc, current) {
//     let final = acc + current;
//     return final;
//   })
//   .slice(+true, -onlychar.length);

// console.log(solution); // Elzero Web School

// // second solution ///////////////////////////////////////

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString
//   .split("")
//   .map(function (ele) {
//     return ele === "_" ? " " : ele;
//   })
//   .filter(function (ele, i, arr) {
//     // console.log(`Current ele ${ele}`);
//     // console.log(`Current Index ${i}`);
//     // console.log(`Array ${arr}`);
//     // console.log(`Array Length ${arr.length}`)
//     // console.log("********************")
//     return (
//       isNaN(parseInt(ele)) &&
//       ele !== "," &&
//       !ele.includes(arr[arr.length - true])
//     );
//   })
//   .reduce(function (acc, curr) {
//     return acc === curr ? acc : acc + curr;
//   });
// console.log(solution); // Elzero Web School

////////////////////// assignments 71 -78 /////////////////////////////

///////////////////// task1 /////////////////////////

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let letters = mix
  .map((e) => {
    return isNaN(parseInt(e)) ? e : "";
  })
  .reduce((acc, current) => {
    return acc + current;
  });
console.log(letters);

////////////////// task2 //////////////////////////

let myString = "EElllzzzzzzzeroo";

let arr = myString
  .split("")
  .filter(function (ele, index, array) {
    return array.indexOf(ele) === index;
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(arr);

////////////// task3 /////////////////////////////

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// first solution

// let newarr  = myArray.reduce(function (acc ,current){
//   return acc + current
// }).split("").filter((e)=> e !== ",").join("")
// console.log(newarr)
// // Elzero

// //second solution

// let newarr = myArray
//   .reduce((acc, current) => acc.concat(current), [])
//   .reduce((acc, current) => acc + current);

// console.log(newarr);

//// third Solution

// let newarr = myArray.reduce((acc, current) => {
//   if (Array.isArray(current)) {
//     return acc.concat(current);
//   } else {
//     return acc.concat(current);
//   }
// }, []).join("");

// console.log(newarr);

//////////////////// task4 /////////////////////////////////

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newarr = numsAndStrings.filter((e) => !isNaN(parseInt(e))).map((e) => -e);

console.log(newarr);

// [-1, -10, 10, 20, -5, -3]

/////////////////// task 5 //////////////////////////////

let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, current) => {
  return current % 2 === 0 ? acc * current : acc + current;
}, 1);

console.log(result);

// 500
