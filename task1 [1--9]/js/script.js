// window.alert("hello")
// document.write("<h1>ABDO <span>page</span></h1>")
// console.log("heeeeey")
// console.error("Error")
// console.table(["Abdo", "Ali", "Mahmoud"])
// console.log("Hello from %cjs %cFile","color:red; font-size:30px", "color:blue; font-size:50px")
// var myName ="Abdo"
// console.log("Hello " + myName)
// console.log(`Hello ${myName}`)

/////////////////////////// task2

document.write("<h1>ElZero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

///////////////////////////// task3

console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px;",
  "color:green; font-size:40px; font-weight:bold;",
  "background-color:blue; font-size:40px;"
);
////////////////////// task4
console.group("group 1")
console.log("message 1")
console.log("message 2")
console.group("child group")
console.log("message 1")
console.log("message 2")
console.group("grand child group")
console.log("message 1")
console.log("message 2")
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("group 2")
console.log("message 1")
console.log("message 2")

//////////////////// task5
console.table(["Elzero", "Abdo", "Cheetos","Ali"])


/////////////////// task6

// console.log("Iam In Console");
// document.write("Iam In Page");

/* console.log("Iam In Console");
document.write("Iam In Page"); */