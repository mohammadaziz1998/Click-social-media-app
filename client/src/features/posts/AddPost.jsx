import { useState } from 'react';
import { IoIosCreate } from 'react-icons/io';
import styled from 'styled-components';
import CreatePostForm from './CreatePostForm';

const StyledAddPost = styled.div`
  height: 50px;
  border-radius: 10px;
  background-color: var(--color-green-100);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function AddPost() {
  const [isPost, setIsPost] = useState(false);

  return (
    <>
      <StyledAddPost onClick={() => setIsPost((post) => !post)}>
        <span>Create Post</span>
        <IoIosCreate />
      </StyledAddPost>
      {isPost && <CreatePostForm setIsPost={setIsPost} />}
    </>
  );
}

export default AddPost;
