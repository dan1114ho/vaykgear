import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './_reducers';
import sagas from './_sagas';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [
  routerMiddleware(history),
  sagaMiddleware
];

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
  applyMiddleware(...middleware),
));

sagaMiddleware.run(sagas);

export default store;
