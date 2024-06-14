function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

const greet2 = (name) => {
    console.log("Hello, " + name + "!");
};

greet2("Charlie"); // Output: Hello, Charlie!

const greet3 = (name) => {
    console.log("Hello, " + name + "!");
};

greet3("Bob"); // Output: Hello, Charlie!

document.getElementById("changeTextBtn").addEventListener("click", function() {
    const myDiv = document.getElementById("myDiv");
    myDiv.innerHTML = "Text has been changed!";
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("changeTextBtn").addEventListener("click", function() {
        const myDiv = document.getElementById("myDiv");
        myDiv.innerHTML = "Text has been changed!";
    });
});

const str = "Hello, World!";
console.log(str.length); // Output: 13

const str2 = "Hello, World!";
console.log(str2.toUpperCase()); // Output: HELLO, WORLD!
console.log(str2.toLowerCase()); // Output: hello, world!

const str3 = "Hello, World!";
console.log(str3.toUpperCase()); // Output: HELLO, WORLD!
console.log(str3.toLowerCase()); // Output: hello, world!

const str4 = "Hello, World!";
console.log(str4.charAt(0)); // Output: H

const str5 = "Hello, World!";
console.log(str5.indexOf("World")); // Output: 7

const str6 = "Hello, World!";
console.log(str6.substring(0, 5)); // Output: Hello

const str7 = "Hello, World!";
const arr = str7.split(", ");
console.log(arr); // Output: ["Hello", "World!"]

const str8 = "Hello, World!";
const newStr = str8.replace("World", "JavaScript");
console.log(newStr); // Output: Hello, JavaScript!










