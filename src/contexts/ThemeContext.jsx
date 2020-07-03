import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const [light, setLight] = useState({
    text: "hsl(200, 15%, 8%)",
    background: "hsl(0, 0%, 98%)",
    elements: "hsl(0, 0%, 100%)",
  });
  const [dark, setDark] = useState({
    text: "hsl(0, 0%, 100%)",
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
  });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
