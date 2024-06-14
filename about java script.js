let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of integers from 1 to 100 is:", sum);

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log("Factorial of", n, "is:", factorial);

let number = 5;
for (let i = 1; i <= 5; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

let range = 50;
for (let i = 2; i <= range; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

let limit = 10;
for (let i = 1; i <= limit; i++) {
    console.log(`Square of ${i} is ${i * i}`);
}
