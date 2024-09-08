import { useMutation } from '@tanstack/react-query';
import { friendRequestAnswer as friendRequestAnswerApi } from '../../services/apiFriendship';

export function useFriendRequestAnswer() {
  const { mutate: friendRequestAnswer, isPending } = useMutation({
    mutationFn: ({ answer, id }) => friendRequestAnswerApi({ answer, id }),
  });

  return {
    friendRequestAnswer,
    isPending,
  };
}
