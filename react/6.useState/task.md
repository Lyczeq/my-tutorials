Run the following code and then refactor the following code to use 2 separate `useState`s - one for first name, second for last name.

```jsx
import { useState } from "react";

export default function App() {
  const [state, setState] = useState({
    firstName: "Lightning",
    lastName: "McQueen",
  });

  const handleFirstNameChange = (event) => {
    const changedFirstName = event.target.value;

    setState({
      firstName: changedFirstName,
      lastName: state.lastName,
    });
  };

  const handleLastNameChange = (event) => {
    const changedLastName = event.target.value;

    setState({
      firstName: state.firstName,
      lastName: changedLastName,
    });
  };

  return (
    <div>
      <input
        value={state.firstName}
        onChange={handleFirstNameChange}
        placeholder="Type First Name Here"
      />
      <input
        value={state.lastName}
        onChange={handleLastNameChange}
        placeholder="Type Last Name Here"
      />
      <p>
        Hi, I am {state.firstName} {state.lastName}!
      </p>
    </div>
  );
}
```
