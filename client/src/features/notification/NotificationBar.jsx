import styled from 'styled-components';
import { useNotification } from './useNotification';
import SpinnerMini from '../../ui/SpinnerMini';
import UserNotification from '../../ui/UserNotification';

const StyledNotificationdiv = styled.div`
  position: absolute;
  top: 70px;
  right: 130px;
  width: min(70%, 430px);
  height: 600px;
  background-color: var(--color-green-00);
  z-index: 4;
  border-radius: 4px;
`;

const StyledNotification = styled.div`
  font-size: clamp(15px, 1.5vw, 22px);
  padding: 1rem 0;
  border-bottom: 2px solid var(--color-green-00);
  box-shadow: 1px 1px 1px 1px var(--color-green-100);
  background-color: ${(props) =>
    props.read ? 'var(--color-green-00)' : 'var(--color-green-00-noti)'};
`;

function NotificationBar() {
  const { notifications, isLoading } = useNotification();
  return (
    <StyledNotificationdiv>
      {isLoading ? (
        <SpinnerMini />
      ) : (
        notifications?.map((notifi) => (
          <StyledNotification read={notifi.read} key={notifi._id}>
            <UserNotification
              photo={notifi?.notificationFrom?.photo}
              name={notifi?.notificationFrom?.name}
              date={notifi?.date}
            >
              {notifi?.text}
            </UserNotification>
          </StyledNotification>
        ))
      )}
    </StyledNotificationdiv>
  );
}

export default NotificationBar;
