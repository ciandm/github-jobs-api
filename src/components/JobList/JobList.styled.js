import styled from 'styled-components';
import {
  h3
} from '../../theme/typography'

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

export const EmptyJobs = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 0;
  width: 100%;
`

export const EmptyTitle = styled(h3)`
  color: ${({ dark, theme }) => dark ? theme.colors.secondary['white'] : theme.colors.primary['veryDarkBlue']};
  margin-top: 3rem;
`

export const EmptyImage = styled.img`
  object-fit: cover;
  max-width: 50%;

  @media ${({ theme }) => theme.mediaQueries['below-768']} {
    max-width: 70%;
  }

  @media ${({ theme }) => theme.mediaQueries['below-480']} {
    max-width: 100%;
  }
`