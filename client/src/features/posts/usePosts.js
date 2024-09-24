import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '../../services/apiPosts';

export function usePosts() {
  const { isLoading, data, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: getPosts,
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        if (lastPage?.length === 0) {
          return undefined;
        }
        return lastPageParam + 1;
      },
    });
  const posts = data?.pages;
  return { isLoading, posts, error, fetchNextPage, isFetchingNextPage };
}
