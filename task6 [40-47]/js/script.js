/////////////// challange ////////////////////////////////

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let newMy = my.slice(0, -2).reverse();
console.log(newMy); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]

console.log(
  `${my[--counter].slice(--zero, counter)}${my[--counter].slice(++counter)}`
); // "Elzero"

console.log(zero); // 0
console.log(counter); // 2

console.log(
  my[++zero].slice(-counter, -zero) + my[zero].slice(-(--counter)).toUpperCase()
); // "rO"

// /////////////////////////////////////////////////////////////////

// ///////////////////////////// assignments from 40--47 ///////////////////

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-++num, --num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//////////////////////////////////////////////////////////////////////////////////

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

/////////////////////////////////////////////////////////////////////////////

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

////////////////////////////////////////////////////////////////////////////

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words.slice(website.length)[0][0].slice(website.length).toUpperCase()
); // ZERO

///////////////////////////////////////////////////////////////////

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found ");
}
if (haystack.indexOf(needle)) {
  console.log("Found ");
}
if (haystack.lastIndexOf(needle)) {
  console.log("Found ");
}

//////////////////////////////////////////////////////////

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];

let allArrs = [];

// first solution

let ONE = allArrs.concat(arr1,arr2).sort()
let TWO = ONE.slice(arr2.length)
let THREE = TWO.join("").toLowerCase()
console.log(THREE); // fxy

// second solution

let one = arr2.slice(arr1.length); //Y
let two = arr1.reverse().shift(); //X
let three = arr2[arr1.length];//F

console.log(allArrs.concat(one, two, three).reverse().join("").toLowerCase()); // fxy