Detect all the errors in this piece of code:

```javascript
function showType(value) {
	switch(typeof value) {
		case 'number':
			console.log('is "number"');
			break;
		case 'string':
			console.log('is "string"');
			break;
		case 'array':
			console.log('is "array"');
			break;
		case 'object':
			console.log('is "object"');
			break;
		case 'bool':
			console.log('is "bool"');
			break;
		case 'null':
		case 'undefined':
			console.log('is not defined yet :(');
			break;
		default:
			console.log('is something different, dunno');
			break;
	}
}
```