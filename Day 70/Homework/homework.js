let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));


let sum = 0;
numbers.forEach(number => sum += number);
console.log(sum);


let students = ["Alice", "Bob", "Charlie"];
students.forEach(name => console.log(`Student: ${name}`));


let integers = [1, 2, 3, 4, 5];
let doubled = [];
integers.forEach(num => doubled.push(num * 2));
console.log(doubled);



let squares = integers.map(num => num ** 2);
console.log(squares);



let strings = ["apple", "banana", "cherry"];
let lengths = strings.map(str => str.length);
console.log(lengths);


let lowercaseStrings = ["hello", "world"];
let uppercaseStrings = lowercaseStrings.map(str => str.toUpperCase());
console.log(uppercaseStrings);



let evenNumbers = integers.filter(num => num % 2 === 0);
console.log(evenNumbers);



let names = ["Tom", "Elizabeth", "Jennifer", "Sarah"];
let longNames = names.filter(name => name.length > 5);
console.log(longNames);


let mixedNumbers = [-3, 7, 0, -1, 4];
let positiveNumbers = mixedNumbers.filter(num => num > 0);
console.log(positiveNumbers);
