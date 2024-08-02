import { useMutation } from '@tanstack/react-query';
import { login as loginAPI } from '../../services/apiUser';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: login } = useMutation({
    mutationFn: (data) => loginAPI(data),
    onSuccess: (user) => {
      console.log(user);
      navigate('/home', { replace: true });
      toast.success('You are logged in successfuly');
    },
    onError: (err) => {
      console.log(err);
      toast.error('Incorrect email or password');
    },
  });
  return { login, isPending };
}
