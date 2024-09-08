import { useMutation, useQueryClient } from '@tanstack/react-query';
import { friendRequestAnswer as friendRequestAnswerApi } from '../../services/apiFriendship';

export function useFriendRequestAnswer() {
  const queryClient = useQueryClient();
  const { mutate: friendRequestAnswer, isPending } = useMutation({
    mutationFn: ({ answer, id }) => friendRequestAnswerApi({ answer, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendrequest'] });
    },
  });

  return {
    friendRequestAnswer,
    isPending,
  };
}
