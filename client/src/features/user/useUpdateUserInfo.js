import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserInfo } from '../../services/apiUser';
import toast from 'react-hot-toast';

export function useUpdateUserInfo() {
  const queryClient = useQueryClient();
  const { mutate: updateInfo, isPending } = useMutation({
    mutationFn: (data) => updateUserInfo(data),
    onSuccess: () => {
      queryClient.invalidateQueries('user');
      toast.success('Your data updated successfuly');
    },
    onError: () => {
      toast.error('Something wentwrong! try again');
    },
  });
  return { updateInfo, isPending };
}
