// Comparisons
console.log(5 > 4);   // true
console.log("apple" > "pineapple");  // false
console.log('2' > '12');    // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == '\n0\n');   // false   
console.log(null === +'\n0\n'); // false

let abc = '\t0\n'
let pqr = +'\t0\n'
console.log(typeof abc)
console.log(abc)
console.log(typeof pqr)
console.log(pqr)


// If - Else Statements
if ("0") {  // treated as a string with value
    console.log(`Printed`);
}

// let ans = prompt("what is official name of JavaScript?");
// if (ans == 'ECMAScript') {
//     alert("Right");
// } else {
//     alert('You dont know ECMAScript');
// }


// let num = Number(prompt("Enter a Number"));

// if (num > 0) alert("1");
// else if (num == 0) alert("0");
// else alert("-1");


// let a= 1, b=4;
// let result = (a + b < 4) ? "Below" : "Over";
// console.log(result)


// let login = prompt("Please Enter your role");
// let msg = (login == "Employee") ? "Hello" :
//     (login == "Director") ? "Greetings" :
//         (login == "") ? "No Login" : " ";

// alert(msg);



// Logical Operators

console.log(null || 0 || undefined);    // undefined
console.log(null || 2 || undefined);    // 2

// alert(alert(1) || 2 || alert(3));

console.log(1 && null && 2);    // null

// alert( alert(1) && alert(2) );   // 1 undefined

// alert(null || 2 && 3 || 4);     // 3

// if(age >= 14 && age <= 90);     // “Inclusively” means that age can reach the edges 14 or 90.

// if(!(age >= 14 && age <= 90));

// if(age >= 14 || age <= 90);

if (-1 || 0) console.log('first');      // true
if (-1 && 0) console.log('second');     // false
if (null || -1 && 1) console.log('third');  // true

// Login Flow

// let user = prompt("Who are you?");
// console.log(user);

// if (user == "ADMIN") {
//     let password = prompt("Enter your password");
//     if (password == "TheMaster") {
//         alert("Welcome");
//     }
//     else if (password == null || password == "") {
//         alert("Cancelled");
//     }
//     else {
//         alert("Wrong Password");
//     }
// } else if (user == null || user == "") {
//     alert("Cancelled");
// }
// else {
//     alert("I dont know");
// }



// loops
// let i = 3;
// while (i) {
//     console.log(i--);
// }

// let i=0;
// while(++i < 5)
//     console.log(i);     // 1 2 3 4

// while (i++ < 5)
//     console.log(i);     // 1 2 3 4


// for (let i = 0; i < 5; i++) {
//     console.log(i);      // 0-4
// }

// for (let i = 0; i < 5; ++i) {
//     console.log(i);     // 0-4
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}`);
//     i++;
// }

// let num = Number(prompt("Enter a Number"));

// while (num < 100) {
//     num = Number(prompt("Enter a Number (greater than 100)"));
//     console.log(num);
// }


// let num;
// do {
//     num = Number(prompt("Enter a Number"));
//     console.log(num);
// } while (num <= 100 && num);


// Prime numbers - code using label

// let n = 10;

// nextprime: for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextprime;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) console.log(i);
// }

// Switch statement

// let browser = prompt("Enter Browser");

// if (browser === "Edge") {
//     console.log(`You've got the Edge`)
// } else if (browser === "Chrome" || browser === "Safari" || browser === "Opera" || browser === "Firefox") {
//     console.log(`Ok we support these browsers tooo`);
// } else {
//     console.log(`We hope that this page looks ok`);
// }


// let a = +prompt("Enter number");

// switch (a) {
//     case 0:
//         console.log(0)
//         break;

//     case 1:
//         console.log(1);
//         break;

//     case 2:
//     case 3:
//         console.log("2,3");
//         break;

//     default:
//         console.log("Invalid")
//         break;
// }


function checkAge(age) {
    // let res = (age > 18) ? true : confirm("did your parents allow you?");
    // return res;

    let res = (age > 18) || confirm("Did your parents allow you");
    return res;
}

// console.log(checkAge(2));


function minimum(a, b) {
    return (a < b) ? a : b;
}

// console.log(minimum(6, 4));
// console.log(minimum(2, 5));
// console.log(minimum(3, -1));
// console.log(minimum(1, 1));


let form = document.getElementById('myform');
let result = document.getElementById("result");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let x = document.getElementById('x').value;
    let n = document.getElementById('n').value;

    let ans = power(x, n);
    result.textContent = `${x}^${n} = ${ans}`;
})

function power(x, n) {
    return x ** n;
}

// console.log(power(2,3));