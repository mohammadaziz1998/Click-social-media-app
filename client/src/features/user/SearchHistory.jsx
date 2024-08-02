import { useCurrentUser } from './useCurrentUser';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { MdOutlineSearchOff } from 'react-icons/md';
import Button from '../../ui/Button';
import styled from 'styled-components';

const StyledSearchHistory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function SearchHistory({ setSearch }) {
  const { currentUser = [] } = useCurrentUser();
  const searchHistory = currentUser?.history?.slice(-6).reverse();

  return (
    <div>
      {searchHistory?.map((search) => (
        <StyledSearchHistory key={search}>
          <Button size="fit" onClick={() => setSearch(search)}>
            <MdYoutubeSearchedFor />

            <span>{search}</span>
          </Button>
          <Button size="verySmall">
            <MdOutlineSearchOff />
          </Button>
        </StyledSearchHistory>
      ))}
    </div>
  );
}

export default SearchHistory;
