import React, { useEffect, useState } from 'react'
import JobFilterTablet from './JobFilterTablet/JobFilterTablet';
import JobFilterMobile from './JobFilterMobile/JobFilterMobile';

function JobFilter({
  handleFormSubmit,
  formInputs,
  setFormInputs
}) {

  const [isTablet, setIsTablet] = useState(window.innerWidth > 600);
  const updateMedia = () => setIsTablet(window.innerWidth > 600);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  })

  function handleInputChange(input, value) {
    setFormInputs(prevInput => ({
      ...prevInput,
      [input]: value,
      isPristine: false
    }))
  }

  function handleCheckboxChange(checked) {
    setFormInputs(prevInput => ({
      ...prevInput,
      fullTime: checked,
      isPristine: false
    }))
  }

  return (
    <>
      { isTablet ?
        (<JobFilterTablet
          handleFormSubmit={handleFormSubmit}
          formInputs={formInputs}
          handleCheckboxChange={handleCheckboxChange}
          handleInputChange={handleInputChange}
        />) :
        (<JobFilterMobile
          handleFormSubmit={handleFormSubmit}
          formInputs={formInputs}
          handleCheckboxChange={handleCheckboxChange}
          handleInputChange={handleInputChange}
        />)}
    </>
  )
}

export default JobFilter
