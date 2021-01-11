import styled from 'styled-components';

export const JobBoard = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content;
  gap: 3rem 4rem;
  margin-top: 8rem;
  width: 100%;
`