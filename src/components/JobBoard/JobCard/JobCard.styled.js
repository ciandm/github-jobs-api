import styled, { css } from 'styled-components';
import {
  h3,
  h4,
  body
} from '../../../theme/typography';

export const Card = styled.div`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  grid-column: span 4;
  overflow: initial;
  padding: 4.8rem 3.2rem 3.2rem 3.2rem;
  position: relative;

  &:hover > h3 {
    color: ${({ theme }) => theme.colors.secondary['darkGrey']};
  }
`

export const Logo = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary['violet']};
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  height: 5rem;
  position: absolute;
  top: calc(0% - 25px);
  width: 5rem;

  ${({ loading }) => loading && css`
    background-color: ${({ theme }) => theme.colors.secondary['lightGrey']};

    & img {
      display: none;
    }
  `}
  

  & img {
    height: 36px;
    width: 36px;
    object-fit: contain;
  }
`

export const Header = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary['darkGrey']};
  display: flex;
  margin-bottom: 1.6rem;

  & span {
    background-color: ${({ theme }) => theme.colors.secondary['darkGrey']};
    border-radius: 4px;
    height: 4px;
    margin: 0 1.2rem;
    width: 4px;
  }
`

export const HeaderItem = styled(body)`
  color: inherit;
`

export const Title = styled(h3)`
  color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']};
  margin-bottom: 1.6rem;
`

export const Company = styled(body)`
  color: ${({ theme }) => theme.colors.secondary['darkGrey']};
  margin-bottom: 24px;
`

export const Location = styled(h4)`
  color: ${({ theme }) => theme.colors.primary['violet']};
  margin-top: auto;
`