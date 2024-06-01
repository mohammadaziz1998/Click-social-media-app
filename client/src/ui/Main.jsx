import styled from 'styled-components';

const StyledMain = styled.main`
  scrollbar-gutter: stable both-edges;
  overflow: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

function Main({ children }) {
  return <StyledMain>{children} </StyledMain>;
}

export default Main;
