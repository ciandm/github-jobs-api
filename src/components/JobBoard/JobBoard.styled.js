import styled, { css, keyframes } from 'styled-components';
import {
  h3
} from '../../theme/typography'

const hideContainer = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  99% {
    height: 100%;
    opacity: 0;
    transform: translateY(100px);
    visibility: visible;
  }

  100% {
    height: 0;
    transform: translateY(0);
    visibility: hidden;
  }
`

export const JobBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ hidden }) => hidden && css`
    animation-name: ${hideContainer};
    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  `}

  @media ${({ theme }) => theme.mediaQueries['below-768']} {
    padding: 0 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['below-480']} {
    padding: 0 2.4rem;
  }
`

export const JobBoardError = styled(h3)`
  color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.secondary['veryDarkBlue']};
  margin: 4rem auto 0;
  max-width: 50%;
  text-align: center;
`