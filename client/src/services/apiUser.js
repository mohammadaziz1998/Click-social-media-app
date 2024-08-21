import axios from 'axios';
import { Base_Url } from './apiPosts';

export async function login(data) {
  try {
    const userData = await axios(`${Base_Url}api/v1/users/login`, {
      method: 'POST',
      mode: 'cors',
      withCredentials: true,

      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
    if (!userData.statusText === 'OK') {
      throw new Error('Something went wrong');
    }
    return userData.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function signup(data) {
  const response = await axios({
    method: 'POST',
    url: `${Base_Url}api/v1/users/signup`,
    mode: 'cors',
    withCredentials: true,

    credentials: 'include', // Don't forget to specify this if you need cookies
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  console.log(response);
  return { response };
}

export async function getCurrentUser() {
  try {
    const response = await axios(`${Base_Url}api/v1/users/currentuser`, {
      withCredentials: true,
    });
    const currentUser = response.data.user;
    return { currentUser };
  } catch (err) {
    console.log(err);
  }
}
export async function updateUserPhoto(data) {
  const formData = new FormData();
  formData.append('image', data);
  const response = await axios({
    method: 'PATCH',
    url: `${Base_Url}api/v1/users/uploadphoto`,
    data: formData,

    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}

export async function logout() {
  await axios({
    url: `${Base_Url}api/v1/users/logout`,
    method: 'POST',
    credentials: 'same-origin',
    withCredentials: true,
  });
}
export async function updateUserInfo(data) {
  await axios({
    url: `${Base_Url}api/v1/users/updateinfo`,
    method: 'POST',
    withCredentials: true,
    data,
  });
}
export async function updatePasswordApi(data) {
  await axios({
    url: `${Base_Url}api/v1/users/updatepassword`,
    method: 'POST',
    withCredentials: true,
    data,
  });
}

export async function searchFriends(data) {
  // const searchText = data.queryKey[1];
  if (!data || data.length <= 2) return [];

  const response = await axios(`${Base_Url}api/v1/users/search/${data}`, {
    withCredentials: true,
  });
  return response.data.friends;
}

export async function autoComplete(data) {
  const searchText = data.queryKey[1];
  if (!searchText || searchText.length <= 2) return [];

  const response = await axios(
    `${Base_Url}api/v1/users/autocomplete/${searchText}`,
    {
      withCredentials: true,
    }
  );
  // console.log(response);
  return response.data.friends;
}

export async function getFriendPage(data) {
  const id = data.queryKey[1];
  const response = await axios(`${Base_Url}api/v1/users/friendpage/${id}`, {
    withCredentials: true,
  });

  return response.data.friend;
}

export async function addFriend(friendId) {
  const response = await axios({
    method: 'GET',
    url: `${Base_Url}api/v1/users/addfreind/${friendId}`,
    withCredentials: true,
  });
  return response;
}
