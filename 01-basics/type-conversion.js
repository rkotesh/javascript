// convert to string

const age = 20;
const isActive = true;

console.log(String(age));
console.log(String(isActive));
console.log(String(null));
console.log(String(undefined));

console.log(age.toString());
console.log(typeof toString(age));

//.toString() on a number can also change the number system:

console.log((2550).toString(3));


// convert to Number

console.log(Number("42"));       // 42
console.log(Number("3.14"));     // 3.14
console.log(Number("  42  "));   // 42  (spaces at the ends are ignored)
console.log(Number(""));         // 0   (empty text becomes 0)
console.log(Number("hello"));    // NaN
console.log(Number("42abc"));    // NaN (must be fully a number)
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// parseInt() & parseFloat()

console.log(parseInt("42abc"));     // 42
console.log(parseInt("abc42"));     // NaN (must START with a number)
console.log(parseInt("3.99"));      // 3   (cuts the decimal, no rounding)
console.log(parseFloat("3.14abc")); // 3.14
console.log(parseFloat("3.99"));    // 3.99
console.log(parseInt("101", 2));    // 5   (read "101" as binary)


// NaN -> not a number
// Number.isNaN() to check for NaN
console.log(NaN === NaN);           // false (strange but true)
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN("hello")); // false (it is a string, not NaN)

// boolean 
// 8 types of false statements
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false
console.log(Boolean(""));         // false  (empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

console.log(Boolean("hello"));   // true
console.log(Boolean(42));        // true
console.log(Boolean(-5));        // true
console.log(Boolean("0"));       // true  (text "0", not the number 0)
console.log(Boolean("false"));   // true  (text "false" is still text)
console.log(Boolean([]));        // true  (empty array)
console.log(Boolean({}));        // true  (empty object)

// !!value also converts to boolean.
console.log(!!"hello");  // true
console.log(!!0);        // false


// Convert the string "150" to a number and add 50 to it. Print the result
// Convert the number 999 to a string and print its typeof
// Use parseInt and parseFloat on "75.5kg". Print both results

const result = Number("150") + 50;
console.log(result);

let num = 999;
console.log(String(num));
console.log(typeof 999);

// let num = 999;
// let str = String(num);
// console.log(str);
// console.log(typeof 999);

console.log(parseInt("75.5"));
console.log(parseFloat("75.5"));

// Write code that takes "abc", converts it to a number, and prints "Invalid" if it is NaN

let str = "abc";
let str1 = "1234";
console.log(Number(str));
console.log(Number(str1));

if(Number.isNaN(str1)){
    console.log("Invalid");
}
else {
    console.log("Valid");
}

