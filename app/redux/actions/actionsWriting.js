import {
    getWritings,
    updateWritings,
    createWritings,
    deleteWriting
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



export async function actionGetWriting(token,dispatch,data) {
    
        dispatch(setWritingLoading());
        const response = await getWritings(token,data);
        
        if(response.ok){         
            dispatch(setWriting(response.data.data));
            dispatch(setWritingLoading());
        }
        return response.data
    
}
export function actionCreateWritings(token,writings) {
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
export function actionUpdateWritings(token,writings) {
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
export function actionDeleteWritings(token,writings) {
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