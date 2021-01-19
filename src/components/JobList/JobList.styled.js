import styled from 'styled-components';

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