import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  display: flex;
  margin-top: -4rem;
  width: 100%;

  & > div:first-child {
    flex-basis: 41.5%;
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
  }

  & > div:nth-child(2) {
    flex-basis: 27%;
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
  }

  & label {
    padding-left: 3.2rem;
    flex: 1;
  }

  & button {
    grid-column: 12 / 13;
    margin: 1.6rem 1.6rem 1.6rem auto;
  }
`