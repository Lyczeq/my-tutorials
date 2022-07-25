# useEffect

Next hook we're going to talk about is `useEffect`. It allows us to run some code when some of our state or props change. The basic structure is as follows:

```jsx
useEffect(() => {
    // code to run when some of the dependencies change
}, [dependency1, dependency2...]); // array of dependencies
```

We gotta go over some cases:

## Case 1: no dependency array

This is more or less the same as a running the code without `useEffect` - it will run on each render.

```jsx
useEffect(() => {
  console.log("Render!");
});
```

Is there a use case for that? Of course, but it's pretty advanced one. To be honest, I never used that.

## Case 2: empty dependency array

This is getting interesting - it will run only once, when component is mounted.

```jsx
useEffect(() => {
  console.log("Hello!");
}, []);
```

This is great for fetching data from server or running things that should run just one.

## Case 3: items in dependency array

The function inside will be called only if one of the dependencies changed.

```jsx
useEffect(() => {
  console.log(
    "So either `aValueFromProps` or `orValueFromUseState` has changed!"
  );
}, [aValueFromProps, orValueFromUseState]);
```

Useful when we need to perform some side **EFFECTS** when something changes - but then and only then.

Note that React uses reference to check if an object has changed, so:

```jsx
const myObj = {
  prop1,
  state1,
};

useEffect(() => {
  console.log("State changed I guess");
}, [myObj]);
```

will run on each render, as `myObj` is recreated anew each time! Better to use `[myObj.prop1, myObj.state1]`. Will `[JSON.stringify(myObj)]` be a good option?

## Cleanup function

Sometimes we need to run a cleanup of a single render / state change - for example cancelling a network call or disposing of a managed resource. `useEffect` helps us with that - we can optionally return a function from it that will run when component either unmounts or `useEffect` will be run again.

```jsx
useEffect(() => {
  const intervalId = setInterval(() => console.log("ping", 1000));

  return () => {
    clearInterval(intervalId);
  };
}, [...]);
```
