import { createContext, useState } from 'react';

export const themeConfig = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
  grey: {
    backgroundColor: 'darkgrey',
    color: 'white',
  },
};

const getThemeColor = ({ mode, type }) => {
  debugger;
  if (type === 'bgColor') {
    return themeConfig?.[mode]?.backgroundColor;
  }
  if (type === 'textColor') {
    return themeConfig?.[mode]?.color;
  }
};

// const getTheme = ({ mode }) => {};

export const ThemeContext = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
        getThemeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
