import styled from 'styled-components';
import Comment from './Comment';
import AddComment from './AddComment';
import { useAllComment } from './useAllComments';
// import Spinner from '../../ui/Spinner';
import SpinnerMini from '../../ui/SpinnerMini';

const StyledComments = styled.div`
  border-radius: 10px;
`;

function Comments({ postId }) {
  const { comments = [], isFetching, error } = useAllComment(postId);
  return (
    <StyledComments>
      <AddComment postId={postId} />
      {error && 'There is no comment yet on this post ,Add the first comment'}
      {isFetching ? (
        <SpinnerMini />
      ) : (
        comments?.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))
      )}
    </StyledComments>
  );
}

export default Comments;
