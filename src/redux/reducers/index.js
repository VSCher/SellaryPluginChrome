import { combineReducers } from 'redux';
import rateReducer from './rateReducer';

export default combineReducers({
    counter: counterReducer,
    time: timeRuducer,
    rate: rateReducer
});
