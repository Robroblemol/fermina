import api from './api';
import constants from '../constans/api';

export const getLetters = (token,data) => 
    api('Bearer '+token).get(constants.endpoints.letter,{...data});
export const updateLetter = (token,data) => 
    api('Bearer '+token).put(constants.endpoints.letter,{...data});
export const createLetter = (token,data) => 
        api('Bearer '+token).post(constants.endpoints.letter,{...data});
export const deleteLetter = (token,data) => 
        api('Bearer '+token).delete(constants.endpoints.letter,{...data});
