import React, { createContext, useContext } from 'react'
import GlobalStyle from '../GlobalStyle';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import constants from './constants';
import useDarkMode from '../hooks/useDarkMode';

const ThemeContext = createContext({
  dark: false,
  toggleTheme: () => { }
})

const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {

  const { themeState, setThemeState } = useDarkMode();

  const toggleTheme = () => {
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    setThemeState(prevState => ({
      ...prevState,
      dark
    }))
  }

  return (
    <StyledThemeProvider theme={constants}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggleTheme
        }}
      >
        <>
          <GlobalStyle
            dark={themeState.dark}
          />
          {children}
        </>
      </ThemeContext.Provider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider

export {
  useTheme
}