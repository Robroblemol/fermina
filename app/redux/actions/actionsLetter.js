import {
    getLetters,
    updateLetter,
    createLetter,
    deleteLetter,
} from '../../services/letters'

export const setLetter = (letters) =>({
    type: 'SET_LETTERS',
    letters
});
export const setLetterLoading = () =>({
    type: 'SET_LETTERS_LOADING',
});
export const refreshLetters = () =>({
    type:'REFREH_LETTERS'
});

export async function getLetterAction(token,dispatch,data) {
    
    dispatch(setLetterLoading());
    const response = await getLetters(token,data);
    
    
    if(response.ok){  
        console.log(response.data);       
        dispatch(setLetter(response.data.data));
        dispatch(setLetterLoading());
    }
    return response.data

}

export async function createLetterAction(token,dispatch,letter) {
        dispatch(setLetterLoading());
        const response = await createLetter(token, letter);
        if(response.ok){
            dispatch(refreshLetters());
            dispatch(setLetterLoading());
        }
        return response;

}

export function updateLetterAction(token,Letters) {
    return async dispatch => {
        dispatch(setLetterLoading());
        const response = await updateLetter(token, Letters);
        if(response.ok){
            dispatch(refreshLetters());
            dispatch(setLetterLoading());
        }
        return response;
    };
}
export function deleteWritingsAction(token,letter) {
    return async dispatch => {
        dispatch(setLetterLoading());
        const response = await deleteLetter(token, letter);
        if(response.ok){
            dispatch(refreshLetters());
            dispatch(setLetterLoading());
        }
        return response;
    };
}
