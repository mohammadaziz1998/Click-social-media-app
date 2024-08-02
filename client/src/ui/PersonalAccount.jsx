import { useCurrentUser } from '../features/user/useCurrentUser';
import UserAccount from './UserAccount';
function PersonalAccount() {
  const { currentUser } = useCurrentUser();
  return (
    <div>
      <UserAccount user={currentUser} />
    </div>
  );
}

export default PersonalAccount;
