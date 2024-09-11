import axios from 'axios';
const Base_Url = import.meta.env.VITE_API_URL;

export async function commentOnPost(data) {
  const comment = await axios({
    url: `${Base_Url}/api/v1/comments/comment/${data.postId}`,
    method: 'POST',
    withCredentials: true,
    credentials: 'include',
    data,
  });

  return { comment };
}

export async function getPostComments(postId) {
  const postID = postId.queryKey[1];
  const response = await axios(`${Base_Url}/api/v1/comments/${postID}`, {
    withCredentials: true,

    credentials: 'include',
  });

  return response.data.comments;
}
