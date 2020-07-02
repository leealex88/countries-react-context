import React from "react";
import "./App.css";
import "./grid.css";
import CountriesContextProvider from "./contexts/CountriesContext";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
function App() {
  return (
    <>
      <ThemeContextProvider>
        <CountriesContextProvider>
          <Navbar />
          <Countries />
        </CountriesContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
