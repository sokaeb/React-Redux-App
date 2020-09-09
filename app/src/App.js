import React, { useEffect } from 'react';
import CharacterList from './components/CharacterList';
import { connect } from 'react-redux';
import { fetchCharacters } from './actions';

import './App.css';

function App(props) {
  const { fetchCharacters, loadingCharacters, errorMessage} = props;

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Rick and Morty Characters</h1>
      </header>
    {!loadingCharacters ? ( <CharacterList /> ) : (
      <div>...Finding your character</div>)}
   {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingCharacters: state.loadingCharacters,
    errorMessage: state.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchCharacters})(App);
