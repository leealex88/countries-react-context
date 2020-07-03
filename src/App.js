import React from "react";
import "./App.css";
import "./grid.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CountriesContextProvider from "./contexts/CountriesContext";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import CountryBigCard from "./components/CountryBigCard";
import SearchInputByCountryName from "./components/SearchInputByCountryName";
import RegionSelect from "./components/RegionSelect ";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <CountriesContextProvider>
            <Navbar />
            <div className="container search-select-container">
              <SearchInputByCountryName />
              <RegionSelect />
            </div>
            <Switch>
              <Route exact path="/" component={Countries} />
              <Route
                exact
                path="/countries/:alpha3Code"
                component={CountryBigCard}
              />
            </Switch>
          </CountriesContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
