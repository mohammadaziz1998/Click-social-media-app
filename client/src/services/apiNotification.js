import axios from 'axios';
import { Base_Url } from './apiPosts';

export async function getNotification() {
  const response = await axios({
    method: 'GET',
    url: `${Base_Url}api/v1/notification`,
    withCredentials: true,
  });
  console.log(response);
  return response;
}
