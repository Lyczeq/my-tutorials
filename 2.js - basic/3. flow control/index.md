# Loops

1. `while`, `do..while`

```javascript
while(condition) {
	...
}

do {
	...
} while(condition);
```

2. `for` with index:

```javascript
for (let i = 0; i < 5; i++) {
	console.log(i);
}
```

3. `for..of` - similar to `foreach`:

```javascript
for (const element of ['good', 'bad', 'ugly']) {
	console.log(element);
}
```

4. `for..in` - loops over keys. This gets interesting, as it works both on arrays and objects.

```javascript
const obj = {a: 2, b: 3};
for (const key of obj) {
	console.log(obj);
}
// a
// b

const arr = ['jacek', 'placek', 'agatka'];
for (const index of arr) {
	console.log(index);
}
// 0
// 1
// 2
```

The stuff like `break` & `continue` works in all of those loops.

# Conditionals

1. `if`
```javascript
if (a) {
	...
} else if (b) {
	...
} else {
	...
}
```

2. `switch`

```javascript
switch(value) {
	case 'a':
		...
		break;
	case 'b':
		...
		break;
	default:
		...
		break;
}
```

# Exceptions

Nothing fancy here - our familiar trio of `try..catch..finally`.

```javascript
try {
	throw Error('BANG');
} catch(e) {
	console.log(e);
} finally {
	console.log('yeah, finally')
}
```
