import { useMutation, useQueryClient } from '@tanstack/react-query';
import { commentOnPost } from '../../services/apiComments';
import toast from 'react-hot-toast';

export function useComment() {
  const queryClient = useQueryClient();
  const { mutate: newComment, isPending } = useMutation({
    mutationFn: (data) => commentOnPost(data),
    onSuccess: (comment) => {
      queryClient.invalidateQueries(['comment']);
      toast.success('Your comment has been successfuly published.');
    },
    onError: () => {
      toast.error('Something went wrong! try again later');
    },
  });
  return { newComment, isPending };
}
