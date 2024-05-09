// assigment 1

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let ipReg= /(\d+|\D+)+/g;
let ipReg= /(\w+|\W+)+/g

console.log(ip.match(ipReg));


// assigment 2

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesReg = /Os(\d*)O/g;

console.log(specialNames.match(specialNamesReg));

// Output
// ['Os10O', 'OsO', 'Os100O']



// assigment 3

let phone = "+(995)-123 (4567)";

// let phoneReg = /(\d+|\D)+/g;

let phoneReg = /\+\(\d{3}\)\-\d{3}\W\(\d{4}\)/g;

console.log(phone.match(phoneReg));



// assigment 4

let reg = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? ==> http or https 
// / => start of the url
// :\/\/ ==> ://
// (?:[-\w]+\.)? ==> optional subdomain "www."
// ([-\w]+) ==> domain name
// \.\w+ ==> .com, .ge, .net etc



// assigment 5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

// let dateReg = /(\d{2})\W*(\d{2})\W*(\d{2,4})/g;
// let dateReg =  /\d{2}\s*-*\s*\/*\d{2}\s*-*\s*\/*\d{2,}/g;
let dateReg =  /\d{2}(\s|\/)(-)?(\s)?\d+(\s|\/)(-)?(\s)?\d+/gi; 

console.log(date1.match(dateReg)); // "25/10/1982"
console.log(date2.match(dateReg)); // "25 - 10 - 1982"
console.log(date3.match(dateReg)); // "25 10 1982"
console.log(date4.match(dateReg)); // "25 10 82"


// assigment 6

// CHALLANGE ==>   challange.js