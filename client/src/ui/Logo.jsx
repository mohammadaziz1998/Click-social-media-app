import styled from 'styled-components';

const StyledLogo = styled.h2`
  font-size: 2rem;
  color: var(--color-green-05);
  font-weight: 800;
  margin: 0;
`;

function Logo() {
  return <StyledLogo>Click</StyledLogo>;
}

export default Logo;
