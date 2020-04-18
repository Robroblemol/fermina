import api from './api';
import constants from '../constans/api';
import { useSelector } from 'react-redux'

export const getWritings = (token,data) => 
    api('Bearer '+token).get(constants.endpoints.writings,{...data});