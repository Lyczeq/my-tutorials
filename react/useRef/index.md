# useRef

Third of the arguably the most popular hooks of React - `useRef`. The use case we'll outline here deals with accessing the HTML elements explicilty.

```jsx
...
return <input id="my-id" />  // how can I get it in my component code?
...
```

Let's note that `querySelector`s will fail:

```jsx
const MyComponent = () => {
  const myInput = querySelector("#my-id"); // null! This input may not be rendered yet...

  if (myInput) {
    // that kind of works, but only after the second render!
  }

  return <input id="my-id" />;
};
```

Here comes `useRef` - it allows us to bind the element to a variable, so we can use it.

```jsx
import { useRef, useEffect } from "react";

export default function App() {
  return <MyComponent />;
}
const MyComponent = () => {
  const myInput = useRef();

  useEffect(() => {
    console.log(myInput.current); // bingo!
    console.log("is it valid?", myInput.current.validity.valid);
  }, [myInput]);

  return <input ref={myInput} id="my-id" />;
};
```

This will allow use to access browser APIs unavailable to React by default.

Of course, there are other usecases for `useEffect`, but let's focus on that one.
