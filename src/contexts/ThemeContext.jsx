import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const themeData = [
  {
    index: 0,
    text: "hsl(200, 15%, 8%)",
    background: "hsl(0, 0%, 98%)",
    elements: "hsl(0, 0%, 100%)",
  },
  {
    index: 1,
    text: "hsl(0, 0%, 100%)",
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
  },
];

const ThemeContextProvider = (props) => {
  // const [isLightTheme, setIsLightTheme] = useState(true);

  // const [light, setLight] = useState({
  //   text: "hsl(200, 15%, 8%)",
  //   background: "hsl(0, 0%, 98%)",
  //   elements: "hsl(0, 0%, 100%)",
  // });
  // const [dark, setDark] = useState({
  //   text: "hsl(0, 0%, 100%)",
  //   background: "hsl(207, 26%, 17%)",
  //   elements: "hsl(209, 23%, 22%)",
  // });

  // Bruno's version
  const [theme, setTheme] = useState(themeData[0]);
  const toggleTheme = () => {
    let index = theme.index;
    index < themeData.length - 1 ? index++ : (index = 0);
    setTheme(themeData[index]);
  };
  return (
    // <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
