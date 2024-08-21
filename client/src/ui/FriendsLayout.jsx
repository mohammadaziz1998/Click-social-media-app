import styled from 'styled-components';
import { useCurrentUser } from '../features/user/useCurrentUser';
import UserNav from './UserNav';
import { IoMdMore } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const FriendsNav = styled.div`
  margin: 1rem;
  border-radius: 10px;
  background-color: var(--color-green-00);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.7rem;
`;
function FriendsLayout() {
  const { currentUser } = useCurrentUser();

  return (
    <div>
      {currentUser?.friends.length === 0 && <p>no friends</p>}
      {currentUser?.friends?.map((friend) => (
        <FriendsNav key={friend._id}>
          <NavLink to={friend._id}>
            <UserNav
              imgUrl={`${friend.photo}`}
              sizes="large"
              name={friend.name}
            />
          </NavLink>
          <IoMdMore />
        </FriendsNav>
      ))}
    </div>
  );
}

export default FriendsLayout;
