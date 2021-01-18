import React, { useEffect, useState } from 'react'
import { useTheme } from '../../../theme/ThemeProvider'
import Input from '../../Input/Input';
import * as Styled from './JobFilterTablet.styled';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';

function JobFilterTablet({
  handleFormSubmit,
  formInputs,
  setFormInputs
}) {

  const {
    dark
  } = useTheme();

  const [display, setDisplay] = useState('desktop');

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

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setDisplay('tablet')
      } else {
        setDisplay('desktop');
      }
    })

    return () => window.removeEventListener("resize", resizeListener);
  }, [])

  return (
    <Styled.Form
      dark={dark}
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Styled.InputGroup
        input="title"
      >
        <Input
          dark={dark}
          name="description"
          placeholder={display === 'desktop' ? "Filter by title, companies, expertise..." : "Filter by title..."}
          icon="search"
          value={formInputs.description}
          handleInputChange={handleInputChange}
        />
      </Styled.InputGroup>
      <Styled.InputGroup
        input="location"
      >
        <Input
          dark={dark}
          name="location"
          placeholder="Filter by location..."
          icon="location"
          value={formInputs.location}
          handleInputChange={handleInputChange}
        />
      </Styled.InputGroup>
      <Styled.CheckboxGroup>
        <Checkbox
          dark={dark}
          label={display === 'desktop' ? 'Full Time Only' : 'Full Time'}
          name="fullTime"
          checked={formInputs.fullTime}
          handleCheckboxChange={handleCheckboxChange}
        />
      </Styled.CheckboxGroup>
      <Button
        label="Search"
        type="submit"
      />

    </Styled.Form>
  )
}

export default JobFilterTablet
