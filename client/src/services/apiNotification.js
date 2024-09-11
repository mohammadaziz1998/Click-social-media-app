import axios from 'axios';
const Base_Url = import.meta.env.VITE_API_URL;

export async function getNotification() {
  const response = await axios({
    method: 'GET',
    url: `${Base_Url}/api/v1/notification`,
    withCredentials: true,
  });
  return response;
}
