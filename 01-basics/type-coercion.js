// + -> operator 
// add numbers or joins text
// if either side is a string, JavaScript joins them as text.
console.log("5" + 3);        // "53"
console.log(5 + "3");        // "53"
console.log("Age: " + 25);   // "Age: 25"
console.log(5 + 3);          // 8

// -, *, / operators
// works with numbers, converts text to numbers
console.log("10" - 3);       // 7
console.log("10" * "2");     // 20
console.log("20" / 4);       // 5
console.log("hello" - 3);    // NaN
console.log("1234" - 4);    // 1230

// unary plus( + )
// infront of any value converts to number

console.log(+"42");     // 42
console.log(+"abc");    // NaN
console.log(+true);     // 1
console.log(+"");       // 0 - becoz it is empty string so it false = 0

// == vs ===

console.log("5" == 5); // true, double equals first convert to type then validate (text converted to number)
console.log("5" === 5); // false, triple equals has no conversion & first compare valur & type (number vs string: different types)

// always use === and !==
console.log(5 !== "5");    // true  (strict "not equal")
console.log(5 != "5");     // false (loose "not equal", avoid)

// Fix this bug so it prints 300:
//    const a = "100";
//    const b = "200";
//    console.log(a + b);
const a = "100";
const b = "200";
console.log(Number(a) + Number(b));

// Write an if check for an empty string and for the number 0, and note which branch runs
const emptyString = "";
const numberZero = 0;
// string
if(emptyString){
    console.log("True");
}
else {
    console.log("False");
}
// number
if(numberZero === 0){
    console.log("True");
}
else {
    console.log("False");
}