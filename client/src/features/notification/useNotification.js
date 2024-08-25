import { useQuery } from '@tanstack/react-query';
import { getNotification as getNotificationApi } from '../../services/apiNotification';

export function useNotification(friendId) {
  const { data, isLoading } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotificationApi(),
  });
  const notifications = data?.data?.data;
  return { notifications, isLoading };
}
