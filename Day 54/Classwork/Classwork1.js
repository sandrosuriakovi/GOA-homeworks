function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(3, 4));

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(7)); 

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
