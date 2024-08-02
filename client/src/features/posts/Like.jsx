import styled from 'styled-components';
import { BsEmojiHeartEyes } from 'react-icons/bs';
import { BsEmojiAngry } from 'react-icons/bs';
import { BsEmojiGrin } from 'react-icons/bs';
import Button from '../../ui/Button';

const StyledLike = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-green-00);
`;

function Like() {
  return (
    <StyledLike>
      <Button>
        <BsEmojiHeartEyes />
      </Button>
      <Button>
        <BsEmojiAngry />
      </Button>
      <Button>
        <BsEmojiGrin />
      </Button>
    </StyledLike>
  );
}

export default Like;
