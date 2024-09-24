import { usePosts } from './usePosts';
import Post from './Post';
import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import SpinnerMini from '../../ui/SpinnerMini';

const StyledPostsDiv = styled.div`
  padding: 0.1rem;
`;

function Posts() {
  const { ref, inView } = useInView();

  const {
    posts = [],
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts();
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <StyledPostsDiv>
      {isLoading ? (
        <Spinner />
      ) : (
        posts?.map((posts) =>
          posts?.map((post) => <Post post={post} key={post._id} />)
        )
      )}
      {isFetchingNextPage && <SpinnerMini />}
      <div ref={ref} style={{ backgroundColor: 'black' }}></div>
    </StyledPostsDiv>
  );
}

export default Posts;
