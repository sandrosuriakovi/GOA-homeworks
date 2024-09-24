// 1. Declare a variable named `x` and assign it the value `5`.
let x = 5;

// 2. Create a variable `name` and set it to your name.
let name = "sandro";

// 3. Declare a constant `PI` with the value `3.14`.
const PI = 3.14;

// 4. Assign the value of `x` to a new variable `y`.
let y = x;

// 5. Create a variable `isStudent` and set it to `true`.
let isStudent = true;

// 6. Declare a variable `age` without assigning a value.
let age;

// 7. Reassign the value of `x` to `10`.
x = 10;

// 8. Create a string variable `greeting` with the value `"Hello, World!"`.
let greeting = "Hello, World!";

// 9. Create a variable `height` with a value of `null`.
let height = null;

// 10. Create a variable `num` and set it to the result of `2 + 3`.
let num = 2 + 3;

// 11. Declare a variable `z` and initialize it with `undefined`.
let z = undefined;

// 12. Create a variable `total` and assign it the sum of `10 + 20`.
let total = 10 + 20;

// 13. Declare a variable `language` and set it to `"JavaScript"`.
let language = "JavaScript";

// 14. Assign the value of `false` to a variable `isAvailable`.
let isAvailable = false;

// 15. Create a variable `message` and set it to `"Welcome to JavaScript!"`.
let message = "Welcome to JavaScript!";

// 16. Assign the value of `3.14` to a variable `pi`.
let pi = 3.14;

// 17. Declare a variable `temperature` and set it to `25`.
let temperature = 25;

// 18. Create a variable `score` and initialize it with `100`.
let score = 100;

// 19. Create a variable `fullName` and set it to your full name.
let fullName = "sandro suriakovi";

// 20. Declare a variable `isOnline` and set it to `false`.
let isOnline = false;

// 21. Define a function named `sayHello` that takes no parameters and returns the string `"Hello, world!"`. 
function sayHello() {
    return "Hello, world!";
}
console.log(sayHello());

// 22. Create a function `addNumbers` that takes two parameters, `a` and `b`, and returns their sum. 
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 4)); // Example call

// 23. Write a function `getFullName` that takes two parameters, `firstName` and `lastName`, and returns a string in the format `"First Last"`.
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(getFullName("John", "Doe")); // Example call

// 24. Define a function expression named `multiply` that takes two parameters and returns their product.
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 6)); // Example call

// 25. Create a function `isOdd` that takes a number and returns `true` if the number is odd, and `false` otherwise.
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(7)); // Example call

// 26. Write a function `square` that takes a number and returns its square (i.e., the number multiplied by itself).
function square(number) {
    return number * number;
}
console.log(square(5)); // Example call

// 27. Write a function `celsiusToFahrenheit` that converts a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // Example call

// 28. Create a function `isEqual` that takes two values and returns `true` if they are equal and `false` otherwise.
function isEqual(a, b) {
    return a === b;
}
console.log(isEqual(5, 5)); // Example call

// 29. Write a function `subtract` that takes two numbers and returns their difference.
function subtract(a, b) {
    return a - b;
}
console.log(subtract(7, 4)); // Example call

// 30. Write a function `isGreater` that takes two numbers and returns `true` if the first number is greater than the second.
function isGreater(a, b) {
    return a > b;
}
console.log(isGreater(8, 5)); // Example call

// 31. Write a function `promptForName` that uses prompt() to ask the user for their name and then displays an alert with a message like "Hello, [name]!".
function promptForName() {
    let name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
}

// 32. Create a function `addTwoNumbers` that uses prompt() to get two numbers from the user, adds them together, and then displays the result using alert().
function addTwoNumbers() {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    let sum = num1 + num2;
    alert(`The sum is ${sum}.`);
}

// 33. Implement a function `convertToNumber` that uses prompt() to ask the user for a value, converts it to a number using `Number()`, and displays the result with alert().
function convertToNumber() {
    let value = prompt("Enter a value:");
    let number = Number(value);
    alert(`The number is ${number}.`);
}

// 34. Write a function `getFavoriteColor` that uses prompt() to ask the user for their favorite color and then logs a message like "Your favorite color is [color]." to the console.
function getFavoriteColor() {
    let color = prompt("What is your favorite color?");
    console.log(`Your favorite color is ${color}.`);
}

// 35. Create a function `displayAge` that uses prompt() to ask the user for their age and then shows an alert with "You are [age] years old."
function displayAge() {
    let age = prompt("How old are you?");
    alert(`You are ${age} years old.`);
}

// 36. Implement a function `subtractNumbers` that uses prompt() to get two numbers from the user, subtracts the second from the first, and then displays the result in an alert.
function subtractNumbers() {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    let difference = num1 - num2;
    alert(`The difference is ${difference}.`);
}

// 37. Write a function `favoriteMovie` that uses prompt() to ask the user for their favorite movie and then displays an alert with "Your favorite movie is [movie]."
function favoriteMovie() {
    let movie = prompt("What is your favorite movie?");
    alert(`Your favorite movie is ${movie}.`);
}

// 38. Create a function `squareNumber` that uses prompt() to get a number from the user, calculates its square, and then shows the result in an alert.
function squareNumber() {
    let number = Number(prompt("Enter a number:"));
    let squared = number * number;
    alert(`The square of ${number} is ${squared}.`);
}

// 39. Implement a function `checkParity` that uses prompt() to get a number from the user and displays an alert with "The number is even." or "The number is odd." based on whether the number is even or odd.
function checkParity() {
    let number = Number(prompt("Enter a number:"));
    if (number % 2 === 0) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }
}

// 40. Write a function `repeatInput` that uses prompt() to get a string from the user and then displays an alert repeating that string twice, separated by a space.
function repeatInput() {
    let input = prompt("Enter a string:");
    alert(`${input} ${input}`);
}
