import Post from '../posts/Post';
import { useCurrentUser } from './useCurrentUser';

function UserPosts() {
  const { currentUser } = useCurrentUser();
  return (
    <div>
      {currentUser?.posts?.map((post) => (
        <Post post={post} user={post.user} key={post._id} />
      ))}
    </div>
  );
}

export default UserPosts;
