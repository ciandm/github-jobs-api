import styled, { css } from 'styled-components';

export const Button = styled.button`
  align-self: center;
  background-image: ${({ icon }) => `url(${icon})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2rem;
  border: none;
  border-radius: 5px;
  padding: 1.4rem;

  & svg {
    height: 20px;
    width: 20px;
  }

  & + & {
    margin-left: 1.2rem;
  }

  ${({ pathFillColor }) => pathFillColor && css`
    & svg path {
      fill: ${pathFillColor};
    }
  `}

  ${({ variation, dark }) => {
    if (variation === 'primary') {
      return css`
          background-color: ${({ theme }) => theme.colors.primary['violet']}
        `
    } else {
      if (dark) {
        return css`
          background-color: ${({ theme }) => theme.colors.primary['veryDarkBlue']};
        `
      } else {
        return css`
          background-color: ${({ theme }) => theme.colors.secondary['white']};
        `
      }
    }
  }}
`