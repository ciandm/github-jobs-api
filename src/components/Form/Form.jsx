import React, { useState } from 'react'
import { useTheme } from '../../theme/ThemeProvider';
import Input from '../Input/Input'
import * as Styled from './Form.styled';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

function Form() {

  const {
    dark
  } = useTheme();

  const [formInputs, setFormInputs] = useState({
    jobSpec: '',
    location: '',
    fullTime: false
  })

  function handleInputChange(input, value) {
    setFormInputs(prevInput => ({
      ...prevInput,
      [input]: value
    }))
  }

  function handleCheckboxChange(checked) {
    setFormInputs(prevInput => ({
      ...prevInput,
      fullTime: checked
    }))
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const { jobSpec, location, fullTime } = formInputs;
    if (jobSpec === '' && location === '' && !fullTime) return;
    console.log('form submitted');
  }

  return (
    <Styled.Form
      dark={dark}
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Input
        dark={dark}
        name="jobSpec"
        placeholder="Filter by title, companies, expertise..."
        icon="search"
        value={formInputs.jobSpec}
        handleInputChange={handleInputChange}
      />
      <Input
        dark={dark}
        name="location"
        placeholder="Filter by location..."
        icon="location"
        value={formInputs.location}
        handleInputChange={handleInputChange}
      />
      <Checkbox
        dark={dark}
        label="Full Time Only"
        name="fullTime"
        checked={formInputs.fullTime}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Button
        label="Search"
        type="submit"
      />
    </Styled.Form>
  )
}

export default Form
