import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import resultReducer from './resultReducer';
export const Reducers = combineReducers(
    {
        requestReducer: requestReducer,
        resultReducer: resultReducer
    }
)


