import axios from 'axios';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

export const fetchCharacters = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CHARACTERS });
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                dispatch({
                    type: FETCH_CHARACTERS_ERROR,
                    payload: { message: "No characters found"}
                });
            });
    }
}