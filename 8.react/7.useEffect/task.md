Add `useState`s to log to console:
- On component mount
- On each render
- When `name` changes
- When `age` changes - When either `name` or `age` changes.

```jsx
import { useState, useEffect } from "react";

function MyComponent() {
  const [name, setName] = useState("Zdzisiek");
  const [age, setAge] = useState(54);

  // add hooks here...

  return (
    <div>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age
        <input
          value={age}
          type="number"
          min="0"
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
      </label>
    </div>
  );
}
```
