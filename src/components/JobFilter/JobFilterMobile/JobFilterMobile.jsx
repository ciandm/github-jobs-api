import React, { useState } from 'react'
import { useTheme } from '../../../theme/ThemeProvider'
import Input from '../../Input/Input';
import * as Styled from './JobFilterMobile.styled';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';
import IconButton from '../../IconButton/IconButton';
import { ReactComponent as FilterIcon } from '../../../assets/mobile/icon-filter.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icon-search.svg';

function JobFilterMobile({
  handleFormSubmit,
  formInputs,
  handleInputChange,
  handleCheckboxChange
}) {

  const [isActive, setIsActive] = useState(false);
  const {
    dark
  } = useTheme();

  function handleModalOpen() {
    setIsActive(true);
  }

  function handleModalClose(e) {
    if (e.target.id === 'modal-overlay') setIsActive(false);
  }

  return (
    <Styled.Form
      dark={dark}
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Styled.InputGroup>
        <Input
          dark={dark}
          name="description"
          value={formInputs.description}
          placeholder="Filter by title..."
          handleInputChange={handleInputChange}
        />
        <IconButton
          icon={<FilterIcon />}
          variation="secondary"
          handleButtonClick={handleModalOpen}
          type="button"
        />
        <IconButton
          icon={<SearchIcon />}
          pathFillColor="#FFF"
          variation="primary"
          type="submit"
          handleButtonClick={handleFormSubmit}
        />
      </Styled.InputGroup>
      {
        isActive &&
        <Styled.Modal
          onClick={(e) => handleModalClose(e)}
          id="modal-overlay"
        >
          <Styled.ModalGroup
            dark={dark}
          >
            <Styled.InputContainer>
              <Input
                dark={dark}
                icon="location"
                name="location"
                value={formInputs.location}
                placeholder="Filter by location..."
                handleInputChange={handleInputChange}
              />
            </Styled.InputContainer>
            <Styled.CheckboxContainer>
              <Checkbox
                dark={dark}
                label="Full Time Only"
                handleCheckboxChange={handleCheckboxChange}
                checked={formInputs.fullTime}
                name="fullTime"
              />
              <Button
                label="Search"
              />
            </Styled.CheckboxContainer>
          </Styled.ModalGroup>
        </Styled.Modal>
      }
    </Styled.Form>
  )
}

export default JobFilterMobile
