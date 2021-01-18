import styled, { css, keyframes } from 'styled-components';

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
    /* animation-name: ${hideContainer};
    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out; */
  `}

  @media ${({ theme }) => theme.mediaQueries['below-768']} {
    padding: 0 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['below-480']} {
    padding: 0 2.4rem;
  }
`

export const JobList = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 6.5rem 3rem;
  padding-top: 8rem;
  margin-bottom: 5.6rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries['below-768']} {
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    gap: 6.5rem 1.2rem;
    padding-top: 7rem;
  }

  @media ${({ theme }) => theme.mediaQueries['below-480']} {
    grid-template-columns: 1fr;
    gap: 5rem 0;
    padding-top: 7rem;
  }
`