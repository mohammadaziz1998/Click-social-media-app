import { useQuery } from '@tanstack/react-query';
import { IsMyFrien } from '../../services/apiFriendship';

export function useIsMyFriend(id) {
  const { data, isLoading } = useQuery({
    queryKey: ['isMyFriend', id],
    queryFn: (id) => IsMyFrien(id),
  });
  const isMyFriend = data?.data;
  return { isMyFriend, isLoading };
}
