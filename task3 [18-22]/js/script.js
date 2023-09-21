//////////// challange1  //////////////
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// console.log(++a + +b++ + +c++ - +a++);
/*
[++a]=> 11 , a=11
[+] ==> plus
[+b] == unary
[b++] ==> 20 , b=21
[+] ==> plus
[+c] == unary
[c++] ==> 80 , c=81
[+a] == unary
[a++] ==> 11 , a=12
result = 11+20+80-11 = 100
*/
// console.log(++a + -b + +c++ - -a++ + +a);
/*
a=12, b=21, c=81
[++a]=> 13 , a=13
[+] ==> plus
[-b]==> -21 (unary)
[+c]==>unary
[c++]=>81 , c=82
[-]=> minus
[a++]=>13, a=14
[+] ==> plus
[+a]==> 14
result = 13 + (-21) + 81 - (-13) + 14  = 100
*/
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
a=14,b=21,c=82
[--c]=>81, c=81
[+] ==> plus
[+b]==> 21 (unary)
[+] ==> plus
[--a]=>13, a=13
[*]=multiplication
[+b++]==> 21 (unary),[b++]=>b=22
[-]=> minus
[+b]==> 22 (unary)
[*]=multiplication
[a]==>13
[+] ==> plus
[--a]==>12, a=11
[-]=> minus
[+true]==>1
result = 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
*/
// /////// challenge2 /////////
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d * e); // 2000
console.log(-d + 3 * f - +e + 3 * +g); // 173 ===> 100 + 3*30 - 20 + 3* +true

///////////////////////// task1

console.log(10 * 20 + (15 % 3) + 190 + 10 - 400);
// 10* 20 = 200, (15 % 3) = 0, 190 + 10 = 200, 400

/////////////////// task2

let num = 3;

console.log(num + num); // 6
console.log(num * (+true + +true)); // 6
console.log(num * num - num); // 6
console.log(++num + --num - +true); // 6
console.log(num-- + ++num); // 6
console.log((num += num)); // 6

////////////// task3 ///////////

let num1= "10";
console.log(+num1 + +num1); // 20
console.log(++num1 + --num1 - true); // 20
console.log(+num1 * (+true + +true)); // 20
console.log((num1 += num1)); // 20

////////////// task4 ////////
let points = 10;
console.log(++points + true + true); // 13
console.log(--points - true - true); // 8;