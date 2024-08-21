import { useEffect, useState } from 'react';
import { useSearchUsers } from './useSearchUsers';
import styled from 'styled-components';

// import { useDelay } from '../../hooks/useDelay';
import { useAutoComplete } from './useAutoComplete';

import SearchHistory from './SearchHistory';
import { IoIosSearch } from 'react-icons/io';
import AutoComplete from './AutoComplete';
import Spinner from '../../ui/Spinner';
import FriendLink from './FriendLink';
import { useUserID } from '../../context/UserIDContext';
import { redirect } from 'react-router-dom';
// import Button from '../../ui/Button';
// import { IoIosSearch } from 'react-icons/io';

const StyledSearchDiv = styled.div`
  width: min(650px, 100%);
  margin-inline: auto;
  padding: 1.2rem;
  input {
    position: relative;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    border: 3px, solid var(--color-green-05);
    height: 3rem;
    resize: vertical;
  }
`;
const StyledSearchList = styled.div`
  min-width: 20rem;
  background-color: var(--color-green-100);
  padding: 1rem;
  border-radius: 10px;
`;

const StyledSearchButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  padding: 10px;
  border-radius: 10px;
  top: 69px;
`;

function SearchEngin() {
  const [search, setSearch] = useState('');
  const { id } = useUserID();

  // const [isOpenList, setIsOpenList] = useState(false);

  // const { value } = useDelay(search, 1000);

  const { data, searchFriends, isPending } = useSearchUsers();

  const { autoCompleteText } = useAutoComplete(search);

  useEffect(() => {
    if (!id) redirect('friends');
  }, [id]);
  function handleSearch(e) {
    e.preventDefault();
    searchFriends(search);
  }

  return (
    <StyledSearchDiv>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for friends"
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <StyledSearchButton size="fit">
          <IoIosSearch />
        </StyledSearchButton>

        <StyledSearchList>
          {!isPending ? (
            <>
              {data?.length > 0 ? (
                data?.map((friend) => (
                  <FriendLink friend={friend} key={friend._id} />
                ))
              ) : autoCompleteText?.length > 0 ? (
                <div>
                  {autoCompleteText.map((text) => (
                    <AutoComplete
                      key={text._id}
                      setSearch={setSearch}
                      text={text}
                    />
                  ))}
                </div>
              ) : (
                <SearchHistory setSearch={setSearch} />
              )}
            </>
          ) : (
            <Spinner />
          )}
        </StyledSearchList>
      </form>
    </StyledSearchDiv>
  );
}

export default SearchEngin;
