import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  border-radius: 5px;
  overflow: hidden;
  padding: 2.8rem 3.2rem;

  & svg {
    height: 24px;
    fill: ${({ theme }) => theme.colors.primary['violet']};
    margin-right: 16px;
    width: 24px;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']};
  font-size: 1.6rem;
  outline: none;

  &::placeholder {
    color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']};
    opacity: .5;
  }
`