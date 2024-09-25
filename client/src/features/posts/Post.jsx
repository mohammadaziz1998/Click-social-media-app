import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';
import UserNav from '../../ui/UserNav';
import Comments from '../comments/Comments';
import Modal from '../../ui/Modal';
import { useState } from 'react';
import Like from './Like';
import { formatDistanceToNow } from 'date-fns';
const Base_Url = import.meta.env.VITE_API_URL;

const StyledPostDiv = styled.div`
  position: relative;
  /* z-index: -1; */
  margin-top: 1.5rem;
  padding: 1rem 1rem 0 1rem;
  width: min(650px, 100%);
  margin-inline: auto;
  background-color: var(--color-green-100);
  font-size: 1.3rem;
  height: auto;
  border-radius: 4px;
`;

const StyledPostReactionDiv = styled.div`
  border-radius: 4px;
  display: flex;
  button {
    flex-grow: 1;
    border: none;
    background-color: var(--color-green-05);
  }
  button:hover {
    background-color: var(--color-hover);
  }
`;
const StyledPostTime = styled.div`
  margin: 0 0 10px 50px;
  font-size: 0.9rem;
`;
function Post({ post, user }) {
  const { text, createdAt, photo } = post;
  const [like, setLike] = useState(false);
  return (
    <StyledPostDiv>
      <UserNav imgUrl={user.photo} name={user.name} sizes="medium" />
      <StyledPostTime>{formatDistanceToNow(createdAt)}</StyledPostTime>
      <img src={`${Base_Url}/images/posts/${photo}`} alt="post" />
      <p>{text}</p>
      <StyledPostReactionDiv>
        <button onClick={() => setLike((like) => !like)}>
          <FaRegHeart />
          {like && <Like />}
        </button>
        <Modal>
          <Modal.Open opens="comment">
            <button>Comments</button>
          </Modal.Open>
          <Modal.Window name="comment">
            <Comments postId={post._id} />
          </Modal.Window>
        </Modal>
        <button>Share</button>
      </StyledPostReactionDiv>
    </StyledPostDiv>
  );
}

export default Post;
