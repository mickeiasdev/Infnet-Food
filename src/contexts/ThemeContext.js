import React, { createContext, useState } from 'react';

const initialState = {
  light: {
    dark: false,
    colors: {
      background: '#fff',
      text: '#000',
    },
  },
  dark: {
    dark: true,
    colors: {
      background: '#000',
      text: '#fff',
    },
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.light);

  const toggleTheme = () => {
    setTheme(theme.dark ? initialState.light : initialState.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
