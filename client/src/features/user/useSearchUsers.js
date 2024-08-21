import { useMutation } from '@tanstack/react-query';
import { searchFriends as searchFriendsApi } from '../../services/apiUser';

export function useSearchUsers() {
  const {
    data,
    mutate: searchFriends,
    isPending,
  } = useMutation({
    mutationFn: (data) => searchFriendsApi(data),
  });
  return { data, isPending, searchFriends };
}
