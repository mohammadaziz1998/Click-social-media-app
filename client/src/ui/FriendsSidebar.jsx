import styled from 'styled-components';
import UserNav from './UserNav';
import { useCurrentUser } from '../features/user/useCurrentUser';

const StyledFriendsSidebar = styled.aside`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 1rem;
`;
const StyledFriendsDiv = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 1000px) {
    span {
      display: none;
    }
  }
`;

function FriendsSidebar() {
  const { currentUser } = useCurrentUser();
  return (
    <StyledFriendsDiv>
      <StyledFriendsSidebar>
        {currentUser?.friends.length === 0 && <p>no friends</p>}
        {currentUser?.friends?.map((friend) => (
          <UserNav
            imgUrl={friend.photo}
            name={friend.name}
            sizes="medium"
            active={friend.active}
            key={friend._id}
          />
        ))}
      </StyledFriendsSidebar>
    </StyledFriendsDiv>
  );
}

export default FriendsSidebar;
