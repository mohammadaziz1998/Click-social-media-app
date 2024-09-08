import Button from '../../ui/Button';
import { IoPersonAdd } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';

import { useAddFriend } from './useAddFriend';
import { useParams } from 'react-router-dom';

import SpinnerMini from '../../ui/SpinnerMini';
import { useIsMyFriend } from './useIsMyFriend';

function AddFriendButton() {
  const { friendId } = useParams();
  const { isMyFriend, isLoading } = useIsMyFriend(friendId);
  const { addFriend, isPending } = useAddFriend();
  function handleAddFriend() {
    addFriend(friendId);
  }

  return (
    <>
      {isMyFriend === 'send friend request' ? (
        <Button size="large">
          {isPending ? (
            <SpinnerMini />
          ) : (
            <>
              Cancel Request <MdOutlineCancel />
            </>
          )}
        </Button>
      ) : (
        <Button onClick={handleAddFriend} size="large">
          {isPending ? (
            <SpinnerMini />
          ) : (
            <>
              Add Friend <IoPersonAdd />
            </>
          )}
        </Button>
      )}
    </>
  );
}

export default AddFriendButton;
