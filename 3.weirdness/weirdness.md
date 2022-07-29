# Weirdness

So why a lot of people hate Javascript but don't understand it.

## Comparison operators

```js
const a = 5;
const b = '5';
const c = 5;

console.log(a == b); //true
console.log(a == c); //true
console.log(a === b); //false
console.log(a === c); //true
```

You will mostly use the `===` operator.

## You can add number to string

```js
const a = 5;
const b = '5';
console.log(a + b);
console.log(b + a);
// 55 and it's a string in both cases
```

## Falsy values

```js
const falsyValues = [null, 0, false, undefined, NaN, ''];
for (const fv of falsyValues) {
  console.log(`${fv} is`, fv ? 'truly' : 'falsy');
}
/*
null is falsy
0 is falsy
false is falsy
undefined is falsy
NaN is falsy
 is falsy //there is an empty string ;)
*/
```

## Does this value exist or not? That's the question...

### Examples

1.

```js
const a = null;
const b = a || 'not-null';
console.log(b);
```

2.

```js
const a = 'I exist!';
const b = a && '...but I am the chosen one!';
console.log(b);
```

3.

```js
const func = argument => {
  return argument || 'second-option';
};

console.log(func(null));
// 'second-option'
console.log(func('first-option'));
// 'first-option'
```

```js
const person = {
  name: 'Yoda',
  age: 900,
};

const lightsaberColour = person.lightsaber.color;
//we get an error
// "Cannot read properties of undefined (reading 'color')"
console.log(lightsaberColour);

const lightsaberColour2 = person.lightsaber?.color;
console.log(lightsaberColour2);
// no error but we get undefined

const lightsaberColour3 = person.lightsaber?.color || 'green';
console.log(lightsaberColour3);
// green
```
