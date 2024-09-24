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
  /* position: relative; */
  /* z-index: -1; */
  margin-top: 1.5rem;
  padding: 1rem;
  width: min(650px, 100%);
  margin-inline: auto;
  background-color: var(--color-green-100);
  font-size: 1.3rem;
  height: auto;
  border-radius: 4px;
`;

const StyledPostFooterDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;
  border-radius: 4px;
  float: left;
  button {
    border-radius: 10px;
    font-size: 1rem;
    border: none;
    background-color: var(--color-green-05);
  }
  @media (min-width: 600px) {
    button {
      width: 100px;
      height: 20px;
    }
  }
`;
function Post({ post }) {
  const { text, user, createdAt, photo } = post;
  const [like, setLike] = useState(false);
  return (
    <StyledPostDiv>
      <UserNav imgUrl={user.photo} name={user.name} sizes="medium" />
      <span>{formatDistanceToNow(createdAt)}</span>
      <img src={`${Base_Url}/images/posts/${photo}`} alt="post" />
      <p>{text}</p>
      <StyledPostFooterDiv>
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
      </StyledPostFooterDiv>
    </StyledPostDiv>
  );
}

export default Post;
