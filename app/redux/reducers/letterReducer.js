import ACTION_TYPES from '../actionsTypes'

const initialState = {
    letters: [],
    refresh: false,
    isLoading: false,
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case ACTION_TYPES.SET_LETTERS:
            return{...state,letters: action.letters, refresh: false };
        case ACTION_TYPES.SET_LETTERS_LOADING:
            return{ ...state, isLoading: !state.isLoading };
        case ACTION_TYPES.REFREH_LETTERS:
            return{ ...state, refresh:true };
    
        default:
            return state;
    }
}