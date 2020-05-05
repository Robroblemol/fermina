import {
    getWritings,
    updateWritings,
    createWriting,
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
export async function actionCreateWritings(token,dispatch,writings) {
        
        dispatch(setWritingLoading());
        const response = await createWriting(token, writings);
        if(response.ok){
            dispatch(refreshWritings());
            dispatch(setWritingLoading());
            return true;
        }else{
            return false;
        }
}
export function actionUpdateWritings(token,writings) {
    return async dispatch => {
        dispatch(setWritingLoading());
        const response = await updateWritings(token, writings);
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
        const response = await deleteWriting(token, writings);
        if(response.ok){
            dispatch(refreshWritings());
            dispatch(setWritingLoading());
        }
        return response;
    };
}