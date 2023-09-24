//////////////////////////  challange /////////////////////////////////////

// function showDetials(...detials) {
//   let name, age, avialable;
//   for (let i = 0; i < detials.length; i++) {
//     typeof detials[i] === "string"
//       ? (name = detials[i])
//       : typeof detials[i] === "number"
//       ? (age = detials[i])
//       : typeof detials[i] === "boolean" && detials[i] === true
//       ? (avialable = "You are avilable for Hire")
//       : (avialable = "You are not avilable for Hire");
//   }
//   console.log(`Hello ${name}, Your Age Is ${age}, ${avialable}`);
// }

// showDetials(true, "ali", 58);
// showDetials("Abdo", false, 25);

// ////////////////// Another Solution ///////////////////////////

function showDetials(a, b, c) {
  let parameter = [a, b, c];
  let user, age, bool;
  for (let i = 0; i < parameter.length; i++) {
    typeof parameter[i] === "string"
      ? (user = parameter[i])
      : typeof parameter[i] === "number"
      ? (age = parameter[i])
      : (bool = parameter[i]);
  }
  bool === true ? (bool = "Avilable") : (bool = "Not Avilable");
  console.log(`Hello ${user}, Your Age Is ${age}, You are ${bool} for hire`);
}

showDetials("Osama", 38, true);
showDetials(38, "Osama", true);
showDetials(true, 38, "Osama");
showDetials(false, "Osama", 38);
showDetials(true, "Amr", 23);
showDetials("Amr", false, 23);

/////////////////////// Assignments 57-63 ////////////////////////////

////////////////////// task 1 ///////////////////////////////////

function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

////////////////////// task 2 ///////////////////////////////////

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
    return;
  }
  switch (operation) {
    case "add":
      console.log(firstNum + secondNum);
      break;
    case "subtract":
      console.log(firstNum - secondNum);
      break;
    case "multiply":
      console.log(firstNum * secondNum);
      break;
    default:
      console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

////////////////////// task 3 ///////////////////////////////////

function ageInTime(theAge) {
  if (theAge > 100 || theAge < 10) {
    console.log("Age Out Of Range");
    return;
  }
  let months, weeks, days, hours, minuts, seconds;
  months = theAge * 12;
  weeks = theAge * 52;
  days = theAge * 365.25;
  hours = theAge * 365.24 * 24;
  minuts = theAge * 365.24 * 24 * 60;
  seconds = theAge * 365.24 * 24 * 60 * 60;

  console.log(`Age in Months => ${months}`);
  console.log(`Age in Weeks => ${weeks}`);
  console.log(`Age in Days => ${days}`);
  console.log(`Age in Hours => ${hours}`);
  console.log(`Age in Minuts => ${minuts}`);
  console.log(`Age in Seconds => ${seconds}`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

////////////////////// task 4 ///////////////////////////////////

function checkStatus(a, b, c) {
  let parameter = [a, b, c];
  let user, age, bool;
  for (let i = 0; i < parameter.length; i++) {
    typeof parameter[i] === "string"
      ? (user = parameter[i])
      : typeof parameter[i] === "number"
      ? (age = parameter[i])
      : (bool = parameter[i]);
  }
  bool === true ? (bool = "Avilable") : (bool = "Not Avilable");
  console.log(`Hello ${user}, Your Age Is ${age}, You are ${bool} for hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

////////////////////// task 5 ///////////////////////////////////

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i < endYear; i++) {
    document.write(`<option>${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

////////////////////// task 6///////////////////////////////////

function multiply(...values) {
  let result = 1;
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === "string") {
      continue;
    }
    if (typeof values[i] === "number") {
      // values[i]=parseInt(values[i])  or
      values[i] = Math.floor(values[i]);
    }
    result *= values[i];
  }

  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
