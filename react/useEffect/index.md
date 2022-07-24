# useEffect

Next hook we're going to talk about is `useEffect`. It allows us to run some code when some of our state or props change. The basic structure is as follows:

```jsx
useEffect(() => {
    // code to run when some of the dependenceies change
}, [dependency1, dependency2...])
```

## Case 1: no dependency array

This is more or less the same as a running the code without `useEffect` - it will run on each render.

```jsx
useEffect(() => {
  console.lgo("Render!");
});
```

## Case 2: empty dependency array

This is getting interesting - it will run only once, when component is registered into React - **mounted**.

```jsx
useEffect(() => {
  console.lgo("Hello!");
}, []);
```

## Case 3: items in dependency array

The function inside will be called only if one of the dependencies changed.

```jsx
useEffect(() => {
  console.log(
    "So either `aValueFromProps` or `orValueFromUseState` has changed!"
  );
}, [aValueFromProps, orValueFromUseState]);
```

## Cleanup function

Sometimes we need to run a cleanup of a single render / state change - for example cancelling a network call or disposing of a managed resource. `useEffect` helps us with that - we can optionally return a function from it that will run when component either unmounts or `useEffect` will be run again.

```jsx
useEffect(() => {
  const intervalId = setInterval(() => console.log("ping", 1000));

  return () => {
    clearInterval(intervalId);
  };
}, [blabla]);
```
