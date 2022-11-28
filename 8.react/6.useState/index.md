# React hooks

So, what actually are the mighty hooks? They are little builtin functions that allow us to **✨✨perform stuff✨✨**.

## useState

Since now everything was stateless - we couldn't store any data in our React components. Notice that:
	1) The changes to our variables aren't shown in resulting page. 
	2) With each render our value will be overwritten.

```jsx
export default function App() {
  return <MyComponent />;
}

function MyComponent() {
  console.log("Component render");

  // this runs on every render, assigning the same value!
  let myVariable = 2.713;

  const handleClick = () => {
    console.log("CLICK!!", myVariable);
    // will it be shown on page?
    myVariable += 2;
  };

  return <button onClick={handleClick}>{myVariable}</button>;
}
```

React doesn't know that `myVariable` has changed. What should we do? Here comes shiny `useState` hook.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // `useState` argument is the initial value
  // `count`    is the current value
  // `setCount` is the function to change the value

  const handleSomeEvent = () => {
    setCount(count + 1);
  };

  return <button onClick={handleSomeEvent}>{count}</button>;
}
```

There you go.
