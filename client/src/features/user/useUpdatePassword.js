import { useMutation } from '@tanstack/react-query';
import { updatePasswordApi } from '../../services/apiUser';
import toast from 'react-hot-toast';

export function useUpdatepassword() {
  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: (data) => updatePasswordApi(data),
    onSuccess: () => {
      toast.success('Your password updated successfuly');
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { updatePassword, isPending };
}
