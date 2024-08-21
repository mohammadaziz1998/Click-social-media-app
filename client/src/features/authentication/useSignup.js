import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiUser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useSignup(data) {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: (data) => signupApi(data),
    onSuccess: (user) => {
      console.log(user);
      navigate('/home', { replace: true });
      toast.success('You are signed up successfuly');
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { signup, isPending };
}
