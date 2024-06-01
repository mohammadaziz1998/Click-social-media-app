import styled from 'styled-components';
import Posts from '../features/posts/Posts';
import AddPost from '../features/posts/AddPost';

const StyledHomePostsDiv = styled.div`
  width: auto;
  margin-inline: 2rem;
  height: auto;
  position: relative;
  @media (min-width: 1024px) {
  }
  @media (max-width: 600px) {
    margin-inline: 0.3rem;
  }
`;
function Home() {
  return (
    <StyledHomePostsDiv>
      <AddPost />
      <Posts />
    </StyledHomePostsDiv>
  );
}

export default Home;
