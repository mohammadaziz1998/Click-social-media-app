import { useParams } from 'react-router-dom';
import { useFriendPage } from '../features/user/useFriendPage';
import UserAccount from './UserAccount';
import Spinner from './Spinner';

function FriendAccount() {
  const { friendId } = useParams();
  const { friendPage, isLoading } = useFriendPage(friendId);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <UserAccount user={friendPage} personal={false} />
      )}
    </div>
  );
}

export default FriendAccount;
