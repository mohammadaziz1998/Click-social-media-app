import styled from 'styled-components';

const StyledErrorParagraph = styled.p`
  color: red;
  position: relative;
  font-size: 1rem;
  /* margin-top: -10px; */
  margin-top: -1rem;
`;

function ErrorFormMessage({ children }) {
  return <StyledErrorParagraph>{children}</StyledErrorParagraph>;
}

export default ErrorFormMessage;
