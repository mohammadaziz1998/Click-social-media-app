import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFriend as addFriendApi } from '../../services/apiFriendship';

export function useAddFriend(friendId) {
  const queryClient = useQueryClient();

  const {
    mutate: addFriend,
    isPending,
    isIdle,
  } = useMutation({
    mutationFn: (friendId) => addFriendApi(friendId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['isMyFriend'] });
    },
  });
  return { addFriend, isPending, isIdle };
}
