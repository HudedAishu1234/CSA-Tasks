//call Method:
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = {
  name: 'Alice'
};

greet.call(person, 'Hello', '!'); // Output: Hello, Alice!

//apply Method:
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person2 = {
  name: 'Bob'
};

greet.apply(person2, ['Hi', '...']); // Output: Hi, Bob...

//bind Method:
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person3 = {
  name: 'Carol'
};

const boundGreet = greet.bind(person3, 'Hey');
boundGreet('!!!'); // Output: Hey, Carol!!!

