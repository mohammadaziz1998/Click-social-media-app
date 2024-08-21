import Button from '../../ui/Button';
import { IoPersonAdd } from 'react-icons/io5';
import { useAddFriend } from './useAddFriend';
import { useParams } from 'react-router-dom';
import SpinnerMini from '../../ui/SpinnerMini';

function AddFriendButton() {
  const { addFriend, isPending, isIdle } = useAddFriend();
  const { friendId } = useParams();
  function handleAddFriend() {
    addFriend(friendId);
  }

  return (
    <Button onClick={handleAddFriend} size="large">
      {isPending ? (
        <SpinnerMini />
      ) : (
        <>
          Add friend
          <IoPersonAdd />
        </>
      )}
      {/* {isIdle && 'Request has been sent'} */}
    </Button>
  );
}

export default AddFriendButton;
