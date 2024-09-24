// Create an object representing a person
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};


// Create an object representing a car
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Access and print each property
console.log(car.make);   // Output: Toyota
console.log(car.model);  // Output: Corolla
console.log(car.year);   // Output: 2020


// Modify the age property of the person object
person.age = 30;
console.log(person.age);  // Output: 30


// Add a new property hobby to the person object
person.hobby = "reading";
console.log(person.hobby);  // Output: reading



// Delete the city property from the person object
delete person.city;
console.log(person);  // Output will no longer have the city property


// Create a calculator object with a method add
let calculator = {
    a: 5,
    b: 10,
    add: function() {
        return this.a + this.b;
    }
};

// Call the add method
console.log(calculator.add());  // Output: 15


// Create 3 book objects
let book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
};

let book2 = {
    title: "1984",
    author: "George Orwell",
    pages: 328
};

let book3 = {
    title: "Moby Dick",
    author: "Herman Melville",
    pages: 635
};

// Print each book's title
console.log(book1.title);  // Output: To Kill a Mockingbird
console.log(book2.title);  // Output: 1984
console.log(book3.title);  // Output: Moby Dick



// Constructor function for Animal
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;

    this.makeSound = function() {
        console.log(this.sound);
    };
}


// Create two animals: a cat and a dog
let cat = new Animal("Cat", "Meow");
let dog = new Animal("Dog", "Woof");

// Make the animals sound
cat.makeSound();  // Output: Meow
dog.makeSound();  // Output: Woof




// Modify Animal constructor to add a changeName method
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;

    this.makeSound = function() {
        console.log(this.sound);
    };

    this.changeName = function(newName) {
        this.name = newName;
    };
}

// Create an instance and change its name
let lion = new Animal("Lion", "Roar");
console.log(lion.name);  // Output: Lion
lion.changeName("Big Cat");
console.log(lion.name);  // Output: Big Cat
