import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getLatestAllCountries } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(getLatestAllCountries);

const action = type => store.dispatch({type});