import { useMutation } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiUser';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  console.log('mutation');
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => navigate('/login'),
  });
  return { logout, isPending };
}
