import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
import Logger from 'redux-logger';
let finalCreateStore = compose(
  applyMiddleware(thunk, Logger())
)(createStore);

export default function configureStore(initialState = { todos : [], user:{}}){
  return finalCreateStore (rootReducer, initialState);
}
