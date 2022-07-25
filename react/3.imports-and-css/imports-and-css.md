# Imports in Javascript

We usually create components in separate folders, so we should be able to export them and use them in different places.

Of course we can import/export functions, constants, not only Components.

There we have a simple component.

```jsx
function Component() {
  return <h1>hi</h1>;
}
```

We want export it and use it in different places. There are some ways to do it:

## Default export

```jsx
function Component() {
  return <h1>hi</h1>;
}

export default Component;
```

After component's declaration we export it using those two keywords:

`export default ComponentName`

What is important, we can have only one default export per file.

### Usage

```jsx
import MyComponentName from './Component.js';
// we can change the name of the component we import
function Hello() {
  return (
    <div>
      <MyComponentName />
    </div>
  );
}
```

## Named export

```jsx
export function Component() {
  return <h1>hi</h1>;
}

export function Component2() {
  return <h1>hello</h1>;
}
```

During component's declaration we use an `export` keyword. We can have multiple exports in a single file.

### Usage

```jsx
import { Component, Component2 as MyComponentName } from './Component.js';
// when we use a named export, the name stays the same when importing
// we can change it using `as` keyword
function Hello() {
  return (
    <div>
      <Component />
      <MyComponentName />
    </div>
  );
}
```

We can use a default and a named export in a single file but usually we don't do that.

## CSS

We learned how to structure HTML elements, how to interact with them but let's talk how to style them.

Firstly, CSS is not a part of React which we're talking today but I'll show you how to use it in this field.

### Box model

![](./assets/box-model.png)

- Blue color - content
- Green color - padding (think about it like a liner)
- Yellow color - border
- Brown color - margin

We usually use `box-model: border-box` property because it facilitates styling and setting size of elements.

### Let's write some CSS!

```css
p {
  color: red;
  font-size: 20px;
}
```

```css
div {
  background-color: grey;

  .my-class {
    color: blue;
  }
}
```

### How to use it with React components?

```jsx
import './MyComponent.css';

function MyComponent() {
  return (
    <div>
      <p>My first paragraph</p>
      <p className="my-class">My second paragraph</p>
    </div>
  );
}
```

### Basic features

- Margin

```css
div {
  margin: 20px, 10px, 50px, 10px;
}
```

- Padding

```css
div {
  padding: 20px, 10px, 50px, 10px;
}
```

- Background Color

```css
div {
  background-color: blue;
}
```

- Font size

```css
div {
  font-size: 20px;
}
```

Of course, there are many, many more which you can find in Google.

I highly recommend to read about `flex` and `grid`. These two features will help you how to position the elements.
