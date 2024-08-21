import styled from 'styled-components';

import UserNav from './UserNav';

import Logo from './Logo';

import { IoIosNotificationsOutline } from 'react-icons/io';

import { CiSearch } from 'react-icons/ci';

import Button from './Button';

import { useCurrentUser } from '../features/user/useCurrentUser';

import { Link, NavLink } from 'react-router-dom';
import DarkModeToogle from './DarkModeToogle';
import NotificationBar from '../features/notification/NotificationBar';
import { useState } from 'react';

const StyledHeader = styled.header`
  position: relative;
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
  const [notification, setNotification] = useState(false);
  return (
    <StyledHeader>
      <Logo />

      <HeaderNav>
        <div>
          <Link to="search">
            <Button size="verySmall">
              <CiSearch />
            </Button>
          </Link>

          <DarkModeToogle />

          <Button
            onClick={() => setNotification(!notification)}
            size="verySmall"
          >
            <IoIosNotificationsOutline />
          </Button>
        </div>
        {notification && <NotificationBar />}
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
