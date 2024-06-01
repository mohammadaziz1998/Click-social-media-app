import styled from 'styled-components';
import UserNav from './UserNav';
import Heading from './Heading';
import { useCurrentUser } from '../features/user/useCurrentUser';

const StyledHeader = styled.header`
  /* background-color: var(--color-aqua--700); */
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0 1rem 0 1rem;
  /* border-bottom: 1px solid var(--color-border-aqua); */
  box-shadow: inset;

  img {
    border-radius: 50%;
    margin-left: 1rem;
    border: 1px solid var(--color-border-aqua);
  }
  input {
    max-width: 300px;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    height: 50px;
  }

  h2 {
    color: var(--color-dark-aqua);
    font-weight: 800;
  }
  button {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 600px) {
    height: auto;
  }
  @media (max-width: 650px) {
    input {
      display: none;
    }
  }
`;

function Header() {
  const { currentUser } = useCurrentUser();

  return (
    <StyledHeader>
      <Heading as="h2">Click</Heading>

      <input type="search" placeholder="search" />

      <UserNav
        imgUrl={`/users/${currentUser?.photo}`}
        // name={currentUser?.name}
        sizes="large"
      />
    </StyledHeader>
  );
}

export default Header;
