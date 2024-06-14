//Object Notations and For-in Loop;
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Accessing properties
console.log(person.name); // John
console.log(person["age"]); // 30

// Calling method
person.greet(); // Hello, John

//For-in Loop;
const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person1) {
    console.log(key + ": " + person1[key]);
}

//Math Object Methods;
let randomNum = Math.random();
console.log(randomNum); // e.g., 0.123456789

let floorValue = Math.floor(4.7);
console.log(floorValue); // 4

let ceilValue = Math.ceil(4.3);
console.log(ceilValue); // 5

let roundValue = Math.round(4.5);
console.log(roundValue); // 5

roundValue = Math.round(4.4);
console.log(roundValue); // 4

let maxValue = Math.max(10, 20, 30);
console.log(maxValue); // 30

let minValue = Math.min(10, 20, 30);
console.log(minValue); // 10

let sqrtValue = Math.sqrt(16);
console.log(sqrtValue); // 4

let powerValue = Math.pow(2, 3);
console.log(powerValue); // 8

let absValue = Math.abs(-5);
console.log(absValue); // 5

console.log(Math.PI); // 3.141592653589793



