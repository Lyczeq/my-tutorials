# Built-in types

* `Number` - both *int*s and *float*s, e.g. 10, -3.14...
* `String` - no type for single character, so e.g. 'a', 'woah'. Declared with either \`\`, '' or "".
* `Object` - similar to "map" - a set of pairs (key, value)
```javascript
{
	a: 2,
	str: 'bird',
	obj: { // of course nesting is supported
		diki: true
	}
}
```
* `Boolean` - *true*, *false*
* `Function`
	* Declared with `function f(argA, argB) {...}` or `let f = (argA, argB) => {...}`
	* We can assign a function to variable
	```javascript
	let myFunction = function() {};

	myFunction();
	```
* `undefined`


## Arrays
Represented with [], so:
```javascript
let arr = ['a', 'b', 'c'];

let arr = [{}, true, null];
```