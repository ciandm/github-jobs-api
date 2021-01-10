import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './Button.styled';
import { useTheme } from '../../theme/ThemeProvider'

const Button = ({
  variation,
  label,
  handleButtonClick
}) => {

  const {
    dark
  } = useTheme();

  return (
    <Styled.Button
      variation={variation}
      dark={dark}
      onClick={() => handleButtonClick()}
    >
      {label}
    </Styled.Button>
  )
}

export default Button

Button.defaultProps = {
  label: "Button",
  variation: "primary",
  handleButtonClick: () => console.log('clicked')
}

Button.propTypes = {
  variation: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
}