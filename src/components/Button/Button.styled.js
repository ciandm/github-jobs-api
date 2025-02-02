import styled, { css } from 'styled-components';

export const Button = styled.button.attrs(({ type, href, target }) => ({
  type,
  href,
  target
}))`
  align-self: ${({ alignSelf }) => alignSelf ? alignSelf : ''};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 1.6rem;
  font-weight: 700;
  outline: none;
  padding: 1.6rem 3.6rem;
  text-align: center;
  text-decoration: none;

  @media ${({ theme }) => theme.mediaQueries['below-480']} {
    align-self: initial;
  }

  ${({ variation, dark }) => {
    // main button, consistent across light and dark mode
    if (variation === 'primary') {
      return css`
        background-color: ${({ theme }) => theme.colors.primary['violet']};
        color: ${({ theme }) => theme.colors.secondary['white']};

        &:hover {
          background-color: ${({ theme }) => theme.colors.primary['lightViolet']};
        }
      `
    }

    if (variation === 'secondary') {
      // secondary button different based on light/dark mode
      if (!dark) {
        return css`
        background-color: hsla(235, 69%, 61%, .1);
        color: ${({ theme }) => theme.colors.primary['violet']};

        &:hover {
          background-color: hsla(235, 69%, 61%, .35);
        }
      `
      } else {
        return css`
          background-color: hsla(0, 0%, 100%, 0.1);
          color: #FFF;

          &:hover {
            background-color: hsla(0, 0%, 100%, 0.35);
          }
        `
      }
    }
  }}
`