import React from 'react'
import { useTheme } from '../../theme/ThemeProvider';
import * as Styled from './IconButton.styled';

function IconButton({
  handleButtonClick,
  icon,
  type,
  ...restProps
}) {

  const {
    dark
  } = useTheme();


  return (
    <Styled.Button
      dark={dark}
      onClick={(e) => handleButtonClick(e)}
      {...restProps}
      type={type}
    >
      {icon}
    </Styled.Button>
  )
}

export default IconButton
