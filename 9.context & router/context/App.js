import React from "react";
import { useMyContext, MyContextProvider } from "./MyContext";

export default function App() {
  return (
    <MyContextProvider>
      <AComponentWhichWrites />
      <AComponentWhichReads />
    </MyContextProvider>
  );
}

function AComponentWhichWrites() {
  const { state, setState } = useMyContext();

  return <button onClick={() => setState(state + 1)}>Dodaj</button>;
}

function AComponentWhichReads() {
  const context = useMyContext();

  const { state } = context;

  return <p>Stan: {state}</p>;
}
