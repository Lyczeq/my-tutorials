In JS, we have 3 methods of declaring a variable:

# var

Just don't use it.

# let

Use to declare a variable which can change.

```javascript
let x = 2;

x = 'blobyay';
```

# Declaring a variable

# const

Use to declare a constant value.

```javascript
const pi = 3.14;

pi = 3.2; // error!
```

Or...?

```javascript
const obj = { a: 2 };

obj.a = 3; // sure, why not?
```

# A little bit of philosophy

While in other languages the variable has a type...

```java
String str = "pokemon.com"; // str is of type String
```

In JS the _value_ has a type, variable just points to it.

```javascript
let str = 'pokemon.com'; // "pokemon.com" is of type String, str has the same type as it's value
```
