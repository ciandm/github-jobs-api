import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ hideJobBoard }) => hideJobBoard ? '' : '111rem'};
  margin: -4rem auto 0;
  padding-bottom: ${({ hideJobBoard }) => hideJobBoard ? '' : '108px'};

  @media ${({ theme }) => theme.mediaQueries['below-480']} {
    margin-top: -1.6rem;
  }
`

export default AppContainer;