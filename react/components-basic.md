# Components basic

The simplest way to define a component is to write a JavaScript function.

```jsx
function Component() {
  return <h1>hi</h1>;
}
```

## How does usage look like?

To use a Component, we use similar syntax to the one that HTML uses.

```javascript
<Component></Component>
```

Which is basically equivalent to the the function call.

```javascript
Component();
```

## Attributes

```jsx
function Component() {
  return <h1 id="hello-id">hi</h1>;
}
```

but what about the `class` attribute? Javascript also have classes, so we have a name conflict. We use `className` instead.

```jsx
function Component() {
  return <h1 className="my-class">hi</h1>;
}
```

## Props

Like in normal functions, we can pass arguments to the components but we do it a little bit different. EVERY component by default gets an argument called `props` which is an object. So we can reference to it's properties.

```jsx
function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}
```

```jsx
<Hello name="Anakin"></Hello>
```

### Props destructuring

```jsx
function Hello({ name }) {
  return <h1>Hello {name}</h1>;
}
```

The usage stays the same:

```jsx
<Hello name="Anakin"></Hello>
```

We use props destructuring very often because it helps us to know what properties were passed. What is more, we don't have to reference to the `props` properties every time like in the first example.

## Children

- What?! I don't want to be a parent yet 😨.
- Don't worry, it's different kind of `children`.

I told you that we use components like that:

```javascript
<Component></Component>
```

So what prevents us from writing inside the component?

```javascript
<Component>
  <p>Hello there!</p>
  <p>General Kenobi!</p>
</Component>
```

How does it work in practice?

```js
function Component({ children }) {
  return (
    <div>
      <h1>
        The following dialog is one of the most famous in the Star Wars universe
      </h1>
      {children}
    </div>
  );
}
```
