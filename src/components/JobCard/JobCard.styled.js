import styled from 'styled-components';
import {
  h3,
  h4,
  body
} from '../../theme/typography';

export const Card = styled.div`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  grid-column: span 4;
  padding: 4.8rem 3.2rem 3.2rem 3.2rem;
  position: relative;
`

export const Logo = styled.div`
  background-color: cornflowerblue;
  border-radius: 1.5rem;
  height: 5rem;
  position: absolute;
  top: calc(0% - 25px);
  width: 5rem;
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
`