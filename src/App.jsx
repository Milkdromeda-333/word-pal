import './styles.css';
import { useState } from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Word from './Word';

export default function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [wordsFound, setWordsFound] = useState([]);

  function getWordsArray() {
    if (wordsFound.length !== 0) {
      return wordsFound.map((word) => <Word {...word} key={word} />);
    } else {
      return <span>No words found. Check your spelling, friend?</span>;
    }
  }

  return (
    <div className="App">
      <Navbar />
      <h2 className="app__title">Search a word</h2>
      <Searchbar
        setWordsFound={setWordsFound}
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        wordsFound={wordsFound}
      />
      <div className="results">{isSearching && getWordsArray()}</div>
    </div>
  );
}
