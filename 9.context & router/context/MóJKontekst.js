import React, { createContext, useContext, useState } from "react";

const MójKontekst = createContext({});

const KLUCZ = "moja-apka.wartosc";

// provider
export function MójKontekstProvider({ children }) {
  const [stan, setStan] = useState(localStorage.getItem(KLUCZ) || 0);

  const setStanZZapisem = (stan) => {
    localStorage.setItem(KLUCZ, stan);
    setStan(stan);
  };

  return (
    <MójKontekst.Provider value={{ stan, setStan: setStanZZapisem }}>
      {children}
    </MójKontekst.Provider>
  );
}

export function useMójKontekst() {
  return useContext(MójKontekst);
}
