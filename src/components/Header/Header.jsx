import React from 'react'
import * as Styled from './Header.styled'
import logo from '../../assets/logo.svg'
import iconSun from '../../assets/icon-sun.svg';
import iconMoon from '../../assets/icon-moon.svg';
import { useTheme } from '../../theme/ThemeProvider';

function Header() {

  const {
    dark,
    toggleTheme
  } = useTheme();

  return (
    <Styled.Header>
      <Styled.HeaderContents>
        <Styled.Logo
          src={logo}
          alt="Devjobs logo"
        />
        <Styled.ToggleContainer>
          <Styled.ToggleIcon
            src={iconSun}
            alt="Light mode icon"
          />
          <Styled.Toggle
            dark={dark}
            onClick={() => toggleTheme()}
          />
          <Styled.ToggleIcon
            src={iconMoon}
            alt="Dark mode icon"
          />
        </Styled.ToggleContainer>
      </Styled.HeaderContents>
    </Styled.Header>
  )
}

export default Header
