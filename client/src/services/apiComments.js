import { Base_Url } from './apiPosts';
import axios from 'axios';

export async function commentOnPost(data) {
  const comment = await axios({
    url: `${Base_Url}api/v1/comments/comment/${data.postId}`,
    method: 'POST',
    withCredentials: true,
    credentials: 'include',
    data,
  });

  return { comment };
}

export async function getPostComments(postId) {
  const postID = postId.queryKey[1];
  const response = await axios(`${Base_Url}api/v1/comments/${postID}`, {
    withCredentials: true,

    credentials: 'include',
  });

  return response.data.comments;
}
