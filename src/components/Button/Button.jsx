import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './Button.styled';
import { useTheme } from '../../theme/ThemeProvider'

const Button = ({
  label,
  handleButtonClick,
  ...restProps
}) => {

  const {
    dark
  } = useTheme();

  return (
    <Styled.Button
      onClick={handleButtonClick ? () => handleButtonClick() : null}
      dark={dark}
      {...restProps}
    >
      {label}
    </Styled.Button>
  )
}

export default Button

Button.defaultProps = {
  label: "Button",
  variation: "primary",
  renderAs: "button"
}

Button.propTypes = {
  variation: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  handleButtonClick: PropTypes.func,
  alignSelf: PropTypes.string,
  as: PropTypes.string,
}