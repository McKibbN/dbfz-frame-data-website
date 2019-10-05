import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer';
import bluePrintReducer from './bluePrintReducer';

export default combineReducers({
 navigationReducer,
 bluePrintReducer
});
