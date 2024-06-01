import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserPhoto as updateUserPhotoApi } from '../../services/apiUser';
import { useNavigate } from 'react-router-dom';

export function useUpdateUserPhoto() {
  const querClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: updateUserPhoto } = useMutation({
    mutationFn: (data) => updateUserPhotoApi(data),
    onSuccess: (updtedUser) => {
      querClient.invalidateQueries(['user']);
      navigate(-1);
    },
  });
  return { updateUserPhoto };
}
