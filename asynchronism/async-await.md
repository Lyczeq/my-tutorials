# Async await

The special syntax to work with Promises in a more convenient way.

Special `async` keyword used in the function declaration.

```js
async function func() {
  return 'hi';
}

console.log('hi');
// Promise {<pending>}
```

async function always return a Promise that needs to be handled.

so, we would use `then` as in the previous examples.

```js
const val = func().then(data => data);
console.log(val);
//hi
```

There's another cool keyword called `await`, but it must be used inside of the async function.

```js
async function func() {
  return 'hi';
}

const handleFunc = async () => {
  console.log(await func());
};
```

```js
async function delayed() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 3000);
  });

  let result = await promise; // wait until the promise resolves

  console.log(result);
}

delayed();
console.log('hello');

/* --the result--
  hello
  done!
*/
```

In this case we declare a `Promise` inside of the `delayed` function and then we need to resolve that. We specified it to wait 3 seconds but in this time we can do something different e.g. print a console log.

### Let's combine async/await with the fetch method

```js
const getStarWarsData = async () => {
  const response = await fetch('https://swapi.dev/api/people/1/');
  const starWarsData = await response.json();
  console.log(starWarsData);
};
getStarWarsData();
/*
{   ....
    hair_color: "blond"
    height: "172"
    homeworld: "https://swapi.dev/api/planets/1/"
    mass: "77"
    name: "Luke Skywalker"
    skin_color: "fair"
    ...
}
*/
```
