import styled from 'styled-components';

const StyledErrorParagraph = styled.p`
  color: red;
  position: relative;
  font-size: 1rem;
  margin: 0;
`;

function ErrorFormMessage({ children }) {
  return <StyledErrorParagraph>{children}</StyledErrorParagraph>;
}

export default ErrorFormMessage;
