/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

//  regular function
// let names = function (...values) {
//     // Parameter ?
//     return `String [${values.join("], [")}] => Done ` ;
//   };

//  Arrow function

let names = (...values) => `String [${values.join("], [")}] => Done `;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + +nums;

let calc = function (one, two, ...nums) {
  return one + two + +nums;
};

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

//////////////////////////////////// Assignments 64 -- 70 /////////////////////////////

// ///////////////////////////////// task1 ////////////////////////////////////

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let first = zName.substr(0, 5);
    let sec = zName.substr(6, 1).toUpperCase();
    return `${first} ${sec}`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    let age = zAge.split(" ");
    return `${age[0]}`;

    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }

  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    let country = zCountry.substr(0, 2).toUpperCase();
    return country;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }

  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}., ${ageWithMessage(
      zAge
    )}, You live In ${countryTwoLetters(zCountry)}`;
    // note ==> Don't forget write argument ****************
  }

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

////////////////////////// Task 2 /////////////////////////////

// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

// Second Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
//   }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

////////////////////// task3 //////////////////////////////////////////////

// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }

// arrow function

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//////////////////// task4 ///////////////////////////////////////////

function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      result += data[i];
    } else if (!isNaN(+data[i].slice(0, 2))) {
      result += +data[i].slice(0, 2);
    }
  }

  if (result === 0) {
    result = "All Is Strings";
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
