function process(callback) {
    console.log("Processing started...");
    callback();
    console.log("Processing ended...");
}

function myCallback() {
    console.log("This is the callback function.");
}

process(myCallback);

setTimeout(function() {
    console.log("This message is displayed after 3 seconds.");
}, 3000);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

const person = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.greet(); // Output: Hello, my name is Alice.
