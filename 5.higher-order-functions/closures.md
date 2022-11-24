# Closure

Mechanism that allows a function to access its scope even if the function is called outisde of it.

```javascript
const init = () => {
  let counter = 0; // we don't give access to this variable outside
  let counter2 = 0; // the increment function doesn't have access to this variable, because it's not used there
  return {
    increment() {
      counter++;
      return counter;
    },
  };
};

const calculator = init();
calculator.increment(); // 1
calculator.increment(); // 2
```

If you have Object Oriented Programming background you will easily understand it. Closure mechanism is similar to encapsulation.
