import ACTION_TYPES from '../actionsTypes'

const initialState = {
    scannedWritings: [],
    refresh: false,
    isLoading: false,
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case ACTION_TYPES.SET_SCANNED_WRITING:
            return{...state,scannedWritings: action.scannedWritings, refresh: false };
        case ACTION_TYPES.SET_SCANNED_WRITINGS_LOADING:
            return{ ...state, isLoading: !state.isLoading };
        case ACTION_TYPES.REFREH_SCANNED_WRITING:
            return{ ...state, refresh:true };
    
        default:
            return state;
    }
}