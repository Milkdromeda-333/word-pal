import { useState } from 'react';

export default function Searchbar(props) {
  const [query, setQuery] = useState('');
  const [savedQuery, setSavedQuery] = useState(undefined);

  function updateQuery(e) {
    const { value } = e.target;
    setQuery(value);
    if (query?.length <= 1) {
      clearQuery();
    }
  }

  async function searchWord() {
    try {
      const apiResponse = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      if (apiResponse.status === 404) {
        props.setWordsFound([]);
      } else {
        const wordData = await apiResponse.json();
        props.setWordsFound(wordData);
        setSavedQuery(query);
      }
    } catch (error) {
      console.log('error: ' + error.resolution);
    }
    props.setIsSearching(true);
  }

  function clearQuery(isClearingSearchBar = false) {
    setSavedQuery(undefined);
    props.setIsSearching(false);
    props.setWordsFound();
    //oncy clear query when setting from clear btn
    isClearingSearchBar && setQuery('');
  }

  return (
    <div className="search">
      <input
        type="search"
        placeholder="like: stentorian"
        className="search__search-bar"
        onChange={updateQuery}
        value={query}
      />
      <div className="search__btns-container">
        <button className="search__btn search__submit-btn" onClick={searchWord}>
          Search!
        </button>
        <button
          className="search__btn search__clear-btn"
          onClick={() => clearQuery(true)}>
          Clear
        </button>
      </div>
      {props.wordsFound?.length > 0 && (
        <h3 className="search__query">{props.isSearching && savedQuery}</h3>
      )}
    </div>
  );
}
