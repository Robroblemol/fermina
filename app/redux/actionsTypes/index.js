import authActionsType from './auth';
import writingActionType from './writings';
import letterActionType from './letters';
import scannedWriting from './scannedWriting';

export default {
    ...authActionsType,
    ...writingActionType,
    ...letterActionType,
    ...scannedWriting,
}