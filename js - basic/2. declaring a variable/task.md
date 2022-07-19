What will be the output of the following code?

```
const a = 2;

if (true) {
    const a = 3;
    console.log('in if', a);
}

function f() {
    const a = 4;
    console.log('in function', a);
}
f();

console.log('finally', a)
```


```
let a = 2;

if (true) {
    let a = 3;
    console.log('in if', a);
}

function f() {
    a += 1;
    console.log('in function', a);
}
f();
f();

console.log('finally', a)
```