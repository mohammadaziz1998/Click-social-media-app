import { useQuery } from '@tanstack/react-query';
import { getFriendsRequests } from '../../services/apiFriendship';

export function useGetFriendRequest() {
  const { data, isLoading } = useQuery({
    queryKey: ['friendrequest'],
    queryFn: () => getFriendsRequests(),
  });
  const friendRequest = data?.friendRequest;

  return { friendRequest, isLoading };
}
