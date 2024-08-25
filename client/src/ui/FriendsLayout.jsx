import styled from 'styled-components';

import { Link, NavLink, Outlet } from 'react-router-dom';

const StyledFriendLayout = styled.div``;

const StyledFriendLayoutNav = styled.div`
  padding: 0.3rem;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding-inline: 1rem;
    margin-inline: clamp(0.2rem, 1vw, 2rem);
    border-radius: 4px;
    background-color: var(--color-green-05);
    color: var(--color-text);
  }
`;

function FriendsLayout() {
  return (
    <StyledFriendLayout>
      <StyledFriendLayoutNav>
        <NavLink to="allfriends">All Friends</NavLink>
        <NavLink to="friendrequest">Friend Request</NavLink>
      </StyledFriendLayoutNav>
      <div>
        <Outlet />
      </div>
    </StyledFriendLayout>
  );
}

export default FriendsLayout;
