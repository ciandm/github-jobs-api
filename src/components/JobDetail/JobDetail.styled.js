import styled, { keyframes } from 'styled-components';
import {
  h1,
  h2,
  h3,
  h4,
  body
} from '../../theme/typography';
import footerBackground from '../../assets/desktop/bg-pattern-detail-footer.svg';
import backArrow from '../../assets/keyboard_backspace-24px.svg'

const slideContainerIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  animation-name: ${slideContainerIn};
  animation-fill-mode: backwards;
  animation-duration: 0.3s;
  animation-delay: 0.5s;
  animation-timing-function: ease-in;
  display: flex;
  flex-direction: column;
  max-width: 73rem;
  margin: 0 auto;
  width: 100%;
`

// Header Section

export const Header = styled.header`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  border-radius: 6px;
  display: flex;
  margin-bottom: 4.4rem;
  position: relative;
`

export const BackButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: #FFF;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  left: 0;
  outline: none;
  position: absolute;
  top: -3rem;

  &::before {
    background-image: url(${backArrow});
    background-size: contain;
    content: '';
    display: block;
    height: 2rem;
    margin-right: .4rem;
    transition: transform 0.2s ease-in-out;
    width: 2rem;
  }

  &:hover::before {
    transform: translateX(-4px);
  }
`

export const LogoContainer = styled.div`
  flex-shrink: 0;
  height: 14rem;
  padding: 2rem 0 2rem 2rem;
  width: 14rem;
`

export const Logo = styled.div`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%initial;
`

export const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 4rem;
`

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.4rem;
`

export const Company = styled(h2)`
  color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']};
  margin-bottom: 1.2rem;
`

export const Website = styled(body)`
  color: ${({ theme }) => theme.colors.secondary['darkGrey']};
`

// Main job section

export const Job = styled.main`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 48px;
`

export const JobHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.4rem;
`

export const JobDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.4rem;
`

export const Date = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;

  & span {
    background-color: ${({ theme }) => theme.colors.secondary['darkGrey']};
    border-radius: 4px;
    height: 4px;
    margin: 0 1.2rem;
    width: 4px;
  }
`

export const Age = styled(body)`
  color: ${({ theme }) => theme.colors.secondary['darkGrey']};
`

export const Type = styled(body)`
  color: ${({ theme }) => theme.colors.secondary['darkGrey']};
`

export const Role = styled(h1)`
  color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']};
  margin-bottom: 1.4rem;
`

export const Location = styled(h4)`
  color: ${({ theme }) => theme.colors.primary['violet']};
`

// Main body

export const Body = styled.div`
  color: ${({ dark, theme }) => dark ? theme.colors.secondary['grey'] : theme.colors.secondary['darkGrey']};
  display: flex;
  flex-direction: column;

    & p + p > strong,
    & ul + p > strong,
    & p:first-child > strong {
     color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']};
     font-size: 2rem;
    }

    & a {
      color: ${({ theme }) => theme.colors.primary['violet']};
    }

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']}
    }
`

export const MDHeading = styled(h3)`
  margin: 0 0 2.4rem;

  & + ul {
    margin-top: 0;
  }
`

export const MDParagraph = styled(body)`

  & + & {
    margin-top: 2.4rem;
  }

  & + ${MDHeading} {
    margin-top: 4.8rem;
  }
`

export const MDList = styled.ul`
  font-size: 1.6rem;
  line-height: 2.6rem;
  list-style: none;
  margin-top: 2.4rem;
  margin-bottom: 4.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const MDListItem = styled.li`
  position: relative;
  padding-left: 3.2rem;

  & + & {
    margin-top: 8px;
  }

  &::before {
    background-color: ${({ theme }) => theme.colors.primary['violet']};
    border-radius: 10px;
    content: '';
    display: block;
    height: 4px;
    left: 0;
    position: absolute;
    top: 10px;
    width: 4px;
  }
`

// Footer

export const Footer = styled.footer`
  background-image: url(${footerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.secondary['white']};
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  padding: 4rem 4.8rem;
  word-wrap: break-word;

  & a {
    color: ${({ theme }) => theme.colors.secondary['white']};
  }
`

export const FooterTitle = styled(h3)`
  color: ${({ theme }) => theme.colors.secondary['white']};
  margin-bottom: 2.8rem;
`

// Apply Banner

export const Banner = styled.div`
  background-color: ${({ dark, theme }) => dark ? theme.colors.primary['veryDarkBlue'] : theme.colors.secondary['white']};
  display: flex;
  justify-content: center;
  margin-top: 7.2rem;
  padding: 2.4rem 0;
`

export const BannerInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 73rem;
  width: 100%;
`

export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.4rem;
`

export const BannerTitle = styled(h3)`
  color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']};
  margin-bottom: 1.2rem;
`

export const BannerCompany = styled(body)`
  color: ${({ theme }) => theme.colors.secondary['darkGrey']};
`