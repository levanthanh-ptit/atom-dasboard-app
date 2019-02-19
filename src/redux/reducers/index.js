import { combineReducers } from "redux";
import tasksReducer from './tasksReducer'
import navigatorReducer from './navigatorReducer'
import headerReducer from './headerReducer'
export default combineReducers({ tasksReducer, navigatorReducer, headerReducer });
