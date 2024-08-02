import { useState } from 'react';
import { useSearchUsers } from './useSearchUsers';
import styled from 'styled-components';
import UserNav from '../../ui/UserNav';

// import { useDelay } from '../../hooks/useDelay';
import { useAutoComplete } from './useAutoComplete';

import SearchHistory from './SearchHistory';
import Button from '../../ui/Button';
import { IoIosSearch } from 'react-icons/io';
import AutoComplete from './AutoComplete';
import { NavLink } from 'react-router-dom';
// import Button from '../../ui/Button';
// import { IoIosSearch } from 'react-icons/io';

const StyledSearchDiv = styled.div`
  padding: 1.2rem;
  input {
    min-width: 20rem;
    padding: 1rem;
    border-radius: 10px;
    border: 3px, solid var(--color-green-05);
    height: 3rem;
  }
`;
const StyledSearchList = styled.div`
  min-width: 20rem;
  background-color: var(--color-green-05);
  padding: 1rem;
  border-radius: 10px;
`;
const StyledSearchResault = styled.div`
  border-radius: 10px;
  padding: 0 0.5rem;
  &:hover {
    background-color: var(--color-hover);
    cursor: pointer;
    color: var(--color-green-05);
  }
`;

function Search() {
  const [search, setSearch] = useState('');

  // const [isOpenList, setIsOpenList] = useState(false);

  // const { value } = useDelay(search, 1000);

  const { data, searchFriends } = useSearchUsers();

  const { autoCompleteText } = useAutoComplete(search);

  function handleSearch(e) {
    e.preventDefault();
    searchFriends(search);
  }

  console.log(data);

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
        <Button size="fit">
          <IoIosSearch />
        </Button>
        {true && (
          <StyledSearchList>
            {data?.length > 0 ? (
              data?.map((friend) => (
                <NavLink to={friend.name} key={friend._id}>
                  <StyledSearchResault>
                    <UserNav
                      imgUrl={friend.photo}
                      sizes="small"
                      name={friend.name}
                    />
                  </StyledSearchResault>
                </NavLink>
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
          </StyledSearchList>
        )}
      </form>
    </StyledSearchDiv>
  );
}

export default Search;
