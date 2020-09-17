import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';
import { connect } from 'react-redux';
import { fetchCharacters } from './store/actions';
import RingLoader from 'react-spinners/RingLoader'; 
import './App.css';

function App(props) {
  const { fetchCharacters, loadingCharacters, errorMessage} = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters(page);
  }, [fetchCharacters, page]);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Rick and Morty Characters</h1>
      </header>

<div className="pageNumbers">
  <div className="numberDiv">
      <button 
        className="pageNumber"
        onClick={() => 
          setPage(() => {
            if (page <= 1) {
              setPage(4);
            }else {
              setPage(page - 1);
            }
          })
        }>Prev</button>
        </div>

  <div className="numberDiv">
        <button 
          className="pageNumber"
          onClick={() => setPage(1)}>1</button>
  </div>
  <div className="numberDiv">
        <button 
          className="pageNumber"
          onClick={() => setPage(2)}>2</button>
  </div>
  <div className="numberDiv">
        <button 
          className="pageNumber"
          onClick={() => setPage(3)}>3</button>
  </div>
  <div className="numberDiv">
        <button 
          className="pageNumber"
          onClick={() => setPage(4)}>4</button>
  </div>

  <div className="numberDiv">
      <button 
        className="pageNumber"
        onClick={() => 
          setPage(() => {
            if (page >= 4) {
              setPage(1);
            }else {
              setPage(page + 1);
            }
          })
        }>Next</button>
        </div>
</div>
      <div className="loadingDiv">
          {!loadingCharacters ? ( <CharacterList /> ) : (
          <div className="loading">
          <RingLoader className="ringLoader" /> Looking for your character...</div>
          )}
      </div>

   {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingCharacters: state.loadingCharacters,
    errorMessage: state.errorMessage,
    page: state.page,
  };
}

export default connect(mapStateToProps, { fetchCharacters })(App);
