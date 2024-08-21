import styled from 'styled-components';

const StyledMain = styled.main`
  scrollbar-gutter: stable both-edges;
  overflow: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  /* padding-inline: 5rem;
  @media (max-width: 600px) {
    padding-inline: 0;
  } */
`;

function Main({ children }) {
  return <StyledMain>{children} </StyledMain>;
}

export default Main;
