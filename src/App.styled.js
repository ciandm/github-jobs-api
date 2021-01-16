import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ hideJobBoard }) => hideJobBoard ? '' : '111rem'};
  margin: -4rem auto 0;
  padding-bottom: ${({ hideJobBoard }) => hideJobBoard ? '' : '108px'};
`

export default AppContainer;