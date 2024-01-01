// task1

let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);

// Needed Output
// Set(3) {10, 20, 2}
// 2

console.log("#".repeat(20));

("=======================================================");

// task2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(Array.from(new Set(myFriends.sort())));

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log("#".repeat(20));

("=======================================================");

// task 3

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));

console.log(myMap);

console.log(myMap.size);

console.log(myMap.has("role"));

// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

console.log("#".repeat(20));

("=======================================================");

// task 4

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

// explain
// convert num to set and make it string before this
// use spread operatoor to extract elements of set (1,0,2,3)
// make it array
// then sort array and take slice with values which return true
// all values would be taken and 0 not
// then make join with all elemnts and use unary operator "+" to convert it to num

// Needed Output
// 123

console.log("#".repeat(20));

("=======================================================");

// task 5

let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);
console.log(Array.from(theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log("#".repeat(20));

("=======================================================");

// task 6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.sort(); //[10, 15, 6, 'A', 'B', 'C', 'D', 'E']

// console.log(chars.copyWithin(0,3,6));

// // Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// chars.sort(); //[10, 15, 20, 6, 'A', 'B', 'C', 'D', 'E']

// console.log(chars.copyWithin(0,4,-1));

// // Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(chars.copyWithin(2));

// // Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

console.log("#".repeat(20));

("=======================================================");

// task 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);

numsOne.push(...numsTwo)
console.log(numsOne);


// Needed Output
// [1, 2, 3, 4, 5, 6]



console.log("#".repeat(20));

("=======================================================");

// tasl 8 

// =====> challange.js

console.log("Go to Challange");