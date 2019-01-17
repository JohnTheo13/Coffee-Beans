import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { items } from '../reducers'

const reducers = combineReducers({ items }),

  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line

  store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      reduxDevTools,
    ),
  );

export default store;
