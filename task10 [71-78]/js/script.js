//////////// challange1  /////////////
console.log("\n challange1 \n ");


let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,6)} ${a.substr(11,17)}`); // Elzero School


// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.slice(1,a.length-1).toUpperCase() + a.charAt(a.length - 1).toLowerCase()); // eLZERO WEB SCHOOl

//////////// task1  /////////////
console.log("\n task1 \n ");

let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(3,userName.length - 2).repeat(3)); // eee


//////////// task2  /////////////
console.log("\n task2 \n ");

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE)); // True
console.log(word.includes(letterO.toLowerCase())); // True