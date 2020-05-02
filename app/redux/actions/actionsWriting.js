import {
    getWritings
} from '../../services/writings'

export const setWriting = (writings) =>({
    type: 'SET_WRITINGS',
    writings
});
export const setWritingLoading = () =>({
    type: 'SET_WRITINGS_LOADING',
});
export const refreshWritings = () =>({
    type:'REFREH_WRITINGS'
})



export async function getWriting(token,dispatch,data) {
    
        dispatch(setWritingLoading());
        const response = await getWritings(token,data);
        
        if(response.ok){         
            dispatch(setWriting(response.data.data));
            dispatch(setWritingLoading());
        }
        return response.data
    
}
export function createWritings(token,writings) {
    return async dispatch => {
        dispatch(setWritingLoading());
        const response = await writingService.
            createWritings(token, writings);
        if(response.ok){
            dispatch(refreshWritings());
            dispatch(setWritingLoading());
        }
        return response;
    };
}
export function updateWritings(token,writings) {
    return async dispatch => {
        dispatch(setWritingLoading());
        const response = await writingService.
            updateWritings(token, writings);
        if(response.ok){
            dispatch(refreshWritings());
            dispatch(setWritingLoading());
        }
        return response;
    };
}
export function deleteWritings(token,writings) {
    return async dispatch => {
        dispatch(setWritingLoading());
        const response = await writingService.
            deleteWriting(token, writings);
        if(response.ok){
            dispatch(refreshWritings());
            dispatch(setWritingLoading());
        }
        return response;
    };
}