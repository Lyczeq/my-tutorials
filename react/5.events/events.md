# Events

React handles events so much better than it is in pure Javascript. The naming convention is very similar to the one in pure JS, we have to add an `on` prefix:

## Event types

- `click` -> `onClick`
- `change` -> `onChange`
- `mouseover` -> `onMouseOver`

etc...

## Usage

```jsx
const HelloComponent = ({ name }) => {
  const handleButtonClick = () => {
    console.log(`Hello ${name}`);
  };

  return <button onClick={handleButtonClick}>Click me!</button>;
};
```

```jsx
<HelloComponent name="Palpatine" />
// after clicking a button, we get a "Hello Palpatine" log in the console
```

Of course, we can also use anonymous functions:

```jsx
const HelloComponent = ({ name }) => {
  return <button onClick={() => alert(`Hello ${name}`)}>Click me!</button>;
};
```

But why not like that?

```jsx
...
onClick={alert(`Hello ${name}`)}
...
```

Because this function will be called when component is mounted. What is more, onClick takes function as an argument, not value which in this case is `void`.
We had similar approach in pure JS, so it shouldn't shock you 🤓.
