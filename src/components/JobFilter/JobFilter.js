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

  return (
    <>
      { isTablet ?
        (<JobFilterTablet
          handleFormSubmit={handleFormSubmit}
          formInputs={formInputs}
          setFormInputs={setFormInputs}
        />) :
        (<JobFilterMobile
          handleFormSubmit={handleFormSubmit}
          formInputs={formInputs}
          setFormInputs={setFormInputs}
        />)}
    </>
  )
}

export default JobFilter
