import { 
    FETCH_CHARACTERS, 
    FETCH_CHARACTERS_SUCCESS, 
    FETCH_CHARACTERS_ERROR
} from '../actions';

const initialState = {
    characters: [],
    loadingCharacters: false,
    errorMessage: ''
};

export default (state = initialState, action) => { 
switch(action.type){
    case FETCH_CHARACTERS: 
        return {};
    case FETCH_CHARACTERS_SUCCESS:
        return {};
    case FETCH_CHARACTERS_ERROR:
        return{};
    default:
    return state;
};
};