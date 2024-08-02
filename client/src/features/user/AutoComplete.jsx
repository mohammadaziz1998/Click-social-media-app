import { MdYoutubeSearchedFor } from 'react-icons/md';
import styled from 'styled-components';
import Button from '../../ui/Button';

const StyledAutoComplete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 0 0.5rem;
  &:hover {
    background-color: var(--color-hover);
    cursor: pointer;
    color: var(--color-green-05);
  }
`;

function AutoComplete({ setSearch, text }) {
  return (
    <Button onClick={() => setSearch(text.name)}>
      <StyledAutoComplete>
        <MdYoutubeSearchedFor />
        {text.name}
      </StyledAutoComplete>
    </Button>
  );
}

export default AutoComplete;
