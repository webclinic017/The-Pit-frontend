import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {};

const middleware = [thunk];

const store = createStore(
  Reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    composeWithDevTools()
  )
);

export default store;