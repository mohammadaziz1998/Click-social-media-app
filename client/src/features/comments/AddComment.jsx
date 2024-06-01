import styled from 'styled-components';
import Button from '../../ui/Button';
import SpinnerMini from '../../ui/SpinnerMini';
import { useState } from 'react';
import { useComment } from './useComment';
const StyledAddComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const StyledAddCommentInput = styled.input`
  width: 100%;

  height: 3rem;
  border-radius: 10px;
  border: none;
`;
function AddComment({ postId }) {
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
