import styled from 'styled-components';
import { useNotification } from './useNotification';
import SpinnerMini from '../../ui/SpinnerMini';

const StyledNotificationdiv = styled.div`
  position: absolute;
  top: 70px;
  right: 130px;
  width: min(70%, 430px);
  height: 600px;
  background-color: var(--color-green-05);
  z-index: 4;
  border-radius: 4px;
`;

function NotificationBar() {
  const { notification, isLoading } = useNotification();
  console.log('notification', notification);
  return (
    <StyledNotificationdiv>
      {isLoading ? (
        <SpinnerMini />
      ) : (
        notification?.notifications?.map((notifi) => (
          <div key={notifi._id}>{notifi.text}</div>
        ))
      )}
    </StyledNotificationdiv>
  );
}

export default NotificationBar;
