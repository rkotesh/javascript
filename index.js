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

