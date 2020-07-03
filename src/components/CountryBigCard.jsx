import React, { Fragment, useState, useContext, useEffect } from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { ThemeContext } from "../contexts/ThemeContext";

const CountryBigCard = (props) => {
  // const { isLightTheme, light, dark } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;
  let { countries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);
  const [countryCode, setCountryCode] = useState(props.match.params.alpha3Code);
  console.log("countryCode", countryCode);
  const [singleCountry, setSingleCountry] = useState();

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then((res) => res.json())
      .then((data) => setSingleCountry(data));
  }, [countryCode]);
  console.log("contextCountries", countries);

  // const convertToTheCountryName = (borderCode) => {
  //   return countries.find((country) => country.alpha3Code === borderCode);
  // };

  return singleCountry ? (
    <Fragment>
      <div
        className="main-big-card-div"
        style={{ background: theme.background, color: theme.text }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 lg-col-6">
              <img
                src={singleCountry.flag}
                alt=""
                className="big-card-flag-image"
              />
            </div>

            <div className="col-12 lg-col-6 row">
              <div className="card-info-container col-12 lg-col-6">
                <p className="country-name">
                  <b>{singleCountry.name}</b>
                </p>
                <p>
                  <b>Native Name:</b> {singleCountry.nativeName}
                </p>
                <p>
                  <b>Population:</b> {singleCountry.population.toLocaleString()}
                </p>
                <p>
                  <b>Region:</b> {singleCountry.region}
                </p>
                <p>
                  <b>Seb Region:</b> {singleCountry.subregion}
                </p>
                <p>
                  <b>Capital:</b> {singleCountry.capital}
                </p>
              </div>
              <div className="card-info-container col-12 lg-col-6">
                <p>
                  <b>Top Level Domain:</b> {singleCountry.topLevelDomain}
                </p>
                <p>
                  <b>Currencies:</b> {singleCountry.currencies[0].name}
                </p>
                <div className="languages-names">
                  <p>Languages: </p>{" "}
                  {singleCountry.languages.map((country, index) => (
                    <p key={index}>{" " + country.name} </p>
                  ))}
                </div>
              </div>
              <div className="col-12 lg-col-12">
                <b>Border Countries:</b>{" "}
                {singleCountry.borders.map((code, index) => (
                  <button onClick={() => setCountryCode(code)} key={index}>
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : null;
};

export default CountryBigCard;
