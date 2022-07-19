# Destructuring

This is the mechanism to "unpack" values from arrays or properties from objects into distinct values.

## Array destructuring

```js
const array = [2, 5];
const [first, second] = array;
console.log(first);
// 2
console.log(second);
// 5
```

## Object destructuring

```js
const person = {
  firstName: 'Anakin',
  lastName: 'Skywalker',
  profession: 'Jedi',
  wife: {
    firstName: 'Padme',
    lastName: 'Amidala',
    profession: 'Naboo Senator',
  },
};

const { firstName, wife, lastName: surname } = person;
console.log(firstName);
//Anakin
console.log(wife);
/*
wife: {
    firstName: 'Padme',
    lastName: 'Amidala',
    profession: 'Naboo Senator',
  },
*/
console.log(surname);
// Skywalker
```

We can use that in functions as well.

`Psst!` You wil see that veery often in React ;)

```js
//person declaration
function hello({ firstName }) {
  return `Hello ${firstName}`;
}
console.log(hello(person));
// Hello Anakin
```

## Spread operator

The spread operator `...` is used to expand or spread an iterable or an array.

Examples:

1.

```js
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2);
// [ 'one', 'two', 'three', 'four', 'five' ]
```

2.

```js
const arrValue = ['My', 'name', 'is', 'Jack'];
console.log(arrValue); // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack
```

3.

```js
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// add members obj1 and obj2  to obj3
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
// {x: 1, y: 2, z: 3}
```

4.

```js
const person = {
  firstName: 'Anakin',
  lastName: 'Skywalker',
  profession: 'Jedi',
  age: 22,
  wife: {
    firstName: 'Padme',
    lastName: 'Amidala',
    profession: 'Naboo Senator',
  },
};

const { firstName, ...rest } = person;
console.log(firstName);
// Anakin
console.log(rest);
/*
{
  lastName: 'Skywalker',
  profession: 'Jedi',
  age: 22,
  wife: {
    firstName: 'Padme',
    lastName: 'Amidala',
    profession: 'Naboo Senator'
  }
}
*/
```
