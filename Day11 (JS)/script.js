'use strict'

// Optional Chaining(means if it exists) - comes in action after 2 levels of nesting
// It has no use on the left side of assignment

// let user = null;

// let user = {
//     name: "Gaurav",
//     age: 21,
//     address: {
//         city: "Pune"
//     },
//     preferences: {
//         theme: "dark"
//     }
// }

// console.log(user.address.city);
// console.log(user?.preferences?.theme);
// console.log(user.address.city);     // when user is empty or null - TypeError: Cannot read properties of undefined (reading 'city')
// console.log(user?.address?.city);     // when user is empty or null - undefined


// short-circuiting and Others ?.() and ?.[]

// let user = {
// sayHi() {
//     return (
//         console.log(`Hii`)
//     )
// }
// };
// let x = 0;
// user?.sayHi(x++);
// console.log(x);

// let userAdmin = {
//     admin() {
//         console.log(`I am Admin`);
//     }
// }

// let Guest = {};
// userAdmin.admin();
// Guest.admin?.();    // nothing happens because no method in Guest Object

// let key = "firstName";
// let user1 = {
//     firstName: "John"
// };

// let user2 = null;

// console.log(user1.firstName);
// console.log(user2.firstName);   // TypeError: Cannot read properties of null (reading 'firstName')
// console.log(user2?.firstName);   // undefined

// same as above condition
// console.log(user1[key]);
// console.log(user2?.[key]);

// delete user?.name;  // if exists

// Symbols
// let id1 = Symbol("id");
// let id2 = Symbol("id")       // not same even if exactly same description
// console.log(id1);
// console.log(id2);
// console.log(id1 == id2)    // == or === false

// let desc = Symbol("This is my description");
// console.log(desc);
// console.log(desc.description);

// Hidden Symbol Properties
// let user = {
//     name: "John"
// }
// let id = Symbol("id");
// user[id] = 12;
// console.log(user);

// let userId = Symbol("userId");
// let user = {
//     name: "Alice",
//     age: 20,
//     [userId]: 143
// }
// console.log(user);

// for(let key in user) {   // no Symbols shown
//     console.log(user[key]);
// }

// const clone = Object.assign({}, user);
// console.log(`Clone `, clone);

// Global registry Symbols
// let Sym = Symbol.for("unique id");
// let Sym2 = Symbol.for("unique id");
// console.log(Sym === Sym2);  // true

// console.log(Symbol.keyFor(Sym));    // id


// const globalSym = Symbol.for("global");
// const localSym = Symbol("local");

// console.log(Symbol.keyFor(globalSym));  //global
// console.log(Symbol.keyFor(localSym));   // undefined
// console.log(localSym.description);  // local

// Object to primitives Conversion
// const Obj1 = {
//     name: "Ajay"
// };

// const Obj2 = {
//     name: "Amit"
// }

// console.log(Obj1 + Obj2);   // [object Object][object Object]
// console.log(Obj1 + 2);      // [object Object]2


// let user = {
//     name: "Aman",
//     toString() {
//         return "John";
//     },
//     valueOf() {
//         return 5;
//     }
// }

// console.log(user + 1);  // 6
// console.log(user + "Hello");    // 5Hello


// Datatypes

// Methods of Primitives
// let str = "Hello";
// str.test = 5;
// console.log(str);
// console.log(str.test);  // if we dont 'use strict' mode - then its undefined and after using 'use strict' we get an error
// TypeError: Cannot create property 'test' on string 'Hello'

// Numbers

// let billion = 1000000000;
// let billion = 1e9;
// let billion = 1_000_000_000;
// console.log(billion);

// let num = 255;
// let binary = num.toString(2);
// let hexa = num.toString(16);
// let base36 = num.toString(36);
// let base10 = num.toString(10);
// console.log(`binary `, binary);
// console.log(`hexa `,hexa);
// console.log(`base36 `,base36);
// console.log(`base10 `, base10);

