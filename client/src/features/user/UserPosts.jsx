import Post from '../posts/Post';
import { useCurrentUser } from './useCurrentUser';

function UserPosts() {
  const { currentUser } = useCurrentUser();
  console.log(currentUser);
  return (
    <div>
      {currentUser?.posts?.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}

export default UserPosts;
