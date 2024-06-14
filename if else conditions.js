// 1. Check if the number is odd or even
function isOddOrEven(num) {
    return num % 2 === 0 ? "even" : "odd";
}

// 2. Check if the number is positive, negative, or zero
function checkNumberSign(num) {
    if (num > 0) return "positive";
    else if (num < 0) return "negative";
    else return "zero";
}

// 3. Check the number of digits
function digitCount(num) {
    const absNum = Math.abs(num);
    if (absNum < 10) return "one-digit";
    else if (absNum < 100) return "two-digit";
    else if (absNum < 1000) return "three-digit";
    else return "more than three-digit";
}

// 4. Check if the number is the smallest 4-digit number
function isSmallestFourDigitNumber(num) {
    return num === 1000 ? "Yes" : "No";
}

// 5. Check the type of character
function checkCharacterType(char) {
    if (char >= 'A' && char <= 'Z') return "uppercase letter";
    else if (char >= 'a' && char <= 'z') return "lowercase letter";
    else if (char >= '0' && char <= '9') return "digit";
    else return "special character";
}

// 6. Check if the year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Yes";
    }
    return "No";
}

// 7. Check if the number is divisible by 5
function isDivisibleByFive(num) {
    return num % 5 === 0 ? "Yes" : "No";
}

// 8. Find the maximum of three numbers
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

// 9. Find the minimum of three numbers
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

// 10. Check if three numbers can form a triangle
function isValidTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return "Yes";
    }
    return "No";
}

// Example usage:
let number = 1234;
console.log(`The number ${number} is ${isOddOrEven(number)}`);
console.log(`The number ${number} is ${checkNumberSign(number)}`);
console.log(`The number ${number} is ${digitCount(number)}`);
console.log(`Is the number ${number} the smallest 4-digit number? ${isSmallestFourDigitNumber(number)}`);

let char = 'A';
console.log(`The character '${char}' is a ${checkCharacterType(char)}`);

let year = 2024;
console.log(`Is the year ${year} a leap year? ${isLeapYear(year)}`);

console.log(`Is the number ${number} divisible by 5? ${isDivisibleByFive(number)}`);

let a = 3, b = 4, c = 5;
console.log(`The maximum of (${a}, ${b}, ${c}) is ${findMax(a, b, c)}`);
console.log(`The minimum of (${a}, ${b}, ${c}) is ${findMin(a, b, c)}`);
console.log(`Can (${a}, ${b}, ${c}) form a triangle? ${isValidTriangle(a, b, c)}`);
