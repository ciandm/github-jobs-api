import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme, dark }) => dark ?
    theme.colors.primary['midnight'] :
    theme.colors.secondary['lightGrey']};
    font-family: 'Kumbh Sans', sans - serif;
    min-height: 100vh;
  }
`

export default GlobalStyle;