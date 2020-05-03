import authActionsType from './auth';
import writingActionType from './writings'
import letterActionType from './letters'

export default {
    ...authActionsType,
    ...writingActionType,
    ...letterActionType,
}