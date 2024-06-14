let str = "Hello, World!";
console.log(str.charAt(0)); // "H"
console.log(str.concat(" How are you?")); // "Hello, World! How are you?"
console.log(str.includes("World")); // true
console.log(str.indexOf("o")); // 4
console.log(str.slice(0, 5)); // "Hello"
console.log(str.split(", ")); // ["Hello", "World!"]
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.trim()); // "Hello, World!"

let num = 12345.6789;
console.log(num.toFixed(2)); // "12345.68"
console.log(num.toExponential(2)); // "1.23e+4"
console.log(num.toString(16)); // "3039"
console.log(parseInt("1010", 2)); // 10
console.log(parseFloat("123.45")); // 123.45

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Dot Notation
console.log(person.firstName); // "John"

// Bracket Notation
console.log(person["lastName"]); // "Doe"

// Using Methods
console.log(Object.keys(person)); // ["firstName", "lastName", "age"]
console.log(Object.values(person)); // ["John", "Doe", 30]
console.log(Object.entries(person)); // [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]


