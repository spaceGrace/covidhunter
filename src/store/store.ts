import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getLatestAllCountries } from './sagas';
import appReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  appReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(getLatestAllCountries);

export const action = (type: string) => store.dispatch({type});