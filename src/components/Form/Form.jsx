import React from 'react'
import { useTheme } from '../../theme/ThemeProvider';
import Input from '../Input/Input'

function Form() {

  const {
    dark
  } = useTheme();

  return (
    <div>
      <Input
        dark={dark}
      />
    </div>
  )
}

export default Form
