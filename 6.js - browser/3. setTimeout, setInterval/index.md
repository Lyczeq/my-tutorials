# setTimeout

```javascript
setTimeout(<function to run>, <time in miliseconds>);

setTimeout(() => console.log('hello!'), 5000);

setTimeout(function() { console.log('whatsup')}), 5000);
```

# setInterval

```javascript
setInterval(() => console.log('tick'), 1000);
```

## That's cool, but how do I stop them?

```javascript
const intervalId = setInterval(() => console.log('tick'), 1000);

console.log(typeof intervalId); // Number

clearInterval(intervalId);
```

The same goes with `clearTimeout`.
