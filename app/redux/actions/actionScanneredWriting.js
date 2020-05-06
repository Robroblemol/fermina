import { getWritings } from '../../services/writings'

export const setScannedWriting = (scannedWritings) =>({
    type: 'SET_SCANNED_WRITING',
    scannedWritings
});
export const setScannedWritingLoading = () =>({
    type: 'SET_SCANNED_WRITINGS_LOADING',
});
export const refreshScannedWritings = () =>({
    type:'REFREH_SCANNED_WRITING'
})

export async function getScannedWriting(token,dispatch,data) {
    
    dispatch(setScannedWritingLoading());
    const response = await getWritings(token,data);
    if(response.ok){  
        dispatch(setScannedWriting(response.data.data));
        dispatch(refreshScannedWritings());
    }
    return response.data

}