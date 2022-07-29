Below is a code iterating over some parts. Add _key_ property, so that it fits out model.

```jsx
function PartDisplay(props) {
  console.log(props); // by the way is the 'key' passed to props?

  const part = props.part;

  return (
    <li>
      This is <strong>{part.metadata.name}</strong>, there are {part.count} of
      them. It's spec is: <i>{JSON.stringify(part.spec)}</i>;
    </li>
  );
}

function PartsList() {
  const parts = [
    {
      count: 4,
      spec: {
        length: "200mm",
        widthLength: "20mm",
      },
      metadata: {
        name: "Aluminium profile",
        partId: "TJ$(W*BGHFE",
      },
    },
    {
      count: 50,
      spec: {
        length: "14mm",
        width: "6mm",
      },
      metadata: {
        name: "Countersunk bolt",
        partId: "32tiojuq39",
      },
    },
    {
      count: 2,
      spec: {
        length: "100mm",
        widthLength: "20mm",
      },
      metadata: {
        name: "Aluminium profile",
        partId: "*G&^(T$&*WI",
      },
    },
    {
      count: 3,
      spec: {
        length: "180mm",
      },
      metadata: {
        name: "Linear rail",
        partId: "9hg7VBRW*2",
      },
    },
  ];

  return (
    <ul>
      {parts.map((part) => (
        <PartDisplay key={
            // ???
        } part={part} />
      ))}
    </ul>
  );
}

export default function App() {
  return <PartsList />;
}
```
