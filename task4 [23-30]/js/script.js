//////// challange 1 ////////////////
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(a,b,c,d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(a*50*Math.floor(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(parseInt(d.toFixed(0))); // 2

// Use Variables b + d To Get This Valus
console.log((((b+2*d)/3.079)-0.005).toFixed(2)); // 66.67 => String
console.log(Math.ceil(((b+2*d)/3.079))); // 67 => Number


////////////////// task1  /////////////////////
console.log("\n task1 \n ")
console.log(100000)
console.log(100_000)
console.log(1e5)
console.log(Math.pow(10,5))
console.log(50000 * 2)
console.log(10 * 10 * 10 * 10 * 10)
console.log(200000 / 2)
console.log(50000 + 50000)
console.log(500 * 200)
console.log(5e4 + 5e4)
console.log(Number("100000")) 
console.log(Math.max(10,100,1000,10000,100000))
console.log(2e5 / 2)

//////////////// task2 /////////////
console.log("\n task2 \n ")

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//////////////// task3 /////////////
console.log("\n task3 \n ")
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

//////////////// task4 /////////////
console.log("\n task4 \n ")

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//////////////// task5 /////////////
console.log("\n task5 \n ")

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//////////////// task6 /////////////
console.log("\n task6 \n ")

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed()); // 10

//////////////// task7 /////////////
console.log("\n task7 \n ")

console.log(Math.floor(Math.random()*20/4)); // 0 || 1 || 2 || 3 || 4