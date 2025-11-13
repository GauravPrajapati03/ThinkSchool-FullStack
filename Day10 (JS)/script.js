// 'use strict';

// Objects

// let user = { name: "Amit" };
// console.log(user);  // Amit
// let me = user;
// me.name = "Gaurav";
// console.log(user);  // Gaurav

// console.log(user == me);   //== or === true


// let a = {};
// let b = {};
// console.log(a == b);    // == or === false


// const myVar = {
//     name: "Ajay"
// }
// myVar.name = "Amit";

// myVar = {           // TypeError: Assignment to constant variable.
//     name: "Amit"
// }
// console.log(myVar);


// const myObj = {
//     name: "Gaurav",
//     age: 20
// }

// console.log(`Original `, myObj);


// Method 1 -- iterate over object properties
// const clone = {};

// for (let key in myObj) {
//     clone[key] = myObj[key];
// }
// console.log(`myObj == clone`, myObj == clone);  // false
// console.log(`clone `, clone);


// Method 2 -- Object.assign Method
// const clone = Object.assign({}, myObj);
// console.log(`myObj == clone`, myObj == clone);  // false
// console.log(`clone `, clone);


// method 3 -- Spread Operator {...object};
// const clone = {...myObj};
// console.log(`myObj == clone`, myObj == clone);  // false
// console.log(`clone `, clone);


// Method 4 -- structuredClone() method
// const clone = structuredClone(myObj);
// console.log(`myObj === clone`, myObj === clone);  // false
// console.log(`clone `, clone);


// Nested Cloning

// const myObj = {
//     name: "Gaurav",
//     age: 20,
//     address: {
//         city: "Pune",
//         state: "Maharashtra"
//     }
// }

// console.log(`Original `, myObj);

// // const clone = structuredClone(myObj);

// const clone = { ...myObj };
// clone.name = "Aman";

// console.log(`myObj == clone `, myObj == clone);     // false

// clone.address.city = "Mumbai";
// console.log(`clone `, clone);
// console.log(myObj);


// Circular reference

// let user = {};
// user.me = user;
// console.log(user);

// let clone = structuredClone(user);
// console.log(`clone === clone.me `, clone === clone.me);  // true

// console.log(clone.me);

// Structured clone doesn't work for function properties
// let myVar = {
//     f: function () {
//         console.log(`Hello`);
//     }
// };

// const newVar = structuredClone(myVar);  // DOMException [DataCloneError]: function () {console.log(`Hello`);} could not be cloned.
// console.log(newVar);



// Garbage Collection
// In JS Grabage Collection is automatically done by the browser.


// Object Methods
// let user = {
//     name: "Amit",
//     greet() {
//         console.log(`Hello Everyone`);
//     },
//     meet() {
//         console.log(this)
//         console.log(`Nice to meet you ${this.name}`);
//     }
// }

// user.sayHi = () => {
//     console.log(`Hii ${user.name}`);
// }

// // Pre-declared function
// function sayGreet() {
//     console.log(`Hello ${user.name}`);
// }

// user.myFunc = sayGreet;

// user.sayHi();
// user.greet();
// user.myFunc();
// user.meet();

// const Obj = {
//     name: "abc",
//     display() {
//         console.log(this);
//     }
// }

const arrow = () => {
    console.log(this);
}
function normal() {
    console.log(this);
}


// Obj.display();
// Obj.normal = normal;
// Obj.normal();
// Obj.arrow = arrow;
// Obj.arrow();    // {}


// 'use strict';

function withoutObject() {      // If we use 'use strict' then undefined else window object in browsers
    console.log(this);
}

// const withoutObject = () => {
//     console.log(this);
// }

// withoutObject();

// Task 1

// function makeUser() {
//     // return {
//     //     name: "Aman",
//     //     ref : this
//     // }
//     return {
//         name: "Aman",
//         ref() {
//             return this;
//         }
//     }
// }

// let user = makeUser();

// console.log(makeUser());
// console.log(user.ref().name);     // TypeError: Cannot read properties of undefined (reading 'name')



// Task 2
// const calculator = {
//     // a: 10,
//     // b: 20,
//     read() {

//         this.a = +prompt("Enter a");
//         this.b = +prompt("Enter b");

//         // console.log(`a = ${this.a}, b = ${this.b}`);
//     },
//     sum() {
//         console.log(this.a + this.b);
//     },
//     mul() {
//         console.log(this.a * this.b);
//     }
// }

// calculator.read();
// calculator.sum();
// calculator.mul();


// Task 3
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     }
// };

// ladder.showStep();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.showStep();
// ladder.down();
// ladder.down();
// ladder.showStep();


// chainned - we need to use the return this; in every function
// ladder.up().up().showStep().up().up().showStep().down().showStep().down().showStep();


// Constructors
// Two functions - one Object

// let Obj = {};
// function A() { return Obj; };
// function B() { return Obj; };

// let a = new A();
// let b = new B();

// console.log(a == b);     // false
// console.log(A() == B())    // true
// console.log(new A() === new B())    // false - without returning Obj from functions
// console.log(new A() === new B())    // true - when returning Obj from the functions


// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("Enter a");
//         this.b = +prompt("Enter b");
//     };
//     this.sum = function () {
//         return this.a + this.b
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     }
// };

// let calc = new Calculator();
// calc.read();

// console.log(calc.sum());
// console.log(calc.mul());


// Constructor functions - are normal function with first letter capital and used for creating multiple objects of same structure
// it helps creating a blueprint for the objects

// function User(name, age, place) {
//     this.name = name;
//     this.age = age;
//     this.place = place;

//     this.greet = function () {
//         console.log(`Hello I'm ${name}, ${age} years old, and I am from ${place}`);
//     }
// }
// let user1 = new User("Amit", 20, "Pune");
// console.log(user1)
// user1.greet();

// let user2 = new User("Aman", 22, "Mumbai");
// console.log(user2)
// user2.greet();

// let user3 = new User("Ajay", 23, "Indore");
// console.log(user3)
// user3.greet();


// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += +prompt("Enter value to add");
//         // this.newValue = val;
//     }
// }

// let curr = new Accumulator(1);
// curr.read();
// curr.read();

// console.log(curr.value);

