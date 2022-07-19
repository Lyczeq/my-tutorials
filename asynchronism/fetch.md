# Fetch method

`Fetch` method provides an easy, logical way to fetch resources asynchronously across the network.

```js
const response = fetch('http://example.com/movies');
console.log(response);
// Promise {<pending>}
```

Let's try a call to a real API e.g. [free Star Wars one](https://swapi.dev/).

```js
const response = fetch('https://swapi.dev/api/people/1/');
const starWarsData = response
  .then(response => response.json())
  .then(data => console.log(data));
console.log(starWarsData);
/*
{   ....
    hair_color: "blond"
    height: "172"
    homeworld: "https://swapi.dev/api/planets/1/"
    mass: "77"
    name: "Luke Skywalker"
    skin_color: "fair"
    ...
}
*/
```

Now, we can fetch data from an external API 😎.
