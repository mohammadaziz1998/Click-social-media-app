import styled from 'styled-components';

const StyledLogo = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-green-05);
  font-weight: 800;
`;

function Logo() {
  return <StyledLogo>Click</StyledLogo>;
}

export default Logo;
