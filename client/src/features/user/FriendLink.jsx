import { NavLink } from 'react-router-dom';
import UserNav from '../../ui/UserNav';
import styled from 'styled-components';
import Button from '../../ui/Button';

const StyledSearchResault = styled.div`
  border-radius: 10px;
  padding: 0.2rem 0.5rem;
  &:hover {
    background-color: var(--color-hover);
    cursor: pointer;
    /* color: var(--color-green-05); */
  }
`;

function FriendLink({ children, friend }) {
  return (
    <div>
      <NavLink to={`/friends/${friend._id}`}>
        <StyledSearchResault>
          <Button size="verySmall">
            <UserNav imgUrl={friend.photo} sizes="small" name={friend.name} />
          </Button>
        </StyledSearchResault>
      </NavLink>
    </div>
  );
}

export default FriendLink;
