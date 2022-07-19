# Selectors

## document.getElementById

## document.getElementsByClassName

## document.querySelector, document.querySelectorAll

### Matching by id - prepend your ID with '#'
```javascript
document.querySelector('#my-id');
```

```javascript
document.getElementById(id) <=> document.querySelector('#' + id)
```

### Matching by class - prepend class with '.'

```javascript
document.getElementsByClassName(className) <=> document.querySelectorAll('.' + className)
```

### Matching by attribute value

```html
<input />
<input type="text" />
<input />
```

```javascript
document.querySelector('input[type=text]')
```

Element type is not required, and you can specify multiple conditions.

```javascript
document.querySelectorAll("[type=number,id=my-id]"); // type AND id
```

```
document.querySelectorAll("[type=number], [id=my-id]"); // type OR id
```
