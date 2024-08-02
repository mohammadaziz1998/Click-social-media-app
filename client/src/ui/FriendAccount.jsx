import { useUserID } from '../context/UserIDContext';
import { useFriendPage } from '../features/user/useFriendPage';
import UserAccount from './UserAccount';

function FriendAccount() {
  const { id } = useUserID();

  const { friendPage, isLoading } = useFriendPage(id);
  console.log(friendPage);
  return (
    <div>
      <UserAccount user={friendPage} personal={false} />
    </div>
  );
}

export default FriendAccount;
