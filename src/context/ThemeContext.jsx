import React, { createContext, useState } from "react";

export const DarkThemeContext = createContext();

const ThemeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export default ThemeContext;
