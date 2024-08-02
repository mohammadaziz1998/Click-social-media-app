import styled from 'styled-components';
import Button from '../../ui/Button';
import SpinnerMini from '../../ui/SpinnerMini';
import { useState } from 'react';
import { useComment } from './useComment';
import UserNav from '../../ui/UserNav';
import { useCurrentUser } from '../user/useCurrentUser';

const StyledAddComment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: space-between;
  position: sticky;
  top: 0;

  /* background-color: aliceblue; */
`;

const StyledAddCommentInput = styled.input`
  width: 100%;

  height: 3rem;
  border-radius: 10px;
  border: none;
`;
function AddComment({ postId }) {
  const { currentUser } = useCurrentUser();
  const [comment, setComment] = useState('');
  const { newComment, isPending } = useComment();

  function handleAddComment(comment) {
    newComment({
      postId,
      comment,
    });
  }

  return (
    <StyledAddComment>
      <UserNav imgUrl={currentUser?.photo} sizes="medium" />
      <StyledAddCommentInput
        type="text"
        name="comment-field"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      {isPending ? (
        <SpinnerMini />
      ) : (
        <Button
          size="large"
          disabled={isPending}
          onClick={() => handleAddComment(comment)}
        >
          Add
        </Button>
      )}
    </StyledAddComment>
  );
}

export default AddComment;
