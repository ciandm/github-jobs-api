import styled from 'styled-components';
import bgHeader from '../../assets/desktop/bg-pattern-header.svg';

export const Header = styled.div`
  background-image: url(${bgHeader});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 4.6rem 0 9.6rem;
  width: 100%;
`

export const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 111rem;
  width: 100%;

`

export const Logo = styled.img`
  max-height: 3.2rem;
`

export const ToggleContainer = styled.div`
  align-items: center;
  display: flex;
`

export const ToggleIcon = styled.img`
  height: 2.4rem;
  width: 2.4rem;
`

export const Toggle = styled.button`
  align-items: center;
  background-color: #FFF;
  border-radius: 1.2rem;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 0 1.6rem;
  outline: none;
  padding: .5rem;
  position: relative;
  width: 4.8rem;

  &::before {
    background-color: ${({ theme }) => theme.colors.primary['violet']};
    border-radius: 12px;
    content: '';
    display: block;
    height: 1.4rem;
    width: 1.4rem;
    transform: ${({ dark }) => dark ? 'translateX(24px)' : 'translateX(0)'};
    transition: transform 0.25s ease-in;
  }

  &:hover::before {
      background-color: ${({ theme }) => theme.colors.primary['lightViolet']};
    }
`