import styled from 'styled-components';
import { useCurrentUser } from '../features/user/useCurrentUser';
import UserNav from './UserNav';
import { IoMdMore } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useUserID } from '../context/UserIDContext';

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
  const { setId } = useUserID();
  return (
    <div>
      {currentUser?.friends.length === 0 && <p>no friends</p>}
      {currentUser?.friends?.map((friend) => (
        <FriendsNav onClick={() => setId(friend._id)} key={friend._id}>
          <NavLink to={friend.name}>
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
