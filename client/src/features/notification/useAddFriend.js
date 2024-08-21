import { useMutation } from '@tanstack/react-query';
import { addFriend as addFriendApi } from '../../services/apiUser';

export function useAddFriend(friendId) {
  const {
    mutate: addFriend,
    isPending,
    isIdle,
  } = useMutation({
    mutationFn: (friendId) => addFriendApi(friendId),
  });
  return { addFriend, isPending, isIdle };
}
