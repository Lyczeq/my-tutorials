# Higher Order Function (HOF)

It's a function that takes a function as an argument and/or returns a function.

Examples:

1. Let's say we want to have a function that checks if a given number is even.
   Then we have a function `filterArray` that takes a function and an array as the arguments and returns a filtered array.

```js
const isEven = number => number % 2 === 0;

const filterArray = (filterFunction, array) => {
  const resultArray = [];
  for (const element of array) {
    if (filterFunction(element)) resultArray.push(element);
  }

  return resultArray;
};

const myArray = [2, 5, 11, 4];

const filteredArray = filterArray(isEven, myArray);

console.log(filteredArray); // [2,4]
```

2. So, as we've known, the function can return another function that we can call later. The example below shows: 
  - `greeter` is a function that returns a function
  - `helloFunction` is a function returned from the `greeter` function. We passed `Hello` as a greet argument.
  - Then we call `helloFunction` and pass `Baby Yoda` as a `name` argument

```js
const greeter = (greet) => (name) => console.log(`${greet} ${name}`!);

const helloFunction = greeter('Hello');

helloFunction('Baby Yoda');

```

## Array methods

There are many array methods that you will surely use.

```js
const numbers = [2, 4, 0, 9];
const numbers2 = numbers.map((number, index, array) => number + 1);

console.log(numbers2);
// [3, 5, 1, 10]
```

And some other examples:

- `filter` The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

- `find` The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```js
const array = [5, 12, 8, 130, 44];

const found = array.find(element => element > 10);

console.log(found);
// expected output: 12
```

etc.
