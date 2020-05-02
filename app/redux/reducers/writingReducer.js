import ACTION_TYPES from '../actionsTypes'

const initialState = {
    writings: [],
    refresh: false,
    isLoading: false,
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case ACTION_TYPES.SET_WRITINGS:
            return{...state,writings: action.writings, refresh: false };
        case ACTION_TYPES.SET_WRITINGS_LOADING:
            return{ ...state, isLoading: !state.isLoading };
        case ACTION_TYPES.REFREH_WRITINGS:
            return{ ...state, refresh:true };
    
        default:
            return state;
    }
}