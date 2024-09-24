import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';
const Base_Url = import.meta.env.VITE_API_URL;

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

function UserNotification({ children, photo, name, date }) {
  return (
    // <Link to="/friends/friendrequest">
    <StyledUserNotification>
      <img src={`${Base_Url}/images/profile/${photo}`} alt={`${name}`} />
      <StyledUserNotificationDiv>
        <StyledUserNotificationName>
          <strong>{name}</strong>
          <span>{formatDistanceToNow(date)}</span>
        </StyledUserNotificationName>
        <div>{children}</div>
      </StyledUserNotificationDiv>
    </StyledUserNotification>
    // </Link>
  );
}

export default UserNotification;
