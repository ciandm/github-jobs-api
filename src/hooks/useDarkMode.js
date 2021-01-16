import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeLoaded: false,
  })

  useEffect(() => {
    // check if preference is stored in local storage
    let preferenceInLS = localStorage.getItem("dark");
    let doesUserPreferDark;

    // if it is stored in LS, check if it's set 
    if (preferenceInLS) {
      doesUserPreferDark = localStorage.getItem("dark") === 'true';
    } else {
      // if it's not set to dark in LS i.e. a new user, check their media preferences
      doesUserPreferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches === true;
    }

    setThemeState({
      dark: doesUserPreferDark,
      hasThemeLoaded: true
    })
  }, [])

  return {
    themeState,
    setThemeState
  }
}

export default useDarkMode;