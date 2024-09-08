import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiUser';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate('/login');
      queryClient.removeQueries();
    },
  });
  return { logout, isPending };
}
