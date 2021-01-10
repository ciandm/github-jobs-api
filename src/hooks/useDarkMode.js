import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeLoaded: false,
  })

  useEffect(() => {
    // check if preference is stored in local storage
    let doesUserPreferDark = localStorage.getItem("dark") === 'true';
    // if not, check if they prefer dark mode
    if (!doesUserPreferDark) {
      doesUserPreferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches === true
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