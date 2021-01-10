import React from 'react';
import iconChooser from '../../utils/iconChooser';
import * as Styled from './Input.styled'

function Input({
  dark,
  icon
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
        placeholder="Enter something.."
      />
    </Styled.InputContainer>
  )
}

export default Input

Input.defaultProps = {
  icon: 'search'
}
