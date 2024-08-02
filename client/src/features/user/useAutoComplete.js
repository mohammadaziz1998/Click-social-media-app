import { useQuery } from '@tanstack/react-query';
import { autoComplete } from '../../services/apiUser';

export function useAutoComplete(data) {
  const { data: autoCompleteText } = useQuery({
    queryKey: ['autoComplete', data],
    queryFn: (data) => autoComplete(data),
  });
  return { autoCompleteText };
}
