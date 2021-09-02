import { combineReducers } from 'redux';
import arrWordsReducer from './arrWordsReducer'
import filterReducer from './FilterReducer'

const reducer = combineReducers({
    arrWordsReducer,filterReducer
});

export default reducer;