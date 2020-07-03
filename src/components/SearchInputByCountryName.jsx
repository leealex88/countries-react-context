import React, { useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";

const SearchInputByCountryName = () => {
  const { countries, setCountries, totalCountries } = useContext(
    CountriesContext
  );
  // useEffect(() => {
  //   fetchCountries();
  //   const searchTheName =
  //     searchInput &&
  //     countries.filter((country) =>
  //       country.name.toLowerCase().includes(searchInput.toLowerCase())
  //     );
  //   setCountries(searchTheName);
  // }, [searchInput]);
  const updateCountryDisplay = (input) => {
    const searchName = totalCountries.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
    setCountries(searchName);
  };

  return (
    <input
      className="search-input"
      placeholder="Search for a country"
      onChange={(e) => {
        updateCountryDisplay(e.target.value);
      }}
    ></input>
  );
};

export default SearchInputByCountryName;
