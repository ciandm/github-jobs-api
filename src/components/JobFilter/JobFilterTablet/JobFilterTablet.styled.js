import styled, { css } from 'styled-components';

export const Form = styled.form`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  border-radius: 6px;
  display: flex;
  width: 100%;
  overflow: hidden;

  & label {
    padding-left: 3.2rem;
    flex: 1;

    @media ${({ theme }) => theme.mediaQueries['below-768']} {
      padding-left: 2rem;
    }
  }

  & button {
    margin: 1.6rem 1.6rem 1.6rem 2.8rem;

     @media ${({ theme }) => theme.mediaQueries['below-768']} {
      padding: 1.6rem 1.4rem;
    }
  }
`

export const InputGroup = styled.div`
  display: flex;
  position: relative;

  &::after {
      content: '';
      display: block;
      background-color: ${({ theme }) => theme.colors.secondary['darkGrey']};
      width: 1px;
      height: 100%;
      opacity: .2;
      position: absolute;
      right: 0;
      top: 0;
    }

  ${({ input }) => {
    if (input === 'title') {
      return css`
        flex: 1.5;

        @media ${({ theme }) => theme.mediaQueries['below-768']} {
          flex: 1;
        }
      `
    }

    if (input === 'location') {
      return css`
        flex: 1;
      `
    }
  }}

  @media ${({ theme }) => theme.mediaQueries['below-768']} {

  }
`

export const CheckboxGroup = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
`