// A simple higher-order function that takes a function as an argument
function higherOrderFunction(callback) {
    callback();
  }
  
  // A callback function
  function sayHello() {
    console.log("Hello, World!");
  }
  
  // Passing the callback function to the higher-order function
  higherOrderFunction(sayHello);

  const numbers = [1, 2, 3, 4, 5];

  // Using map to create a new array with each element squared
  const squares = numbers.map(num => num * num);
  
 console.log(squares); // Output: [1, 4, 9, 16, 25]
// Execution flow:
// num = 1 -> 1 * 2 = 2
// num = 2 -> 2 * 2 = 4
// num = 3 -> 3 * 2 = 6
// num = 4 -> 4 * 2 = 8
// num = 5 -> 5 * 2 = 10


const numbers1 = [1, 2, 3, 4, 5];

// Using filter to create a new array with only even numbers
const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
const numbers4 = [1, 2, 3, 4, 5];
const evens = numbers4.filter(num => num % 2 === 0); // [2, 4]
// Execution flow:
// num = 1 -> 1 % 2 !== 0 (false, not included)
// num = 2 -> 2 % 2 === 0 (true, included)
// num = 3 -> 3 % 2 !== 0 (false, not included)
// num = 4 -> 4 % 2 === 0 (true, included)
// num = 5 -> 5 % 2 !== 0 (false, not included)


const numbers2 = [1, 2, 3, 4, 5];

// Using reduce to sum all the numbers in the array
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
// Execution flow:
// accumulator = 0, currentValue = 1 -> accumulator = 0 + 1 = 1
// accumulator = 1, currentValue = 2 -> accumulator = 1 + 2 = 3
// accumulator = 3, currentValue = 3 -> accumulator = 3 + 3 = 6
// accumulator = 6, currentValue = 4 -> accumulator = 6 + 4 = 10
// accumulator = 10, currentValue = 5 -> accumulator = 10 + 5 = 15


const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfSquares = numbers3
  .filter(num => num % 2 === 0)     // Filter even numbers
  .map(num => num * num)            // Square each even number
  .reduce((acc, num) => acc + num); // Sum the squares

console.log(sumOfSquares); // Output: 220 (2^2 + 4^2 + 6^2 + 8^2 + 10^2)




  