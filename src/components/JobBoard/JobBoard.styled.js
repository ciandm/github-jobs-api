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
  will-change: opacity, transform;

  ${({ hidden }) => hidden && css`
    animation-name: ${hideContainer};
    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  `}
`

export const JobBoard = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content;
  gap: 6.5rem 3rem;
  padding-top: 8rem;
  margin-bottom: 5.6rem;
  width: 100%;
`