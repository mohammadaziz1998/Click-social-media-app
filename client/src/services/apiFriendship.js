import axios from 'axios';
const Base_Url = import.meta.env.VITE_API_URL;

export async function IsMyFrien(data) {
  try {
    const friendId = data.queryKey[1];

    const response = await axios({
      method: 'GET',
      url: `${Base_Url}/api/v1/users/isfriend/${friendId}`,
      withCredentials: true,
    });
    console.log(response);
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function addFriend(friendId) {
  const response = await axios({
    method: 'GET',
    url: `${Base_Url}/api/v1/users/addfreind/${friendId}`,
    withCredentials: true,
  });
  return response;
}

export async function friendRequestAnswer(data) {
  const response = await axios({
    method: 'POST',
    url: `${Base_Url}/api/v1/users/handlefriendrequest`,
    withCredentials: true,
    data,
  });
  return response;
}

export async function getFriendsRequests() {
  const response = await axios({
    method: 'GET',
    url: `${Base_Url}/api/v1/users/friendrequests`,
    withCredentials: true,
  });
  return response?.data?.data;
}
