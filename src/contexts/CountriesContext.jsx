import React, { useState, useEffect, createContext } from "react";

export const CountriesContext = createContext();

const CountriesContextProvider = (props) => {
  const [countries, setCountries] = useState();
  console.log(countries);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <CountriesContext.Provider value={{ countries }}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
