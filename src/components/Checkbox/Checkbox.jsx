import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './Checkbox.styled';
import iconCheck from '../../assets/icon-check.svg';

const Checkbox = ({
  name,
  label,
  checked,
  dark,
  handleCheckboxChange
}) => {
  return (
    <Styled.CheckboxContainer>
      <Styled.Label
        dark={dark}
        checked={checked}
      >
        <Styled.HiddenCheckbox
          id={name}
          name={name}
          checked={checked}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
        <Styled.StyledCheckbox
          dark={dark}
          checked={checked}
        >
          <Styled.Checkbox
            dark={dark}
            src={iconCheck}
            checked={checked}
          >
          </Styled.Checkbox>
        </Styled.StyledCheckbox>
        <span>{label}</span>
      </Styled.Label>
    </Styled.CheckboxContainer>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  dark: PropTypes.bool,
  handleCheckboxChange: PropTypes.func.isRequired,
}

export default Checkbox