// Converting number to its other base forms
// console.log(255..toString(16));
// console.log((255).toString(16));

// let hex = 0xff;
// let octal = 0o377;
// console.log(hex == octal);  // true
// console.log(`hex: ${hex}, octal: ${octal}`);

// let n = 123.45678;
// console.log(n.toFixed(2));
// console.log(typeof n.toFixed(2));   // toFixed() returns a string
// console.log(+n.toFixed(2));
// console.log(typeof +n.toFixed(2));

// Imprecise calculation
// console.log(0.1 + 0.2 === 0.3); // false, 0.1 + 0.2 = 0.30000000000000004

// isFinite(), isNaN(), Infinity, -Infinity
// console.log(isFinite(3));   // true
// console.log(isFinite("3")); // true
// console.log(isFinite(true));    // true
// console.log(isFinite("str"));   // false
// console.log(isFinite(Infinity));    // false

// More Strict versions Number.isfinite() and Number.isNaN() = doesn't allow to convert datatypes
// console.log(Number.isFinite(10000));    // true
// console.log(Number.isFinite("10000"));      // false

// parseInt() and parseFloat()
// console.log("parseInt() ", parseInt("2304"));   // 2304
// console.log("parseInt() ", parseInt(2304));     // 2304
// console.log("parseInt() ", parseInt("hello"));  // NaN
// console.log("parseInt() ", parseInt("ff", 16)); // 255 (str, radix/base)


// console.log("parseFloat() ", parseFloat("1324.123"));   // 1324.123
// console.log("parseFloat() ", parseFloat(1324.123));     // 1324.123

// Math functions

// let n = 12324.3243
// console.log(`Math.round(n) `, Math.round(n))
// console.log(`Math.ceil(n) `, Math.ceil(n))
// console.log(`Math.floor(n) `, Math.floor(n))
// console.log(`Math.abs(n) `, Math.abs(n))
// console.log(`Math.trunc(n) `, Math.trunc(n))
// console.log(`Math.PI `, Math.PI)
// console.log(`Math.min(12,24,21,42,5,4) `, Math.min(12,24,21,42,5,4));
// console.log(`Math.max(12,24,21,42,5,4) `, Math.max(12,24,21,42,5,4));


// 1)
// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");
// console.log(num1 + num2);

// 2)   Precision loss
// let n = 6.35
// let n1 = 1.35
// console.log(n.toFixed(1));  // 6.34
// console.log((n*10).toFixed(1) / 10);
// console.log(n1.toFixed(1));   // 1.4

// 3)
// function readNumber() {
//     let num;
//     do {
//         num = prompt("Enter a number");
//         console.log(num)
//         console.log(typeof num)
//         console.log(isFinite(num));

//     } while (!isFinite(num));
//     if(num === null || num === "") return null;
//     return num;
// }

// alert(`Read: ${readNumber()}`);


// 4)   i never becomes 10 so it will never break and will be an infinite loop
// let i = 0;
// while (i < 11) {
//     i += 0.2;
//     console.log(i);
//     if (i > 9.8 && i < 10.2) {
//         console.log(i);
//         break;
//     }
// }


// 5)
// function randomNum(min, max) {
//     // let interval = max - min;
//     // console.log(interval);
//     let num = min + Math.random() * (max - min);
//     return num;

// }

// console.log(randomNum(1, 4));
// console.log(randomNum(3, 8));
// console.log(randomNum(6, 9));
// console.log(randomNum(2, 5));


// 6)
// function randomInt(min, max) {
//     // let number = Math.floor(min + Math.random() * (max - min));  // wrong
//     // let number = Math.round(min - 0.5 + Math.random() * (max - min + 1));    // right
//     let number = Math.floor(min + Math.random() * (max + 1 - min)); // right using floor
//     return number;
// }

// console.log(randomInt(1, 5))
// console.log(randomInt(5, 10))
// console.log(randomInt(10, 15))


// const arr = [];
// const obj = {};
// console.log(arr);
// console.log(obj);


