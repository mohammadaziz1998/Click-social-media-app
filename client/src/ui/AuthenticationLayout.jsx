import styled from 'styled-components';

const AuthenticationLayout = styled.div`
  background-color: var(--color-green-00);
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  max-width: 40rem;
  border-radius: 4px;
  /* gap: 2rem; */
  h2 {
    text-align: center;

    margin: 0 auto;
  }
  a {
    text-align: center;
    margin: 0 1rem;
  }
`;

export default AuthenticationLayout;
