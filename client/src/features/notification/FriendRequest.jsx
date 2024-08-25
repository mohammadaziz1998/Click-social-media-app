import styled from 'styled-components';
import { useNotification } from './useNotification';

import Button from '../../ui/Button';
import UserNotification from '../../ui/UserNotification';
const StyledFriendRequest = styled.div`
  margin-inline: auto;
  max-width: 40rem;
`;

const StyledFriendRequestNav = styled.div`
  margin: 1rem;
  border-radius: 4px;
  background-color: var(--color-green-00);
  padding-inline: 0.7rem;
`;
const StyledFriendRequestButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0 0 1rem;
`;
function FriendRequest() {
  const { notifications } = useNotification();

  const friendRequest = notifications?.notifications?.filter((notification) =>
    notification.text.includes('request')
  );
  console.log(friendRequest);
  return (
    <StyledFriendRequest>
      {friendRequest?.map((request) => (
        <StyledFriendRequestNav key={request._id}>
          <UserNotification request={request}>
            <StyledFriendRequestButtons>
              <Button size="small">Accept</Button>
              <Button size="small">Decline</Button>
            </StyledFriendRequestButtons>
          </UserNotification>
        </StyledFriendRequestNav>
      ))}
    </StyledFriendRequest>
  );
}

export default FriendRequest;
