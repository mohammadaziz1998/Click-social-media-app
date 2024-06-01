import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';
import UserNav from '../../ui/UserNav';
import Comments from '../comments/Comments';
import Modal from '../../ui/Modal';

const StyledPostDiv = styled.div`
  /* position: relative;
  z-index: -1; */
  margin-top: 1rem;
  padding: 1rem;
  margin-inline: 0.5rem;
  background-color: #ebe3e3;
  font-size: 1.3rem;
  height: auto;
  border-radius: 10px;
`;

const StyledPostFooterDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  border-radius: 10px;
  float: left;
  button {
    border-radius: 10px;

    border: none;
    background-color: var(--color-aqua--700);
  }
  @media (min-width: 600px) {
    button {
      width: 100px;
      height: 20px;
    }
  }
`;
function Post({ post }) {
  const { text, user, createdAt } = post;
  return (
    <StyledPostDiv>
      <UserNav
        imgUrl={`/users/${user.photo}` || '/users/default.jpg'}
        name={user.name}
        sizes="medium"
      />
      <span>{createdAt}</span>
      <p>{text}</p>
      <StyledPostFooterDiv>
        <button>
          <FaRegHeart />
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
