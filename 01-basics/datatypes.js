const firstName = "Ram";
const message = `Welcome`;
const city = 'Guntur';

console.log(firstName, message, city);


// JavaScript has one number type for both whole numbers and decimals.
const age = 28;
const price = 99.99;
const temperature = -5;

console.log(age, price, temperature);
console.log(10 + 5);
console.log(10 / 4);


// NaN means "Not a Number". It appears when a math operation makes no sense, typeof NaN is still "number"
console.log(10 / 0);        // Infinity
console.log("hello" * 2);   // NaN



// boolean
const isLoggedIn = true;
const hasPaid = false;

console.log(isLoggedIn, hasPaid);
console.log(10 > 5);   // true
console.log(10 < 5);   // false


// undefined
let department;
console.log(department);

//null
let middleName = null;
console.log(middleName);

// bigint & symbol
const bigNumber = 9007199254740993n;   // the "n" at the end makes it BigInt
const id = Symbol("id");

console.log(bigNumber);
console.log(id);

// object
const employee = {
  name: "Ravi",
  age: 30
};

const colors = ["red", "green", "blue"];

console.log(employee);
console.log(colors);

//type of - operator
console.log(typeof "Hello");      // string
console.log(typeof 42);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object  (a famous bug)
console.log(typeof 123n);         // bigint
console.log(typeof Symbol("x"));  // symbol
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function



// Make one variable of each type: string, number, boolean, null, undefined
// Print each value with its typeof

let name = "Ram Koti";
console.log(typeof "Ram Koti");

const num = 30;
console.log(typeof 30);

let isStudent = true;
console.log(typeof true);

let value = null;
console.log(typeof null);

let fruit;
console.log(typeof undefined);

