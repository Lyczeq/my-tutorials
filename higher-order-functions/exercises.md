1. Let's say we have the following array:

```js
const characters = [
  {
    name: 'Anakin Skywalker',
    type: 'Jedi',
  },
  {
    name: 'Darth Maul',
    type: 'Sith',
  },
  {
    name: 'Yoda',
    type: 'Jedi',
  },
  {
    name: 'Count Dooku',
    type: 'Sith',
  },
];
```

Using Higher Order Functions return an array with **Jedis** only.

2. 1. Let's say we have the following array:

```js
const numbers = [2, 5, 11, 6, 9, 3];
```

Using Higher Order Functions:

Return an array with the squared numbers and then find the first element that is greater than 35. Do not use unnecessary variables.

3. Using the Closure mechanism and the code below, create a function that takes another function used to filter the `characters` array.

```js
const init = () => {
  const characters = ['Yoda', 'Anakin', 'Mace Windu', 'Ahsoka'];

  return {
    ...
  };
};
```

We want to achieve something like this:

```js
const filterer = init();

const myCharacters = filterer.filter(--something--)
```

Then create two examples:

1. That filters the characters that starts with an 'A' / 'a' letter.
2. That filters the characters which length is greater than 5.
