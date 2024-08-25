import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

const StyledUserNotification = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 0.1rem;
  gap: 0.8rem;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;
const StyledUserNotificationName = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: clamp(14px, 1vw, 24px);
`;
const StyledUserNotificationDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

function UserNotification({ children, request }) {
  return (
    <StyledUserNotification>
      <img
        src={`/images/profile/${request?.notificationFrom?.photo}`}
        alt={`${request?.notificationFrom?.name}`}
      />
      <StyledUserNotificationDiv>
        <StyledUserNotificationName>
          <strong>{request?.notificationFrom?.name}</strong>
          <span>{formatDistanceToNow(request.date)}</span>
        </StyledUserNotificationName>
        <div>{children}</div>
      </StyledUserNotificationDiv>
    </StyledUserNotification>
  );
}

export default UserNotification;
