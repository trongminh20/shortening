import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import resultReducer from './resultReducer';
import sttDataReducer from './sttDataReducer';

export const Reducers = combineReducers(
    {
        requestReducer: requestReducer,
        resultReducer: resultReducer,
        sttDataReducer: sttDataReducer
    }
)


