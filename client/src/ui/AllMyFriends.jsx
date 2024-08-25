import styled from 'styled-components';
import { useCurrentUser } from '../features/user/useCurrentUser';
import UserNav from './UserNav';
import { IoMdMore } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

const StyledAllMyFriend = styled.div`
  margin-inline: auto;
  max-width: 40rem;
`;

const StyledAllFriendsNav = styled.div`
  margin: 1rem;
  border-radius: 10px;
  background-color: var(--color-green-00);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.7rem;
`;

function AllMyFriends() {
  const { currentUser } = useCurrentUser();

  return (
    <StyledAllMyFriend>
      {currentUser?.friends.length === 0 && (
        <Link to="/search">
          <p>Make new friends</p>
        </Link>
      )}
      {currentUser?.friends?.map((friend) => (
        <StyledAllFriendsNav key={friend._id}>
          <NavLink to={friend._id}>
            <UserNav
              imgUrl={`${friend.photo}`}
              sizes="large"
              name={friend.name}
            />
          </NavLink>
          <IoMdMore />
        </StyledAllFriendsNav>
      ))}
    </StyledAllMyFriend>
  );
}

export default AllMyFriends;
