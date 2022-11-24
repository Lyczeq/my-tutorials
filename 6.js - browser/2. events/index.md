# Events

Events happen when something specific happens on page - that could be user clicking an element or pressing a keyboard key. They need a source, which will (possibly) emit the event.

```javascript
// find source
const button = document.querySelector('button');

// pass event name and event handler
button.addEventListener('click', event => {
	// event object contains metadata about the event and source
	console.log(event);

	 // source
	console.log(event.target);
});
```

Other example:

```html
<input type="text" />
```

```javascript
const input = document.querySelector('input');

input.addEventListener('keydown', event => {
	console.log(event.keyCode, event.key); // key that was pressed
	console.log(event.target.value); // value BEFORE event
});
```

To remove event listener, use `removeEventListener` function - however remember that the event handler reference must be the same as the original, used in `addEventListener`.

```javascript

const handler = (e) => console.log(e);
source.addEventListener('keypress', handler);
source.removeEventListener('keypress', handler); // ok!


source.addEventListener('keypress', (e) => console.log(e));
source.removeEventListener('keypress', (e) => console.log(e)); // nope

```
