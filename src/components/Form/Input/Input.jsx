import React from 'react';
import PropTypes from 'prop-types';
import iconChooser from '../../../utils/iconChooser';
import * as Styled from './Input.styled'

function Input({
  dark,
  name,
  icon,
  value,
  placeholder,
  handleInputChange
}) {

  return (
    <Styled.InputContainer
      dark={dark}
    >
      {
        icon && iconChooser(icon)
      }
      <Styled.Input
        dark={dark}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(name, e.target.value)}
      />
    </Styled.InputContainer>
  )
}

export default Input

Input.defaultProps = {
  icon: 'search',
  placeholder: "This is a placeholder"
}

Input.propTypes = {
  dark: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}
