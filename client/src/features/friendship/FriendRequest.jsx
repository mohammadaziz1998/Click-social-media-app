import styled from 'styled-components';

import Button from '../../ui/Button';
import UserNotification from '../../ui/UserNotification';
import { useFriendRequestAnswer } from './useFriendRequestAnswer';
import { useGetFriendRequest } from './useGetFriendRequests';
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
  const { friendRequest, isLoading } = useGetFriendRequest();
  const { friendRequestAnswer, isPending } = useFriendRequestAnswer();
  console.log(friendRequest);

  function handleFriendRequestAnswer(e, id) {
    console.log(e.target.value, id);
    friendRequestAnswer({ answer: e.target.value, id });
  }
  return (
    <StyledFriendRequest>
      {friendRequest?.length === 0
        ? 'You have no friend request'
        : friendRequest?.map((request) => (
            <StyledFriendRequestNav key={request._id}>
              <UserNotification
                photo={request?.fromUser?.photo}
                name={request?.fromUser?.name}
                date={request?.date}
              >
                <StyledFriendRequestButtons>
                  <Button
                    value="accept"
                    size="small"
                    onClick={(e) =>
                      handleFriendRequestAnswer(e, request.fromUser._id)
                    }
                    disabled={isPending}
                  >
                    Accept
                  </Button>
                  <Button
                    value="decline"
                    size="small"
                    onClick={(e) =>
                      handleFriendRequestAnswer(e, request.fromUser._id)
                    }
                    disabled={isPending}
                  >
                    Decline
                  </Button>
                </StyledFriendRequestButtons>
              </UserNotification>
            </StyledFriendRequestNav>
          ))}
    </StyledFriendRequest>
  );
}

export default FriendRequest;
