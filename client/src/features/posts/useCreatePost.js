import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost as createPostApi } from '../../services/apiPosts';
import toast from 'react-hot-toast';
export function useCreatePost() {
  const queryClient = useQueryClient();
  const { mutate: createPost, status } = useMutation({
    mutationFn: (data) => createPostApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      toast.success('Your post has been successfuly published.');
    },
    onError: (err) => {
      toast.error('Something went wrong! try again.');
    },
  });
  return { createPost, status };
}
