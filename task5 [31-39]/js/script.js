//////////// challange1  /////////////
// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 to 40");
// } else if (a >= 40) {
//   console.log("> 40");
// } else {
//   console.log("unknown");
// }

// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a >= 40
//   ? console.log("> 40")
//   : console.log("unknown");

//////////// challange2  ///////////////////////////////////

// let st = "Elzero Web School";

// if ((2 * st.length).toString() === "34") {
//   console.log("Good");
// }

// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }
// if (st !== "string") {
//   console.log("Good");
// }
// if (typeof Number(st) === "number") {
//   console.log("Good");
// }
// if (
//   st.slice(st.indexOf("E"), st.indexOf("o") + 1).repeat(2) === "ElzeroElzero"
// ) {
//   console.log("Good");
// }

//////////// challange3  /////////////////////////////////////////////////////

//   if ==> switch

// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;

//   case "IT":
//   case " Support":
//     salary = 6000;
//     break;

//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     break;

//   default:
//     salary = 4000;
// }
// console.log(`Salary is ${salary}`);

//////////// challange4  ///////////////////////////////////////////////

// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// if (holidays === 0) {
//   money = 5000;
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
// } else if (holidays === 3) {
//   money = 2000;
// } else if (holidays === 4) {
//   money = 1000;
// } else if (holidays === 5) {
//   money = 0;
// } else {
//   money = 0;
// }
// console.log(`My Money is ${money}`);

// /////////////////// Assignment 31-32  /////////////////////////////////////////////

// console.log("************************************************ \n \n \n");

// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(((110 != 100) != 10) != 20); // true
// console.log(-10 == "-10"); // true
// console.log(!(-50 >= +"-40")); // true
// console.log(!(10 >= -"-40")); // true
// console.log(!("10" != 10)); // true
// console.log(!(20 < false)); // true
// console.log("************************************************** \n \n");

// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log(num2 > num1); // true
// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true
// console.log(!(num1 == num2)); // true
// console.log(typeof num1 === typeof num2); // true
// console.log(num1 <= num2 && num1 != num2); // true
// console.log(num1 > num2 || num1 != num2); // true
// console.log("************************************************** \n \n");

// let a = 20;
// let b = 30;
// let c = 10;

// console.log((a < b && a > c) || a > b); // true
// console.log(a != b && a != c); // true
// console.log(!(a > b) && !(a === b) && !(a < c) && !(a === c)); // true

// /////////////////// Assignment 33-37  ////////////////////////////////////////

// let num = 9;

// if (num < 10) {
//   console.log(`00${num}`);
// } else if (num > 10 && num < 100) {
//   console.log(`0${num}`);
// } else {
//   console.log(num);
// }
// console.log("************************************************** \n \n");
// let num3 = 9;
// let str = "9";
// let str2 = "20";

// if (num3 == str) {
//   console.log(`${num3} Is The Same Value As ${str}`);
// } else {
//   console.log("False");
// }
// if (num3 !== str) {
//   console.log(`${num3} Is The Same Value As ${str} But Not The Same Type`);
// } else {
//   console.log("False");
// }

// if (num3 !== str2) {
//   console.log(`${num3} Is Not The Same Value Or The Same Type As ${str2}`);
// } else {
//   console.log("False");
// }
// if (str != str2 && typeof str === typeof str2) {
//   console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
// } else {
//   console.log("False");
// }

// console.log("************************************************** \n \n");

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num1 && typeof num2 !== typeof num3) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`
//   );
// }
// if (num3 > num1 && num2 == num3 && typeof num2 !== typeof num3) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`
//   );
// }
// if (num1 !== num3 && typeof num2 !== typeof num3) {
//   console.log(
//     `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
//   );
// }

// console.log("************************************************** \n \n");

// Edit What You Want Here

// let num1 = 10;
// let num2 = 10;
// let num3 = "10";
// let num4 = 20;

// num1 = 20;

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// num4 = 30;

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// num3 = num1;
// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// num4 = 40;

// if (num1 + num2 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// num1 = 10;

// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// num2 = 5;

// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// num3 = 14;

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// console.log("************************************************** \n \n");

// /////////////////// Assignment 33-37  ////////////////////////////////////////

let day = "   friday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"
// day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1,day.trim().length+1);
// console.log(day)
// switch (day) {
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("No Appointments Available");
//     break;
//   case "Monday":
//   case "Saturday":
//     console.log("From 10:00 AM To 5:00 PM");
//     break;
//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;
//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM");
//     break;
//     default:
//       console.log("Its Not A Valid Day");
// }
