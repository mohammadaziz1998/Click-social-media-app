import styled from 'styled-components';
import UserNav from '../../ui/UserNav';

const StyledComment = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  padding: 0 0.5rem 0 0.5rem;
  p {
    margin-top: 0;
    font-size: 1rem;
    padding-left: 2.8rem;
  }
`;

function Comment({ comment }) {
  const { user, text } = comment;
  return (
    <StyledComment>
      <UserNav imgUrl={`/users/${user.photo}`} name={user.name} sizes="small" />
      <p>{text}</p>
    </StyledComment>
  );
}

export default Comment;
