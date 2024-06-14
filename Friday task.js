let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!"); // Successfully resolved the promise
  }, 1000);
});

myPromise.then((message) => {
  console.log(message); // "Success!"
}).catch((error) => {
  console.error(error);
});

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result); // "resolved"
}

asyncCall();

let obj = { name: "John", age: 30, city: "New York" };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30,"city":"New York"}'

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj); // { name: "John", age: 30, city: "New York" }

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


