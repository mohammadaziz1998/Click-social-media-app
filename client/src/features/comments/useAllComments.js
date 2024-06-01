import { useQuery } from '@tanstack/react-query';
import { getPostComments } from '../../services/apiComments';

export function useAllComment(postId) {
  const { data, isFetching, error } = useQuery({
    queryKey: ['comments', postId],

    queryFn: (postId) => getPostComments(postId),
  });
  const comments = data?.[0]?.comments;
  return { comments, isFetching, error };
}
