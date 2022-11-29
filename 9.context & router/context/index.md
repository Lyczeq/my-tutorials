# Context

1. What is it for? It is used to share data between a lot of components. We don't have to pass that data by using props which can be tedious in some moments.

## How to use it?

At first we need to create conext and pass (it's not always required) default value.

```js
const MyContext = createContext({
  state: 0,
  setState: state => {},
});
```

Then, we create a function component that needs to have `children`. As a return value we use our content with a Provider property. As a value attribute we specify an object that includes data we would like to share between components.

```js
export function MyContextProvider({ children }) {
  const [state, setState] = useState(0);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}
```

Lastly, it is a good practice to create a **custom hook** that uses the context. If we don't do that we would have to import useContext from React every time and the context. In that approach, you will have to import only the custom hook.

```js
export function useMyContext() {
  return useContext(MyContext);
}
```
