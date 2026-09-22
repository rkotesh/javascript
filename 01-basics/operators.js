// operators

// Arthematic
const a = 10;
const b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(10 % 2);
console.log(7 % 2);

// increment & decrement
let count = 5;

count++;
console.log(count);

count--;
console.log(count);

// postfix vs prefix

let x = 4;
console.log(x++);

let y = 10;
console.log(++y);
console.log(--y);

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

// comparison operators

const age = 20;

console.log(age === 20);
console.log(age !== 20);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 20);
console.log(age >= 20);

//logical operators

const hasLiscence = true

console.log(age >= 18 && hasLiscence);
console.log(age < 18 || hasLiscence);
console.log(!hasLiscence);

// Operator Precedence - BODMAS
console.log(2 + 3 * 4);     // 14  (multiply first)
console.log((2 + 3) * 4);   // 20  (brackets first)
console.log(2 ** 3 * 2);    // 16  (power first: 8 * 2)


// Given const total = 47;, print whether it is even or odd using %

const total = 47;
if (47 % 2) {
    console.log("Odd");   
}
else {
    console.log("Even");
}

// Start with let balance = 5000;. Use += to deposit 1500 and -= to withdraw 700. Print the final balance

let balance = 5000;
balance += 1500;
balance -= 700;
console.log(balance);

// Convert 72 marks to a pass check: pass if marks are 35 or more AND attendance is 75 or more

const marks = 80;
const attendance = 78;

const isPassed = marks >= 35 && attendance >= 75;

if(isPassed) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


