//Understanding Promises in JavaScript:
let promise = new Promise((resolve, reject) => {
    let success = true; // Simulating success or failure
    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

//Understanding Callback Hell:
function firstFunction(callback) {
    setTimeout(() => {
        console.log("First Function");
        callback();
    }, 1000);
}

function secondFunction(callback) {
    setTimeout(() => {
        console.log("Second Function");
        callback();
    }, 1000);
}

function thirdFunction(callback) {
    setTimeout(() => {
        console.log("Third Function");
        callback();
    }, 1000);
}

firstFunction(() => {
    secondFunction(() => {
        thirdFunction(() => {
            console.log("All functions completed");
        });
    });
});

//Using Promises Instead of Callbacks:
function firstFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First Function");
            resolve();
        }, 1000);
    });
}

function secondFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second Function");
            resolve();
        }, 1000);
    });
}

function thirdFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third Function");
            resolve();
        }, 1000);
    });
}

firstFunction()
    .then(() => secondFunction())
    .then(() => thirdFunction())
    .then(() => {
        console.log("All functions completed");
    });
