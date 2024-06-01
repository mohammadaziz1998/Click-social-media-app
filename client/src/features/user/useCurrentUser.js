import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiUser';

export function useCurrentUser() {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });
  const { currentUser } = data || {};
  return {
    currentUser,
    isLoading,
    isAuthenticated: currentUser?.role === 'authenticated',
  };
}
