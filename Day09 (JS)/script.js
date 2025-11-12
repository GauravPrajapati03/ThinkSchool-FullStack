// Function Expression
// let sum = function (a, b) {
//     return a + b;
// }
// console.log(sum(2, 5));

// Arrow Functions

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// };

// ask("Do u agree?",
//     () => { console.log(`You agreed`) },
//     () => { console.log(`You cancelled Execution`) }
// );

// Code Styling

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = prompt("x?");
// let n = prompt("n?");

// if (n <= 0) {
//     alert(`${n} Power is not supported`);
// } else {
//     alert(pow(x, n));
// }


// Objects

// let user = {
//     name: "John",
//     age: 20
// }
// console.log(user.name);     // Dot 
// console.log(user["age"]);   // square brackets

// let fruit = prompt("Enter a fruit");
// user["fruit"] = fruit;
// console.log(user);


let codes = {
    49: "Germany",
    41: "Switerland",
    44: "Great Britan",
    1: "USA"
}

console.log(codes); // it sorts the properties in ascending order

for (let code in codes) {
    console.log(code);      // 1 41 44 49
}

let user = {
    name: "John",
    surname: "Smith",
}

user.name = "Pete";
delete user.name;
console.log(user);

function isEmpty(Obj) {
    for (let key in Obj) {
        return false;
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
console.log(schedule);


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumber(menu);

function multiplyNumber(menu) {
    for (let item in menu) {
        if (typeof menu[item] === 'number') {
            menu[item] *= 2;
        }
    }
}

console.log(menu);