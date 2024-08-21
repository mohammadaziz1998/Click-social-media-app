import { useQuery } from '@tanstack/react-query';
import { getNotification as getNotificationApi } from '../../services/apiNotification';

export function useNotification(friendId) {
  const { data, isLoading } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotificationApi(),
  });
  console.log(data);
  const notification = data?.data?.data;
  return { notification, isLoading };
}
