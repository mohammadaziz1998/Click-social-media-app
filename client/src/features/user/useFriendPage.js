import { useQuery } from '@tanstack/react-query';
import { getFriendPage } from '../../services/apiUser';

export function useFriendPage(data) {
  const { data: friendPage, isLoading } = useQuery({
    queryKey: ['friend', data],
    queryFn: (data) => getFriendPage(data),
  });
  return { friendPage, isLoading };
}
