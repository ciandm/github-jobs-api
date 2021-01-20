import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  border-radius: 6px;
  padding-right: 1.6rem;
  overflow: hidden;
  width: 100%;
`

export const InputGroup = styled.div`
display: flex;
`

export const Modal = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, .50);
  display: flex;
  height: 100%;
  left: 0;
  padding: 0 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  @media ${({ theme }) => theme.mediaQueries['below-480']} {
    padding: 0 2.4rem;
  }
`

export const ModalGroup = styled.div`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  z-index: 50;
`

export const InputContainer = styled.div`
  border-bottom: 1px solid hsla(212, 23%, 69%, .2);
`

export const CheckboxContainer = styled.div`
  padding: 2.4rem;

  & button {
    margin-top: 2.4rem;
    width: 100%;
  }
`