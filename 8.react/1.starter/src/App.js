import { useState } from "react";

export default function App() {
  return <Counter />;
}


function Counter() {
  const [count, setCount] = useState(0);
  // `useState` argument is the initial value
  // `count`    is the current value
  // `setCount` is the function to change the value

  const handleSomeEvent = () => {
    setCount(count + 1);
  };

  return <button onClick={handleSomeEvent}>{count}</button>;
}