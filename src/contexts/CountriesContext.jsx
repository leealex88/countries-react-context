import React, { useState, useEffect, createContext } from "react";

export const CountriesContext = createContext();

const CountriesContextProvider = (props) => {
  const [countries, setCountries] = useState();
  const [totalCountries, setTotalCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setTotalCountries(data);
        setCountries(data);
      });
  }, []);

  return (
    <CountriesContext.Provider
      value={{ countries, setCountries, totalCountries }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
