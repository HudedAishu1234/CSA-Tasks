//Reverse an array:
function reverseArray(arr) {
    return arr.slice().reverse();
}

let arr1 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr1)); // [5, 4, 3, 2, 1]

//Check if an element is present in an array:
function isElementInArray(arr, element) {
    return arr.includes(element);
}

let arr2 = [1, 2, 3, 4, 5];
console.log(isElementInArray(arr2, 3)); // true
console.log(isElementInArray(arr2, 6)); // false

//Return the index of an element in an array:
function findIndexInArray(arr, element) {
    return arr.indexOf(element);
}

let arr3 = [1, 2, 3, 4, 5];
console.log(findIndexInArray(arr3, 3)); // 2
console.log(findIndexInArray(arr3, 6)); // -1

//Remove the second element and insert two new elements:
function modifyArray(arr, newElement1, newElement2) {
    let newArr = arr.slice();
    newArr.splice(1, 1, newElement1, newElement2);
    return newArr;
}

let arr4 = [1, 2, 3, 4, 5];
console.log(modifyArray(arr4, 'a', 'b')); // [1, 'a', 'b', 3, 4, 5]

//Return the first three elements of an array:
function firstThreeElements(arr) {
    return arr.slice(0, 3);
}

let arr5 = [1, 2, 3, 4, 5];
console.log(firstThreeElements(arr5)); // [1, 2, 3]

//Concatenate two arrays:
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let arr6_1 = [1, 2];
let arr6_2 = [3, 4];
console.log(concatenateArrays(arr6_1, arr6_2)); // [1, 2, 3, 4]

//Sort an array of strings alphabetically:
function sortArrayAlphabetically(arr) {
    return arr.slice().sort();
}

let arr7 = ['banana', 'apple', 'cherry'];
console.log(sortArrayAlphabetically(arr7)); // ['apple', 'banana', 'cherry']

//Double each number in an array:
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

let arr8 = [1, 2, 3];
console.log(doubleNumbers(arr8)); // [2, 4, 6]

//Return only the even numbers from an array:
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

let arr9 = [1, 2, 3, 4];
console.log(filterEvenNumbers(arr9)); // [2, 4]

//Return the sum and multiplication of all numbers in an array:
function sumAndMultiply(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let multiplication = arr.reduce((acc, num) => acc * num, 1);
    return { sum: sum, multiplication: multiplication };
}

let arr10 = [1, 2, 3, 4];
console.log(sumAndMultiply(arr10)); // { sum: 10, multiplication: 24 }



