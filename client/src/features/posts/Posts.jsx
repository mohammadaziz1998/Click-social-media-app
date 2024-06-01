import { usePosts } from './usePosts';
import Post from './Post';
import styled from 'styled-components';
import Spinner from '../../ui/Spinner';

const StyledPostsDiv = styled.div`
  padding: 0.1rem;
`;

function Posts() {
  const { posts = [], isLoading } = usePosts();
  return (
    <StyledPostsDiv>
      {isLoading ? (
        <Spinner />
      ) : (
        posts?.data?.map((post) => <Post post={post} key={post._id} />)
      )}
    </StyledPostsDiv>
  );
}

export default Posts;
