import { useMutation } from '@tanstack/react-query';
import { searchFriends as searchFriendsApi } from '../../services/apiUser';

export function useSearchUsers() {
  console.log('mutation');
  // const queryClient = useQueryClient();
  const {
    data,
    mutate: searchFriends,
    isPending,
  } = useMutation({
    // queryKey: ['searchedFriends', data],
    mutationFn: (data) => searchFriendsApi(data),
  });
  console.log(data);
  return { data, isPending, searchFriends };
}
