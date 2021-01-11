import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './Button.styled';
import { useTheme } from '../../theme/ThemeProvider'

const Button = ({
  variation,
  label,
  type,
  handleButtonClick
}) => {

  const {
    dark
  } = useTheme();

  return (
    <Styled.Button
      variation={variation}
      dark={dark}
      type={type}
    >
      {label}
    </Styled.Button>
  )
}

export default Button

Button.defaultProps = {
  label: "Button",
  variation: "primary",
}

Button.propTypes = {
  variation: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
  handleButtonClick: PropTypes.func,
}