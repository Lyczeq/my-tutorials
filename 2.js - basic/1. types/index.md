# Built-in types

* `Number` - both *int*s and *float*s, e.g. 10, -3.14...
* `String` - no type for single character, so e.g. 'a', 'woah'. Declared with either \`\`, '' or "".
* `Boolean` - *true*, *false*
* `Function`
	* Declared with `function f(argA, argB) {...}` or `let f = (argA, argB) => {...}`
	* We can assign a function to variable
	```javascript
	let myFunction = function() {};

	myFunction();
	```
* `undefined`
* `Object` - similar to "map" - a set of pairs (key, value)
	```javascript
	let obj = {
		a: 2,
		str: 'bird',
		nested: { // of course nesting is supported
			nestedChild: true
		}
	}
	```
	We can access properties by path, so `obj.nested.nestedChild` resolves to *true*. There's another method of accessing object properties - via `[]`, so `obj['str']` is *bird*. Note the ''!

## undefined and null? Why?

`undefined` means the variable doesn't exists yet.

`null` means the variable *does* exists, but it has no value.


## Arrays
Represented with [], so:
```javascript
let arr = ['a', 'b', 'c'];
arr.push('d'); // ['a', 'b', 'c', 'd']
arr[2]; // 'c'
arr[100]; // undefined

let arr2 = [{}, true, null];

let len = arr.length; // 3


```