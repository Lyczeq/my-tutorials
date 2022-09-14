import React from "react";
import { useMójKontekst, MójKontekstProvider } from "./MójKontekst";

export default function App() {
  return (
    <MójKontekstProvider>
      <JakieśMójKomponentCoPisze />
      <JakieśMójKomponentCoCzyta />
    </MójKontekstProvider>
  );
}

function JakieśMójKomponentCoPisze() {
  const { stan, setStan } = useMójKontekst();

  return <button onClick={() => setStan(stan + 1)}>Dodaj</button>;
}

function JakieśMójKomponentCoCzyta() {
  const context = useMójKontekst();

  const { stan } = context;

  return <p>Stan: {stan}</p>;
}
