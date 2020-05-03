import api from './api';
import constants from '../constans/api';

export const getWritings = (token,data) => 
    api('Bearer '+token).get(constants.endpoints.writings,{...data});
export const updateWriting = (token,data) => 
    api('Bearer '+token).put(constants.endpoints.writings,{...data});
export const createWriting = (token,data) => 
        api('Bearer '+token).post(constants.endpoints.writings,{...data});
export const deleteWriting = (token,data) => 
        api('Bearer '+token).delete(constants.endpoints.writings,{...data});
export const setLikeWriting = (token,data) => 
    api('Bearer '+token).post(constants.endpoints.like,{...data});
export const deleteLikeWriting = (token,data) => 
    api('Bearer '+token).delete(constants.endpoints.like,{...data});