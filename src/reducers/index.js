import { combineReducers } from 'redux';
import listsReducer from './lists';

const rootReducer = combineReducers({
  myData: listsReducer
});

export default rootReducer;