# Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

The Promise object takes a function of two other functions as the argument, we often call them resolve and reject.
`resolve` is used when the operation was completed succesfully and `reject` when there was a failure.

```js
const isTrue = true;
const promise = new Promise((resolve, reject) => {
  if (isTrue) {
    resolve('Everything is fine 😁'); //When a success, finish and return the passed value
  } else {
    reject('Not that fine 😥'); //When a failure, finish and return the passed value
  }
});
const testPromise = promise
  .then(data => console.log(data)) // then is used to go to the next step of the promise
  .catch(data => console.error(data)) // catch and finally are used like in the try...catch
  .finally(() => console.log('Finally!'));
console.log('I am first!');
```

The code above is asynchronous, so the console logs will be displayed as follows:

```js
I am first!
Everything is fine 😁! // or Not that fine 😥
Finally!
```

## Set Timeout

In this case we create a function with one argument `delay` that returns a `Promise`. The `Promise` itself takes a function with `resolve` argument and delays it with the given number of miliseconds.

```js
setTimeout(function, numberInMiliseconds);
```

```js
const awaitTimeout = delay =>
  new Promise(resolve => setTimeout(resolve, delay));

awaitTimeout(300).then(() => console.log('Hi'));
// Logs 'Hi' after 300ms
```
