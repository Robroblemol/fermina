import ACTION_TYPES from '../actionsType'

const initialState = {
    token: null,
    user: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.AUTHENTICATE:
            return { ...state, token: action.token };
        case ACTION_TYPES.USER:
            return { ...state, user: action.user_id };
        // case 'DEAUTHENTICATE':
        //     return { token: null };
        default:
            return state;
    }
};
