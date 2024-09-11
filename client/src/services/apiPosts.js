import axios from 'axios';
const Base_Url = import.meta.env.VITE_API_URL;
export async function getPosts() {
  try {
    const response = await axios.get(`${Base_Url}/api/v1/posts`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Don't forget to specify this if you need cookies
    });

    return response.data.data;
  } catch (err) {
    console.log('ERROR🧧', err);
  }
}
export async function createPost(data) {
  const { text, photo } = data;
  const formData = new FormData();
  formData.append('image', photo);
  formData.append('text', text);
  try {
    const response = await axios({
      url: `${Base_Url}/api/v1/posts/newpost`,
      method: 'POST',
      withCredentials: true,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
