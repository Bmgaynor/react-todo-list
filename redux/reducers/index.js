import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import flipBookReducer from './flipBookReducer';


const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
  flipBook: flipBookReducer
});

export default rootReducer;
