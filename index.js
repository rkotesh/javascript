// comparison operator
console.log(10!=="10");

let a = 10;
let b = 20;
/// equal value
console.log("10 == '10' :", a == "10");
// equal value and type
console.log("10 === '10' : ", a === "10");
// not equal
console.log("10 != 20 :", a != b);
// not equal or type
console.log("10 !== '10' :", a !== b);

console.log("20 > 10 :", a > b);

console.log("10 < 20 :", a < b);

console.log("10 >= 20: ", a >= b);

console.log("10 <= 20 : ", a <= b);


//logical

// &&, ||, !

let t = 10;
let j = 20;
console.log(t <= j && j >= t);

let ishappened = true;
console.log(!ishappened);

console.log(t >= j && j <= t);

// assignment

// assignment operators

let salary = 1000;

salary += 500;   
console.log(salary);   

salary -= 200;   
console.log(salary);   

salary *= 2;     
console.log(salary);

salary /= 2;     
console.log(salary);   

salary %= 1000;  
console.log(salary); 

// conditional statements

let age = 25;
let hasLiscence = true;

if (age <= 8) {
    console.log("Liscence Granted");
}
else if(age === 25){
    console.log("Liscence issued")
}
else {
    console.log("Not Granted");
}
// ternary operator
let score = 99;
let results = score >= 90 ? "A" : "B";
console.log(results);

// switch case

let marks = 90;

switch(marks === 90){
    case 1:
        console.log(marks >= 50 ? "Pass" : "Fail");
        break;
    case 2:
        console.log(marks >= 90 ? "Qualify" : "Fail");
        break;
    default:
        console.log("Not Attempted");
}

// loops

// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }

// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// let k = 2;
// do {
//     console.log(k);
//     i++;
// } while (k <= 5);


// for-of & for-in

// for-of - shows the given data values
let fruits = ['Apple', 'banana', 'guava'];

for (let fruit of fruits){
    console.log(fruit);
}

// for-in - shows the index values for the given data
let students = ['Ram', 'Koti', 'Nalam', 'nakjb'];

for (let student in students){
    console.log(student);
}

let student = {
    name : "Ram",
    dept : "csm",
    cgpa : 8.03
};

for (let key in student){
    console.log(key, ":", student[key]);
}

// functions

function greet (name){
    console.log("HI, " + name);
}

greet("Ram");

function add(a, b){
    return a + b;
}
let m = add(2, 0);

console.log(m);

// arrow function
const add1 = (a, b) => {
    return a + b;
};

//const add = (a, b) => a + b;

/*Q:
a college student want to calculate grade based on marks, write a function that makes as input and returns 
a = 90+, b = 75+, c = 60+, fail = below 60.*/
function grades(marks){
    if (marks >= 90){
        console.log("A");
    }
    else if (marks >= 75 && marks <= 90){
        console.log("B");
    }
    else if (marks >= 60 && marks <= 75) {
        console.log("C");
    }
    else {
        console.log("Fail");
    }
}
grades(marks = 98);


// Q:
// ATM should allow withdraw only if the balance is sufficient, create a function that checks wheather withdraw is possible. 
function amountChecking(balance, amount){
    if(amount <= balance){
        return "Sufficient Balance";
    }
    else {
        return "Insufficient Balance";
    }
}

console.log(amountChecking(1000, 300));

//Q: employee receives a 10% bonus on their salary, write a function to calculate the bonus amount 
function bonusAmount(salary){
    return salary = 0.10;
}
console.log(bonusAmount(500000));


//Scope

let company = "Rolla";

function employeeDetails() {
    let employeeName = "Ram";

    console.log("Company :", company);
    console.log("Employee :", employeeName);

    if(true) {
        let salary = 5000;
        let department = "IT";

        console.log("Salary : ", salary);
        console.log("Department :", department);
    }
}
employeeDetails();


// arrays
let l = [10, 100];

for (let i of l){
    console.log(i);
}

console.log(l);

// methods of array
let numbers = [10, 20, 40, 50, 60];

numbers.push(40);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(80);
console.log(numbers);
console.log(numbers.includes(10));
console.log(numbers.indexOf(20));


let fruits1 = ['Apples', 'Banana', 'Mango'];
console.log(fruits1);
let result1 = fruits1.join(" | ");
console.log(result1);

let numbers1 = [10, 20, 30];
let numbers2 = [40, 50, 60];
let result2 = numbers1.concat(numbers2);
console.log(result2);

// reverse and solve
let arr = [10, 20, 30, 40];
arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);

//advance array methods
// map()
const numbers0 = [1, 2, 4, 5, 6];
const double = numbers0.map(num => num ** 2);
console.log(numbers0);
console.log(double);

// filter()
let result = numbers1.filter(function(num){
    return num > 10;
}
);
console.log(result);

// reduce
let num = [0, 80, 60, 40];
let sum = num.reduce(function(total, num){    //function(accumulation, element) -> to be stored.
    return total + num;
}, 0);
console.log(sum);

//find()
let resultse = num.find(function(num){
    return num > 30;
})
console.log(resultse)

//replace






//objects

//promises
//async-wait
//fetch



