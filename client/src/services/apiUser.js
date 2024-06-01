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
  } catch (err) {
    throw new Error(err.message);
  }
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
  const response = await axios({
    url: `${Base_Url}api/v1/users/updateinfo`,
    method: 'POST',
    withCredentials: true,
    data,
  });
}
export async function updatePasswordApi(data) {
  const response = await axios({
    url: `${Base_Url}api/v1/users/updatepassword`,
    method: 'POST',
    withCredentials: true,
    data,
  });
}
