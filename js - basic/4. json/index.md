# JSON in JS

JSON is a format widely used to exchange data, but how do we use it in JS?

## From JSON to JS - parsing
```
const str = '{"a": 2}'; // quotes are required

JSON.parse(str); // {a: 2} // notice no quotes
```

Every JSON object is a valid JS object - but not vice versa.

## From JS to JSON - stringify

```
const obj = {prop: -3};

JSON.stringify(obj); // {"prop": -3}
```

However, not all JS values have their counterparts in JSON:

```
const obj = {
	a: function() {},
	b: undefined,
}

JSON.stringify(obj); // {}, some data is lost!
```

## So objects only?

Of course not - `JSON.parse(2)` will happily return the number 2, just like `JSON.parse(['u', 'n', 'o')` will parse the array succesfully.