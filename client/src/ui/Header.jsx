import styled from 'styled-components';

import UserNav from './UserNav';

import Search from '../features/user/Search';

import Logo from './Logo';

import { GrNotification } from 'react-icons/gr';

import { IoIosSearch } from 'react-icons/io';

import Button from './Button';

import { useCurrentUser } from '../features/user/useCurrentUser';

import { NavLink } from 'react-router-dom';
import DarkModeToogle from './DarkModeToogle';
import Modal from './Modal';

const StyledHeader = styled.header`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: 0.5fr 2fr 2fr; */
  padding: 0 1rem 0 1rem;
  box-shadow: inset;

  @media (max-width: 600px) {
  }
`;

const HeaderNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  column-gap: 1rem;
  button {
    color: var(--color-green-05);
    margin-inline: 0.2rem;
  }
`;

function Header() {
  const { currentUser } = useCurrentUser();

  return (
    <StyledHeader>
      <Logo />

      <HeaderNav>
        <div>
          <Modal>
            <Modal.Open opens="search">
              <Button size="verySmall">
                <IoIosSearch />
              </Button>
            </Modal.Open>
            <Modal.Window name="search">
              <Search />
            </Modal.Window>
          </Modal>

          <DarkModeToogle />

          <Button size="verySmall">
            <GrNotification />
          </Button>
        </div>

        <div>
          <NavLink to="/account">
            <UserNav imgUrl={`${currentUser?.photo}`} sizes="large" />
          </NavLink>
        </div>
      </HeaderNav>
    </StyledHeader>
  );
}

export default Header;
