import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.div`
  align-items: center;
  display: flex;
`

export const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  align-items: center;
  border-radius: 3px;
  border: none;
  background-color: ${({ dark }) => dark ?
    'hsla(0, 0%, 100%, 0.1)' :
    'hsla(219, 29%, 14%, 0.1)'
  };
  cursor: pointer;
  display: flex;
  flex-grow: 0;
  height: 24px;
  justify-content: center;
  outline: none;
  width: 24px;

  ${({ checked }) => {
    if (checked) {
      return css`
        background-color: ${({ theme }) => theme.colors.primary['violet']};

      `
    }
  }}
`

export const Checkbox = styled.img`
  display: ${({ checked }) => checked ? 'block' : 'none'};
  height: auto;
  width: 12px;
`

export const Label = styled.label`
  align-items: center;
  color: ${({ dark, theme }) => dark ?
    theme.colors.secondary['white'] :
    theme.colors.primary['veryDarkBlue']};
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  width: 100%initial;

  &:hover ${StyledCheckbox} {
    ${({ checked }) => {
    if (!checked) {
      return css`
          background-color: hsla(239, 69%, 61%, 0.25);
        `
    }
  }}
  }

  & span {
    margin-left: 1.6rem;
  }
`